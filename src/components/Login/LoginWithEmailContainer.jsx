import { IoEye } from 'react-icons/io5';
import Input from '../commons/Input';
import Button from '../commons/Button';
import ConditionLabel from './ConditionLabel';

export default function LoginWithEmailContainer() {
  return (
    <>
      <form method="post">
        <div className="[&>:not(:first-child)]:mt-5">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="email">
              이메일
            </label>
            <Input
              bgColor={'bg-input'}
              textColor={'text-gray-1'}
              type={'email'}
              name={'email'}
              placeholder={'이메일 주소 입력'}
            />
            <span className="text-xs text-red">이메일 형식에 맞춰서 작성해주세요.</span>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="password">
              비밀번호
            </label>
            <div className="relative">
              <Input
                bgColor={'bg-input'}
                textColor={'text-gray-1'}
                type={'password'}
                name={'password'}
                padding={'pr-9'}
                placeholder={'비밀번호 입력'}
              />
              <IoEye className="text-gray-1 absolute scale-150 right-3 top-3.5" />
            </div>
            <div className="grid grid-cols-2 mb-5">
              <ConditionLabel message={'영문자 포함'} isSatisfied={false} />
              <ConditionLabel message={'숫자 포함'} isSatisfied={false} />
              <ConditionLabel message={'특수문자 포함'} isSatisfied={false} />
              <ConditionLabel message={'8자 이상'} isSatisfied={false} />
            </div>
          </div>
        </div>
      </form>
      <Button type={'submit'}>
        <>로그인</>
      </Button>
      <p className="flex justify-center mt-4">
        <span className="text-xs text-black cursor-pointer">비밀번호가 생각나지 않나요?</span>
      </p>
    </>
  );
}
