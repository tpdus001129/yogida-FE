import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import InputWithLabel from '../components/Input/InputWithLabel';
import InputPassword from '../components/Input/InputPassword';
import InputWithCheckButton from '../components/Input/InputWithCheckButton';

import { PASSWORD_VALIDATION_CONDITION } from '../constants/passwordValidationConditions';

import authAPI from '../services/auth';
import userAPI from '../services/user';

import { useState, useMemo } from 'react';
import InputWithVerifyCode from '../components/Input/InputWithVerifyCode';
import ModalWithOk from '../components/Modal/ModalWithOk';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const [modalMessage, setModalMessage] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [isAvailableEmailInput, setIsAvailableEmailInput] = useState(true);
  const [isEmailCertificated, setIsEmailCertificated] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const emailValidationMessage = useMemo(() => {
    if (email.length === 0) return '이메일을 작성해주세요.';
    return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.exec(email) === null ? '이메일 형식에 맞춰서 작성해주세요.' : '';
  }, [email]);

  const passwordValidationMessage = useMemo(() => {
    return `${PASSWORD_VALIDATION_CONDITION.filter((condition) => {
      return !condition.validateFunction(password);
    })
      .map((condition) => condition.name)
      .join(', ')}`;
  }, [password]);

  const checkPasswordValidationMessage = useMemo(() => {
    return password === checkPassword ? '' : '비밀번호가 일치하지 않습니다';
  }, [password, checkPassword]);

  const checkNicknameMessage = useMemo(() => {
    return nickname.length > 0 ? '' : '닉네임을 입력해주세요';
  }, [nickname]);

  const isSignUpAvailable = useMemo(() => {
    return (
      isEmailCertificated &&
      passwordValidationMessage === '' &&
      checkPasswordValidationMessage === '' &&
      isNicknameAvailable
    );
  }, [isEmailCertificated, passwordValidationMessage, checkPasswordValidationMessage, isNicknameAvailable]);

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
        setIsEmailCertificated(true);
      })
      .catch((error) => {
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

  const handleSignUp = async () => {
    await authAPI
      .signup({ email, password, nickname, type: 'email' })
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

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Header />
      <div className="w-mobile p-6 flex flex-col mt-header overflow-y-hidden">
        <div className="h-20">
          <h2 className="self-start text-xl font-bold mb-3">회원가입</h2>
          <p className="text-s mb-5">반가워요! 가입을 위해 몇 가지만 확인할게요.</p>
        </div>
        <div className="[&>:not(:first-child)]:mt-5 flex-1 overflow-y-auto overflow-x-hidden">
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
                buttonChildren={'인증번호 전송'}
                isButtonDisabled={emailValidationMessage !== '' || !isAvailableEmailInput}
                isInputDisabled={!isAvailableEmailInput}
                isValid={emailValidationMessage === ''}
                onClick={handleSendValidationCode}
              />
            }
            validateMessage={emailValidationMessage}
          />
          {isModalVisible && <ModalWithOk message={modalMessage} onClick={() => setIsModalVisible(false)} />}
          {isVerificationVisible && (
            <div>
              <InputWithVerifyCode
                time={300}
                value={verificationCode}
                onChangeFunc={setVerificationCode}
                onExpire={() => {
                  setIsModalVisible(true);
                  setModalMessage(`입력 시간이 지났습니다.\n다시 인증번호를 요청 해주세요.`);
                  setIsVerificationVisible(false);
                }}
              />
              <Button onClick={handleCheckValidationCode}>인증번호 확인</Button>
            </div>
          )}
          <InputWithLabel
            labelText={'비밀번호'}
            InputComponent={
              <InputPassword
                value={password}
                name={'password'}
                onChangeFunc={setPassword}
                placeholder={'비밀번호 입력'}
                isValid={passwordValidationMessage === ''}
              />
            }
            validateMessage={passwordValidationMessage === '' ? '' : `필수 조건: ${passwordValidationMessage}`}
          />
          <InputWithLabel
            labelText={'비밀번호 확인'}
            InputComponent={
              <InputPassword
                value={checkPassword}
                name={'check-password'}
                onChangeFunc={setCheckPassword}
                placeholder={'비밀번호 재입력'}
                isValid={checkPasswordValidationMessage === '' && checkPassword !== ''}
              />
            }
            validateMessage={checkPasswordValidationMessage}
          />
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
        <div className="h-20 flex items-center">
          <Button type={'primary'} size={'large'} text={'bold'} isDisabled={!isSignUpAvailable} onClick={handleSignUp}>
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
}
