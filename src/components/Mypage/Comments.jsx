import profile from '../../assets/images/profile.jpg';
import { IoTrashOutline } from 'react-icons/io5';

export default function Comments() {
  return (
    <>
      {/* Mypage Inner Title Compoenent */}
      <div className="text-center mb-[20px]">
        <div className="flex items-center justify-center gap-[4px]">
          <strong className="text-black text-[14px]">내가 쓴 댓글</strong>
        </div>
        <span className="block text-darkgray text-[12px]">총 10건</span>
      </div>
      {/* Mypage Inner Title Compoenent */}

      {/* line */}
      <div className="border-b border-[#F5F5F5] mb-[20px]"></div>
      {/* line */}

      <div className="flex flex-col gap-[20px]">
        {/* Comments List Component */}
        <div className="flex gap-[16px] items-center">
          <img src={profile} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="w-[76%]">
            <div className="flex items-center justify-between">
              <span className="block text-black text-[14px] truncate w-[90%]">
                안목해변이 너무 예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요!!!!
              </span>
              <IoTrashOutline size={16} color="#606060" />
            </div>
          </div>
        </div>
        {/* Comments List Component */}
        <div className="flex gap-[16px] items-center">
          <img src={profile} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="w-[76%]">
            <div className="flex items-center justify-between">
              <span className="block text-black text-[14px] truncate w-[90%]">
                안목해변이 너무 예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요!!!!
              </span>
              <IoTrashOutline size={16} color="#606060" />
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <img src={profile} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="w-[76%]">
            <div className="flex items-center justify-between">
              <span className="block text-black text-[14px] truncate w-[90%]">
                안목해변이 너무 예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요!!!!
              </span>
              <IoTrashOutline size={16} color="#606060" />
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <img src={profile} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="w-[76%]">
            <div className="flex items-center justify-between">
              <span className="block text-black text-[14px] truncate w-[90%]">
                안목해변이 너무 예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요예쁘네요!!!!
              </span>
              <IoTrashOutline size={16} color="#606060" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
