import Header from '../../components/Login/Header';
import Button from '../../components/commons/Button';
import InputWithLabel from '../../components/Input/InputWithLabel';
import InputWithCheckButton from '../../components/Input/InputWithCheckButton';
import defaultProfileImage from '../../assets/images/defaultProfile.png';
import Plus from '../../assets/Plus';
import authAPI from '../../services/auth';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useNickname from '../../hooks/useNickname';
import useModal from '../../hooks/useModal';

export default function Setup() {
  const navigate = useNavigate();
  const location = useLocation();

  const { openModal } = useModal();

  const [image, setImage] = useState('');
  const selectFile = useRef(null); // 파일 Input을 위한 ref

  const { nickname, setNickname, isNicknameAvailable, checkNicknameMessage, handleCheckNickname } = useNickname();

  const [email, setEmail] = useState('');
  const [snsId, setSnsId] = useState('');

  useEffect(() => {
    if (location.state) {
      setImage(location.state?.profileImageUrl ?? 'default');
    } else {
      authAPI.getKakaoUserInfo().then((res) => {
        const { email, nickname, profileImageUrl, snsId } = res.data;
        setImage(profileImageUrl);
        setNickname(nickname);
        setEmail(email);
        setSnsId(snsId);
      });
    }
  }, [location.state, setNickname]);

  const handleSignUp = async () => {
    let payload;
    if (location.state) {
      payload = {
        email: location?.state.email,
        nickname,
        password: location.state.password,
        type: 'email',
      };
    } else {
      payload = {
        snsId,
        email,
        nickname,
        profileImageSrc: image,
        type: 'kakao',
      };
    }

    const formDataOfUser = new FormData();
    formDataOfUser.append('payload', JSON.stringify(payload));
    formDataOfUser.append('profile', image);

    await authAPI
      .signup(formDataOfUser)
      .then(() => {
        openModal({ message: `회원가입이 완료되었습니다.`, callback: () => navigate('/') });
      })
      .catch((error) => {
        switch (error?.status) {
          case 409: {
            openModal({ message: `이미 존재하는 이메일로 회원가입을 요청했습니다.` });
            break;
          }
          default: {
            openModal({ message: `회원가입 도중 오류가 발생했습니다.` });
            break;
          }
        }
      });
  };

  const handleUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
      <Header />
      <div className="w-mobile p-6">
        <div className="flex flex-col items-center justify-end">
          <div className={`w-36 h-36 relative`}>
            <img
              src={
                image === 'default'
                  ? defaultProfileImage
                  : typeof image === 'string'
                    ? image
                    : URL.createObjectURL(image)
              }
              className={`w-full h-full bg-cover rounded-full `}
            />
            <input type="file" className="invisible" ref={selectFile} onChange={handleUpload}></input>
            <Plus
              className="w-8 h-8 bg-white rounded-full absolute fill-darkgray right-2 bottom-2 cursor-pointer"
              onClick={() => {
                selectFile.current.click();
              }}
            ></Plus>
          </div>
        </div>
        <div className="py-5">
          <InputWithLabel
            labelText={'닉네임'}
            InputComponent={
              <InputWithCheckButton
                value={nickname}
                name={'nickname'}
                placeholder={'닉네임 입력'}
                onChangeFunc={setNickname}
                buttonType={'default'}
                buttonChildren={'중복 확인'}
                isValid={isNicknameAvailable}
                isButtonDisabled={checkNicknameMessage !== ''}
                onClick={handleCheckNickname}
              />
            }
            validateMessage={checkNicknameMessage}
          />
        </div>
        <div>
          <Button type={'primary'} text={'bold'} isDisabled={!isNicknameAvailable} onClick={handleSignUp}>
            프로필 설정 완료
          </Button>
        </div>
      </div>
    </div>
  );
}
