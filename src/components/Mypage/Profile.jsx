import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.jpg';
import { IoIosArrowBack } from 'react-icons/io';

export default function Profile({ setEditProfileMode }) {
  return (
    <>
      <section className="top-0 border-[#E8E8E8] border-b-[1px]">
        <div className="h-header px-[23px] flex items-center justify-start text-[14px] text-black">
          <IoIosArrowBack size={16} onClick={() => setEditProfileMode((prev) => !prev)} />
        </div>
        <div className="flex flex-col items-center justify-center h-[140px] ">
          <img src={profile} alt="profile" className="w-[60px] h-[60px] rounded-full object-cover mb-[10px]" />
          <button className="text-primary text-[14px] font-medium tracking-tight">사진 수정</button>
        </div>
      </section>

      <div className=" mt-[50px]">
        <label htmlFor="email">이메일</label>
        <input type="email" name="email" id="email" />
      </div>
    </>
  );
}

Profile.propTypes = {
  setEditProfileMode: PropTypes.func.isRequired,
};
