import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import InputWithLabel from '../components/Input/InputWithLabel';

import { useState, useMemo } from 'react';

import logo from '../assets/logo.png';
import { PASSWORD_VALIDATION_CONDITION } from '../constants/passwordValidationConditions';
import InputPassword from '../components/Input/InputPassword';

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
            InputComponent={<InputPassword value={password} onChangeFunc={setPassword} placeholder={'비밀번호 입력'} />}
            validateMessage={passwordValidationMessage === '' ? '' : `필수 조건: ${passwordValidationMessage}`}
          />
          <InputWithLabel
            labelText={'비밀번호 확인'}
            InputComponent={
              <InputPassword value={checkPassword} onChangeFunc={setCheckPassword} placeholder={'비밀번호 재입력'} />
            }
            validateMessage={checkPasswordValidationMessage}
          />
        </div>
        <Button type={'default'} text={'bold'}>
          비밀번호 변경
        </Button>
      </div>
    </div>
  );
}
