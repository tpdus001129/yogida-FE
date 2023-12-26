import PropTypes from 'prop-types';
import { IoChevronBack } from 'react-icons/io5';
import Button from '../commons/Button';
import { useOutletContext } from 'react-router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { userState } from '../../recoils/userAtom';
import { useRecoilValue } from 'recoil';

export default function Profile({ setEditProfileMode }) {
  const { setNavbarHidden } = useOutletContext();
  const { email, nickname, profileImageSrc } = useRecoilValue(userState);

  const [profileImg, setProfileImg] = useState('');
  const imgRef = useRef(null);
  const emailRef = useRef(null);
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);

  useLayoutEffect(() => {
    setNavbarHidden(true);

    return () => {
      setNavbarHidden(false);
    };
  }, [setNavbarHidden]);

  useEffect(() => {
    if (email && nickname && profileImageSrc) {
      setProfileImg(profileImageSrc);
      emailRef.current.value = email;
      nicknameRef.current.value = nickname;
    }
  }, [email, nickname, profileImageSrc]);

  const handleChangeImage = async (e) => {
    if (!e.target.files) {
      return;
    }
    const fileInput = e.target.files[0];
    const url = URL.createObjectURL(fileInput);
    setProfileImg(url);
  };

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
          <input type="file" name="profile" id="profile" className="hidden" ref={imgRef} onChange={handleChangeImage} />
          <img src={profileImg} alt="profile" className="w-[60px] h-[60px] rounded-full object-cover mb-[10px]" />
          <label htmlFor="profile" className="text-primary text-[14px] font-medium tracking-tight">
            사진 수정
          </label>
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
            ref={emailRef}
          />
        </label>
        <label htmlFor="nickname" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">이름</span>
          <input
            type="nickname"
            name="nickname"
            id="nickname"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
            ref={nicknameRef}
          />
        </label>
        <label htmlFor="email" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">비밀번호</span>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
            ref={passwordRef}
          />
        </label>
        <label htmlFor="email" className="text-[14px] font-bold flex items-center">
          <span className="w-[175px]">비밀번호 확인</span>
          <input
            type="password"
            name="password-confirm"
            id="password-confirm"
            className="w-full border-b border-gray-4 focus:outline-none p-[5px] text-[14px] font-medium"
          />
        </label>
      </div>
      <div className="mt-auto flex flex-col gap-[11px] px-[24px] w-full">
        <Button type="primary" size={'large'} text={'bold'}>
          <span className="font-bold text-[14px]">회원 정보 수정</span>
        </Button>
        <Button type={'kakao'} size={'large'} text={'bold'}>
          <span className="font-bold text-[14px]">탈퇴하기</span>
        </Button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  setEditProfileMode: PropTypes.func.isRequired,
};
