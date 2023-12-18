import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.jpg';
import { IoChevronBack } from 'react-icons/io5';
import Button from '../commons/Button';
import { useOutletContext } from 'react-router';
import { useLayoutEffect } from 'react';

export default function Profile({ setEditProfileMode }) {
  const { setNavbarHidden } = useOutletContext();

  useLayoutEffect(() => {
    setNavbarHidden(true);

    return () => {
      setNavbarHidden(false);
    };
  }, [setNavbarHidden]);

  return (
    <div className="flex flex-col pb-[20px] h-screen items-center">
      <section className="w-full top-0 border-gray-4 border-b-[1px]">
        <header className="w-full h-header bg-white text-center flex items-center">
          <IoChevronBack
            size={32}
            className="pl-2 cursor-pointer"
            onClick={() => setEditProfileMode((prev) => !prev)}
          />
        </header>
        <div className="flex flex-col items-center justify-center h-[140px] ">
          <img src={profile} alt="profile" className="w-[60px] h-[60px] rounded-full object-cover mb-[10px]" />
          <button className="text-primary text-[14px] font-medium tracking-tight">사진 수정</button>
        </div>
      </section>

      <div className="px-[23px] mt-[50px] flex flex-col gap-[16px]">
        <label htmlFor="email" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">이메일</span>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
          />
        </label>
        <label htmlFor="email" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">이름</span>
          <input
            type="name"
            name="name"
            id="name"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
          />
        </label>
        <label htmlFor="email" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">비밀번호</span>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
          />
        </label>
        <label htmlFor="email" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">비밀번호 확인</span>
          <input
            type="password-confirm"
            name="password-confirm"
            id="password-confirm"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
          />
        </label>
      </div>
      <div className="mt-auto flex flex-col gap-[11px] px-[24px]">
        <Button bgColor={'bg-primary'} textColor={'text-white'} size={'full'}>
          <span className="font-bold text-[14px]">회원 정보 수정</span>
        </Button>
        <Button bgColor={'bg-secondary'} textColor={'text-gray-1'} size={'full'}>
          <span className="font-bold text-[14px]">탈퇴하기</span>
        </Button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  setEditProfileMode: PropTypes.func.isRequired,
};
