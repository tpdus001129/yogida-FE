import Header from '../components/Login/Header';
import Button from '../components/commons/Button';

import Plus from '../assets/Plus';
import InputWithLabel from '../components/Input/InputWithLabel';
import InputWithCheckButton from '../components/Input/InputWithCheckButton';
import { useState } from 'react';

export default function Setup() {
  const [nickname, setNickname] = useState('');
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
          <InputWithLabel
            labelText={'닉네임'}
            InputComponent={
              <InputWithCheckButton
                value={nickname}
                inputType={'email'}
                name={'email'}
                placeholder={'이메일 주소 입력'}
                onChangeFunc={setNickname}
                buttonType={'default'}
                buttonChildren={'중복 확인'}
                isButtonDisabled={nickname !== ''}
              />
            }
          />
        </div>
        <div>
          <Button type={'primary'} text={'bold'}>
            프로필 설정 완료
          </Button>
        </div>
      </div>
    </div>
  );
}
