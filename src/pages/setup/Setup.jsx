import Header from '../../components/Login/Header';
import Button from '../../components/commons/Button';
import InputWithLabel from '../../components/Input/InputWithLabel';
import InputWithCheckButton from '../../components/Input/InputWithCheckButton';
import ModalWithOk from '../../components/Modal/ModalWithOk';
import profileImage from '../../assets/images/profile.jpg';

import Plus from '../../assets/Plus';

import userAPI from '../../services/user';
import authAPI from '../../services/auth';

import { useState, useMemo, useEffect } from 'react';
import { useKakaoUserInfoQuery } from './queries';
import { useNavigate } from 'react-router-dom';

export default function Setup() {
  const navigate = useNavigate();

  const { user } = useKakaoUserInfoQuery();

  const [image, setImage] = useState('');
  const [nickname, setNickname] = useState('');

  const [modalMessage, setModalMessage] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const checkNicknameMessage = useMemo(() => {
    return nickname.length > 0 ? '' : '닉네임을 입력해주세요';
  }, [nickname]);

  const handleCheckNickname = async () => {
    await userAPI
      .checkNickname({ nickname })
      .then((data) => {
        setModalMessage(data.data.message);
        setIsNicknameAvailable(true);
      })
      .catch((error) => {
        switch (error?.response?.status) {
          case 409: {
            setModalMessage(`이미 사용중인 닉네임 입니다.`);
            break;
          }
          default: {
            setModalMessage(`닉네임 중복 확인 중 오류가 발생했습니다.`);
            break;
          }
        }
      });
    setIsModalVisible(true);
  };

  const handleSignUp = async () => {
    await authAPI
      .signup({ email: user.data.email, nickname, type: 'kakao' })
      .then(() => {
        setModalMessage(`회원가입이 완료되었습니다.`);
        navigate('/');
      })
      .catch((error) => {
        switch (error.response.status) {
          case 409: {
            setModalMessage(`이미 존재하는 이메일로 회원가입을 요청했습니다.`);
            break;
          }
          default: {
            setModalMessage(`회원가입 도중 오류가 발생했습니다.`);
            break;
          }
        }
      });
    setIsModalVisible(true);
  };

  useEffect(() => {
    if (user !== undefined) {
      setNickname(user.data.nickname);
      setImage(user.data.profileImageUrl);
    }
  }, [user, setNickname, setImage]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
      <Header />
      <div className="w-mobile p-6">
        {isModalVisible && <ModalWithOk message={modalMessage} onClick={() => setIsModalVisible(false)} />}
        <div className="flex flex-col items-center justify-end">
          <div className={`w-36 h-36 relative`}>
            <img src={image === '' ? profileImage : image} className={`w-full h-full bg-cover rounded-full `} />
            <Plus className="w-8 h-8 bg-white rounded-full absolute fill-darkgray right-2 bottom-2 cursor-pointer"></Plus>
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
                isValid={nickname.length > 0 && isNicknameAvailable}
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
