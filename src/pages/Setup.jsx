import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import InputWithLabel from '../components/Input/InputWithLabel';
import InputWithCheckButton from '../components/Input/InputWithCheckButton';
import ModalWithOk from '../components/Modal/ModalWithOk';

import Plus from '../assets/Plus';

import userAPI from '../services/user';

import { useState, useMemo } from 'react';

export default function Setup() {
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
        switch (error.response.status) {
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

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
      <Header />
      <div className="w-mobile p-6">
        {isModalVisible && <ModalWithOk message={modalMessage} onClick={() => setIsModalVisible(false)} />}
        <div className="flex flex-col items-center justify-end">
          <div className="w-36 h-36 bg-[url('./assets/images/profile.jpg')] bg-cover rounded-full relative">
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
          <Button type={'primary'} text={'bold'} isDisabled={!isNicknameAvailable}>
            프로필 설정 완료
          </Button>
        </div>
      </div>
    </div>
  );
}
