import kakao from '../../assets/kakao.svg';
import { IoMail } from 'react-icons/io5';

import Button from '../commons/Button';

import { Link } from 'react-router-dom';

export default function LoginSelectContainer() {
  return (
    <div className="[&>:not(:first-child)]:mt-5 flex flex-col items-center">
      <Button bgColor={'bg-kakaoyellow'} textColor={'text-kakaoblack'} size={'full'}>
        <img src={kakao} className="box-content w-4 pr-2"></img>
        <span className="font-bold">카카오</span>로 로그인
      </Button>
      <Link to="?type=email">
        <Button bgColor={'bg-primary'} textColor={'text-white'} size={'full'}>
          <IoMail className="box-content pr-2" />
          <span className="font-bold">이메일</span>로 로그인
        </Button>
      </Link>
      <Button bgColor={'bg-primary'} textColor={'text-white'} size={'full'}>
        <IoMail className="box-content pr-2" />
        <span className="font-bold">이메일</span>로 회원가입
      </Button>
    </div>
  );
}
