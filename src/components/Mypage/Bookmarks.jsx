import { IoCheckmarkCircle } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import sample from '../../assets/images/sample.jpg';

export default function Bookmarks() {
  return (
    <>
      {/* Mypage Inner Title Compoenent */}
      <div className="text-center mb-[20px]">
        <div className="flex items-center justify-center gap-[4px]">
          <strong className="text-black text-[14px]">내가 찜한 코스</strong>
          <IoHeartOutline size={13} />
        </div>
        <span className="block text-darkgray text-[12px]">총 20건</span>
      </div>
      {/* Mypage Inner Title Compoenent */}

      {/* Delete All Compoenent */}
      <div className="flex items-center justify-between mb-[20px]">
        <div className="w-fit flex items-center gap-[8px]">
          <label htmlFor="delete" className="cursor-pointer">
            <IoCheckmarkCircle color="#D9D9D9" size={20} />
          </label>
          <input type="checkbox" name="delete" id="delete" className="hidden" />
          <label htmlFor="delete" className="text-[14px] cursor-pointer font-medium">
            전체 선택(1/20)
          </label>
        </div>
        <button className="text-[14px] font-medium">찜 삭제</button>
      </div>
      {/* Delete All Compoenent */}

      {/* line */}
      <div className="border-b border-[#F5F5F5] mb-[20px]"></div>
      {/* line */}

      <div className="flex flex-col gap-[20px]">
        {/* Post List Component */}
        <input type="checkbox" name="delete-item" id="delete-item" className="hidden" />
        <label htmlFor="delete-item" className="cursor-pointer flex items-center gap-[8px] w-full">
          <IoCheckmarkCircle className="text-primary" size={20} />

          <div className="flex gap-[16px] items-center w-full">
            <img src={sample} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
            <div className="w-[65%]">
              <div className="flex items-center">
                <strong className=" block text-black text-[14px] truncate">강릉 여행</strong>
              </div>
              <span className="text-darkgray text-[14px] font-medium">관광명소</span>
            </div>
            <IoTrashOutline size={16} color="#606060" />
          </div>
        </label>

        {/* Post List Component */}
      </div>
    </>
  );
}
