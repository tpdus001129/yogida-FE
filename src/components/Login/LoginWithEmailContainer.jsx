import Input from '../commons/Input';
import Button from '../commons/Button';
import InputWithLabel from '../Input/InputWithLabel';
import { useMemo, useState } from 'react';

import { PASSWORD_VALIDATION_CONDITION } from '../../constants/passwordValidationConditions';
import InputPassword from '../Input/InputPassword';

export default function LoginWithEmailContainer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordValidationMessage = useMemo(() => {
    return `${PASSWORD_VALIDATION_CONDITION.filter((condition) => {
      return !condition.validateFunction(password);
    })
      .map((condition) => condition.name)
      .join(', ')}`;
  }, [password]);
  return (
    <div className="w-mobile p-6">
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
              />
            }
            validateMessage={'이메일 형식에 맞춰서 작성해주세요.'}
          />
          <InputWithLabel
            labelText={'비밀번호'}
            InputComponent={<InputPassword value={password} onChangeFunc={setPassword} placeholder={'비밀번호 입력'} />}
            validateMessage={passwordValidationMessage === '' ? '' : `필수 조건: ${passwordValidationMessage}`}
          />
        </div>
      </form>
      <Button type={'primary'} text={'bold'}>
        로그인
      </Button>
      <p className="flex justify-center mt-4">
        <span className="text-xs text-black cursor-pointer">비밀번호가 생각나지 않나요?</span>
      </p>
    </div>
  );
}
