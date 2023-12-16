import { useNavigate } from 'react-router-dom';

import { IoOptionsOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';

import PostItem from '../components/Main/PostItem';

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="mx-[24px]">
        <div className="mx-auto">
          {/* 검색, 필터 */}
          <div className="mb-[22px] flex">
            {/* 검색 */}
            <div className="w-[264px] h-[52px] border rounded-[26px] border-[#EEEEEE] bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mr-[11px] flex items-center">
              <button
                className="w-[264px] h-[52px] flex items-center"
                onClick={() => {
                  navigate('/search');
                }}
              >
                <div className="mr-[18px] pl-[20px]">
                  <IoSearchOutline size="20px" />
                </div>
                <span>
                  <div className="text-sm">어디로 여행가세요?</div>
                  <div className="text-[10px] text-[#606060] text-left">여행지를 알려주세요.</div>
                </span>
              </button>
            </div>

            {/* 필터 */}
            <button
              className="w-[52px] h-[52px] border rounded-[26px] border-[#AFAFAF] flex justify-center items-center"
              onClick={() => {
                navigate('/filter');
              }}
            >
              <IoOptionsOutline />
            </button>
          </div>
          <PostItem />
        </div>
      </div>
    </div>
  );
}
