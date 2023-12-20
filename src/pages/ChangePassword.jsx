import Header from '../components/Login/Header';
import Input from '../components/commons/Input';
import Button from '../components/commons/Button';
import InputWithLabel from '../components/Input/InputWithLabel';
import { IoEye } from 'react-icons/io5';

import { useState, useMemo } from 'react';

import logo from '../assets/logo.png';
import { PASSWORD_VALIDATION_CONDITION } from '../constants/passwordValidationConditions';

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

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

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <div className="w-mobile p-6 flex flex-col items-center">
        <Header />
        <img src={logo} alt={logo} className="max-w-[63px] max-h-[77px] mb-5" />
        <div className="flex flex-col [&>:not(:first-child)]:mt-2">
          <h2 className="text-xl font-bold text-center ">비밀번호 변경</h2>
          <p className="text-xs">비밀번호를 변경해주세요.</p>
        </div>
        <div className="py-10 [&>:not(:first-child)]:mt-5 flex flex-1 flex-col">
          <InputWithLabel
            labelText={'비밀번호'}
            InputComponent={
              <div className="relative">
                <Input
                  value={password}
                  bgColor={'bg-input'}
                  textColor={'text-darkgray'}
                  type={'password'}
                  name={'password'}
                  padding={'pr-9'}
                  placeholder={'비밀번호 입력'}
                  onChangeFunc={setPassword}
                />
                <IoEye className="text-darkgray absolute scale-150 right-3 top-3.5" />
              </div>
            }
            validateMessage={passwordValidationMessage === '' ? '' : `필수 조건: ${passwordValidationMessage}`}
          />
          <InputWithLabel
            labelText={'비밀번호 확인'}
            InputComponent={
              <div className="relative">
                <Input
                  value={checkPassword}
                  bgColor={'bg-input'}
                  textColor={'text-darkgray'}
                  type={'password'}
                  name={'check-password'}
                  padding={'pr-9'}
                  placeholder={'비밀번호 재입력'}
                  onChangeFunc={setCheckPassword}
                />
                <IoEye className="text-darkgray absolute scale-150 right-3 top-3.5" />
              </div>
            }
            validateMessage={checkPasswordValidationMessage}
          />
        </div>
        <Button>비밀번호 변경</Button>
      </div>
    </div>
  );
}
