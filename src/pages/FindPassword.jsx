import Header from '../components/Login/Header';
import Input from '../components/commons/Input';
import Button from '../components/commons/Button';

import logo from '../assets/logo.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputWithLabel from '../components/Input/InputWithLabel';

export default function FindPassword() {
  const [minute] = useState('0');
  const [second] = useState('0');

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <div className="w-mobile p-6 flex flex-col items-center">
        <Header />
        <img src={logo} alt={logo} className="max-w-[63px] max-h-[77px] mb-5" />
        <div className="flex flex-col [&>:not(:first-child)]:mt-2">
          <h2 className="text-xl font-bold text-center ">비밀번호 찾기</h2>
          <p className="text-xs">가입하신 이메일을 입력해주세요.</p>
        </div>
        <div className="py-10 [&>:not(:first-child)]:mt-5 flex flex-1 flex-col">
          <InputWithLabel
            labelText={'이메일'}
            InputComponent={
              <Input
                bgColor={'bg-input'}
                textColor={'text-gray-1'}
                type={'email'}
                name={'email'}
                placeholder={'이메일 주소 입력'}
              />
            }
            validateMessage={'이메일 형식에 맞춰서 작성해주세요.'}
          />
          <Button type={'default'} text={'bold'}>
            이메일 인증하기
          </Button>
          <InputWithLabel
            labelText={'인증번호 입력'}
            InputComponent={
              <div className="flex flex-row justify-between">
                <Input
                  width={'w-64'}
                  bgColor={'bg-input'}
                  textColor={'text-gray-1'}
                  name={'verification-code'}
                  placeholder={'인증번호 입력'}
                  maxLength={6}
                />
                <span className=" text-red inline-block grow self-center text-center">
                  {minute}:{second.padStart(2, '0')}
                </span>
              </div>
            }
          />
        </div>
        <Link to="/change-password" className="w-full">
          <Button type={'default'} text={'bold'}>
            인증번호 확인하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
