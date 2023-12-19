import Header from '../components/Login/Header';
import Button from '../components/commons/Button';
import Input from '../components/commons/Input';

import Plus from '../assets/Plus';

export default function Setup() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
      <Header />
      <div className="w-mobile p-6">
        <div className="flex flex-col items-center justify-end">
          <div className="w-36 h-36 bg-[url('./assets/images/profile.jpg')] bg-cover rounded-full relative">
            <Plus className="w-8 h-8 bg-white rounded-full absolute fill-darkgray right-2 bottom-2 cursor-pointer"></Plus>
          </div>
        </div>
        <div className="py-5">
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
        </div>
        <div>
          <Button>프로필 설정 완료</Button>
        </div>
      </div>
    </div>
  );
}
