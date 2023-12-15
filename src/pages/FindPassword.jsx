import Header from '../components/Login/Header';
import Input from '../components/commons/Input';
import Button from '../components/commons/Button';

import logo from '../assets/logo.png';

import { useState } from 'react';

export default function FindPassword() {
  const [minute] = useState('0');
  const [second] = useState('0');

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <div className="w-mobile p-6 flex flex-col items-center">
        <Header />
        <img src={logo} alt={logo} className="max-w-[63px] max-h-[77px] mb-5" />
        <div className="flex flex-col mb-8 [&>:not(:first-child)]:mt-2">
          <h2 className="text-xl font-bold text-center ">비밀번호 찾기</h2>
          <p className="text-xs">가입하신 이메일을 입력해주세요.</p>
        </div>
        <div className="flex flex-col justify-start mb-5">
          <label className="text-sm font-bold mb-3" htmlFor="email">
            이메일
          </label>
          <Input
            bgColor={'bg-input'}
            textColor={'text-darkgray'}
            type={'email'}
            name={'email'}
            placeholder={'이메일 주소 입력'}
          />
          <p className="text-xs text-danger">이메일 형식에 맞춰서 작성해주세요.</p>
        </div>
        <Button fontSize={'text-sm'} bgColor={'bg-white'} textColor={'text-primary'} borderColor={'border-primary'}>
          이메일 인증하기
        </Button>
        <div className="w-full flex flex-col justify-start mt-5 mb-16">
          <label className="text-sm font-bold mb-3" htmlFor="verification-code">
            인증번호 입력
          </label>
          <div className="flex flex-row justify-between">
            <Input
              width={'w-64'}
              bgColor={'bg-input'}
              textColor={'text-darkgray'}
              name={'verification-code'}
              placeholder={'인증번호 입력'}
              maxLength={6}
            />
            <span className=" text-danger inline-block grow self-center text-center">
              {minute}:{second.padStart(2, '0')}
            </span>
          </div>
        </div>
        <Button fontSize={'text-sm'} bgColor={'bg-white'} textColor={'text-primary'} borderColor={'border-primary'}>
          인증번호 확인하기
        </Button>
      </div>
    </div>
  );
}
