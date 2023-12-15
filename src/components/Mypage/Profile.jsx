import profile from '../../assets/images/profile.jpg';
import { IoIosArrowBack } from 'react-icons/io';

// eslint-disable-next-line react/prop-types
export default function Profile({ setEditProfileMode }) {
  return (
    <section className="top-0">
      <div className="h-header px-[23px] flex items-center justify-start text-[14px] text-black">
        <IoIosArrowBack size={16} onClick={() => setEditProfileMode((prev) => !prev)} />
      </div>
      <div className="flex flex-col items-center justify-center h-[230px] ">
        <img src={profile} alt="profile" className="w-[60px] h-[60px] rounded-full object-cover mb-[10px]" />
        <span className="text-primary text-[14px] font-medium tracking-tight">사진 수정</span>
      </div>
    </section>
  );
}
