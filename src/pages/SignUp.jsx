import { IoEye } from 'react-icons/io5';
import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import Input from '../components/commons/Input';

export default function Signup() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
      <Header />
      <div className="w-mobile p-6">
        <h2 className="self-start text-xl font-bold mb-3">회원가입</h2>
        <p className="text-s mb-5">반가워요! 가입을 위해 몇 가지만 확인할게요.</p>
        <div className="[&>:not(:first-child)]:mt-5 mb-10">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="email">
              이메일
            </label>
            <div className="flex flex-row justify-between">
              <Input width={'w-[220px]'} type={'email'} name={'email'} placeholder={'이메일 주소 입력'} />
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
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="password">
              비밀번호
            </label>
            <div className="relative">
              <Input type={'password'} placeholder={'비밀번호 입력'} name={'password'} padding={'pr-9'} />
              <IoEye className="text-darkgray absolute scale-150 right-3 top-3.5" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="password">
              비밀번호 확인
            </label>
            <div className="relative">
              <Input type={'password'} placeholder={'확인용 비밀번호 입력'} name={'password-check'} padding={'pr-9'} />
              <IoEye className="text-darkgray absolute scale-150 right-3 top-3.5" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-3" htmlFor="email">
              닉네임
            </label>
            <div className="flex flex-row justify-between">
              <Input width={'w-[220px]'} placeholder={'닉네임 입력'} name={'nickname'} />
              <Button
                width={'w-[100px]'}
                fontSize={'text-sm'}
                bgColor={'bg-white'}
                textColor={'text-primary'}
                borderColor={'border-primary'}
                isDisabled={true}
              >
                중복 확인
              </Button>
            </div>
          </div>
        </div>
        <Button>회원가입</Button>
      </div>
    </div>
  );
}
