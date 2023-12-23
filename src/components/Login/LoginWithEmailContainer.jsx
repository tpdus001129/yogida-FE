import Input from '../commons/Input';
import Button from '../commons/Button';
import InputWithLabel from '../Input/InputWithLabel';
import InputPassword from '../Input/InputPassword';
import ModalWithOk from '../Modal/ModalWithOk';

import authAPI from '../../services/auth';

import { PASSWORD_VALIDATION_CONDITION } from '../../constants/passwordValidationConditions';

import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginWithEmailContainer() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [modalMessage, setModalMessage] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleLogin = async () => {
    await authAPI
      .login({ email, password })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 400: {
            setModalMessage(`이메일 또는 비밀번호가 일치하지 않습니다.`);
            setIsModalVisible(true);
            break;
          }
        }
      });
  };

  return (
    <div className="w-mobile p-6">
      {isModalVisible && <ModalWithOk message={modalMessage} onClick={() => setIsModalVisible(false)} />}
      <form method="post" className="py-10">
        <div className="[&>:not(:first-child)]:mt-5">
          <InputWithLabel
            labelText={'이메일'}
            InputComponent={
              <Input
                type={'default'}
                value={email}
                inputType={'email'}
                name={'email'}
                placeholder={'이메일 주소 입력'}
                onChangeFunc={setEmail}
                isValid={emailValidationMessage == ''}
              />
            }
            validateMessage={emailValidationMessage}
          />
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
        </div>
      </form>
      <Button
        type={'primary'}
        text={'bold'}
        onClick={handleLogin}
        isDisabled={emailValidationMessage !== '' || passwordValidationMessage !== ''}
      >
        로그인
      </Button>
      <Link to="/find-password">
        <p className="flex justify-center mt-4">
          <span className="text-xs text-black cursor-pointer">비밀번호가 생각나지 않나요?</span>
        </p>
      </Link>
    </div>
  );
}
