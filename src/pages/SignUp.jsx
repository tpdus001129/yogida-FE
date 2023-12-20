import { IoEye } from 'react-icons/io5';
import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import Input from '../components/commons/Input';
import InputWithLabel from '../components/Input/InputWithLabel';

import { useState, useMemo } from 'react';

import { PASSWORD_VALIDATION_CONDITION } from '../constants/passwordValidationConditions';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [nickname, setNickname] = useState('');

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

  const isPasswordSatisfied = useMemo(() => {
    return passwordValidationMessage === '';
  }, [passwordValidationMessage]);

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
              <div className="flex flex-row justify-between">
                <Input
                  width={'w-[220px]'}
                  value={email}
                  bgColor={'bg-input'}
                  textColor={'text-darkgray'}
                  type={'email'}
                  name={'email'}
                  placeholder={'이메일 주소 입력'}
                  onChangeFunc={setEmail}
                />
                <Button
                  width={'w-[100px]'}
                  fontSize={'text-sm'}
                  bgColor={'bg-white'}
                  textColor={'text-primary'}
                  borderColor={'border-primary'}
                  isDisabled={true}
                >
                  인증번호 전송
                </Button>
              </div>
            }
            validateMessage={'이메일 형식에 맞춰서 작성해주세요.'}
          />
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
          <InputWithLabel
            labelText={'닉네임'}
            InputComponent={
              <div className="flex flex-row justify-between">
                <Input
                  value={nickname}
                  width={'w-[220px]'}
                  placeholder={'닉네임 입력'}
                  name={'nickname'}
                  onChangeFunc={setNickname}
                />
                <Button
                  width={'w-[100px]'}
                  fontSize={'text-sm'}
                  bgColor={'bg-white'}
                  textColor={'text-primary'}
                  borderColor={'border-primary'}
                  isDisabled={checkNicknameMessage !== '' ? true : false}
                >
                  중복 확인
                </Button>
              </div>
            }
            validateMessage={checkNicknameMessage}
          />
        </div>
        <div className="h-20 flex items-center">
          <Button isDisabled={!isPasswordSatisfied}>회원가입</Button>
        </div>
      </div>
    </div>
  );
}
