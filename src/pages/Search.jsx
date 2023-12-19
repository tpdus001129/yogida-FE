import { IoSearchOutline } from 'react-icons/io5';

import Header from '../components/Search/Header';
import SearchList from '../components/Search/SearchList';

export default function Search() {
  const close = true;

  return (
    <div className="w-full">
      <Header title={'검색'} close={close} />
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]">
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-3 opacity-30"
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
          <button className="text-[14px] text-gary-1">전체삭제</button>
        </div>
        <hr className="w-full absolute top-0 border-primary" />
        <hr className="w-full absolute bottom-0 border-gray-1" />
      </div>
      {/* 검색어 목록 */}
      <SearchList />
    </div>
  );
}
