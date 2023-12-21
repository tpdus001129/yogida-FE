import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import InputWithCheckButton from '../components/Input/InputWithCheckButton';
import InputWithLabel from '../components/Input/InputWithLabel';
import InputWithVerifyCode from '../components/Input/InputWithVerifyCode';
import ModalWithOk from '../components/Modal/ModalWithOk';

import logo from '../assets/logo.png';

import authAPI from '../services/auth';

import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FindPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAvailableEmailInput, setIsAvailableEmailInput] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  const emailValidationMessage = useMemo(() => {
    if (email.length === 0) return '이메일을 작성해주세요.';
    return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.exec(email) === null ? '이메일 형식에 맞춰서 작성해주세요.' : '';
  }, [email]);

  const handleSendValidationCode = async () => {
    await authAPI
      .getEmailVerifyCode({ email })
      .then(() => {
        setModalMessage(`메일이 전송되었습니다.\n5분 안에 인증번호를 입력해주세요.`);
        setIsAvailableEmailInput(false);
        setIsVerificationVisible(true);
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400: {
            setModalMessage(`${error.response.data.error}`);
            break;
          }
          case 500: {
            setModalMessage(`메일 전송에 실패했습니다.\n메일 주소가 유효한지 확인해주세요.`);
            break;
          }
        }
      });
    setIsModalVisible(true);
  };

  const handleCheckValidationCode = async () => {
    await authAPI
      .checkEmailVerifyCode({ email, authCode: verificationCode })
      .then(() => {
        setModalMessage(`인증번호가 일치합니다.`);
        setIsVerificationVisible(false);
        navigate('/change-password');
      })
      .catch((error) => {
        console.log(error);
        switch (error.response.status) {
          case 400: {
            setModalMessage(`${error.response.data.error}`);
            break;
          }
          case 500: {
            setModalMessage(`인증번호 확인 중 오류가 발생했습니다.`);
            break;
          }
        }
      });
    setIsModalVisible(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      {isModalVisible && <ModalWithOk message={modalMessage} onClick={() => setIsModalVisible(false)} />}
      <div className="w-mobile p-6 flex flex-col items-center">
        <Header />
        <img src={logo} alt={logo} className="max-w-[63px] max-h-[77px] mb-5" />
        <div className="flex flex-col [&>:not(:first-child)]:mt-2">
          <h2 className="text-xl font-bold text-center ">비밀번호 찾기</h2>
          <p className="text-xs">가입하신 이메일을 입력해주세요.</p>
        </div>
        <div className="w-full py-10 [&>:not(:first-child)]:mt-5 flex flex-1 flex-col">
          <InputWithLabel
            labelText={'이메일'}
            InputComponent={
              <InputWithCheckButton
                value={email}
                inputType={'email'}
                name={'email'}
                placeholder={'이메일 주소 입력'}
                onChangeFunc={setEmail}
                buttonType={'default'}
                buttonChildren={'이메일 인증하기'}
                isButtonDisabled={emailValidationMessage !== '' || !isAvailableEmailInput}
                isInputDisabled={!isAvailableEmailInput}
                isValid={emailValidationMessage === ''}
                onClick={handleSendValidationCode}
              />
            }
            validateMessage={emailValidationMessage}
          />
          {isVerificationVisible && (
            <InputWithVerifyCode
              time={300}
              value={verificationCode}
              onChangeFunc={setVerificationCode}
              onExpire={() => {}}
            />
          )}
        </div>
        {isVerificationVisible && (
          <Button type={'default'} text={'bold'} onClick={handleCheckValidationCode}>
            인증번호 확인하기
          </Button>
        )}
      </div>
    </div>
  );
}
