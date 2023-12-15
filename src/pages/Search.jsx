import { useNavigate } from 'react-router-dom';

import { IoClose } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';

import SearchList from '../components/Search/SearchList';

export default function Search() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full h-[56px] flex items-center justify-center px-[24px]">
        <p className="w-full h-full flex items-center justify-center">검색</p>
        <IoClose
          size="24px"
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]">
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-[#F4F4F4]"
          type="text"
          placeholder="지역 이름으로 검색해보세요."
        />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>
      {/* 최근검색어 */}
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p className="font-bold">최근 검색어</p>
          <button className="text-[14px] text-[#848484]">전체삭제</button>
        </div>
        <hr className="w-full absolute top-0 border-primary" />
        <hr className="w-full absolute bottom-0 border-[#848484]" />
      </div>
      {/* 검색어 목록 */}
      <SearchList />
    </div>
  );
}
