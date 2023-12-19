import Header from '../components/Login/Header';
import Input from '../components/commons/Input';
import Button from '../components/commons/Button';
import ConditionLabel from '../components/Login/ConditionLabel';
import { IoEye } from 'react-icons/io5';

import logo from '../assets/logo.png';

export default function ChangePassword() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <div className="w-mobile p-6 flex flex-col items-center">
        <Header />
        <img src={logo} alt={logo} className="max-w-[63px] max-h-[77px] mb-5" />
        <div className="flex flex-col mb-8 [&>:not(:first-child)]:mt-2">
          <h2 className="text-xl font-bold text-center ">비밀번호 변경</h2>
          <p className="text-xs">비밀번호를 변경해주세요.</p>
        </div>
        <div className="mb-12">
          <div className="flex flex-col justify-start mb-5">
            <label className="text-sm font-bold mb-3" htmlFor="password">
              비밀번호
            </label>
            <Input type={'password'} name={'password'} placeholder={'비밀번호 입력'} />
            <div className="grid grid-cols-2 mb-5">
              <ConditionLabel message={'영문자 포함'} isSatisfied={false} />
              <ConditionLabel message={'숫자 포함'} isSatisfied={false} />
              <ConditionLabel message={'특수문자 포함'} isSatisfied={false} />
              <ConditionLabel message={'8자 이상'} isSatisfied={false} />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="password">
              비밀번호 확인
            </label>
            <div className="relative">
              <Input type={'password'} placeholder={'확인용 비밀번호 입력'} name={'password-check'} padding={'pr-9'} />
              <IoEye className="text-gray-1 absolute scale-150 right-3 top-3.5" />
            </div>
            <p className="text-xs text-red">비밀번호가 일치하지 않습니다.</p>
          </div>
        </div>
        <Button>비밀번호 변경</Button>
      </div>
    </div>
  );
}
