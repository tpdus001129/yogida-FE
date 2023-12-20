import { IoSearchOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import Header from '../components/Search/Header';
import SearchItem from '../components/Search/SearchItem';

export default function Search() {
  const close = true;

  // 검색 데이터
  const [newKeyword, setNewKeyword] = useState('');

  // 로컬스토리지에 배열로 담을 변수
  const [keywords, setKeywords] = useState([]);

  // 검색어를 최근 검색어 목록에 추가(중복 안됨)
  function handleAddKeyword(e) {
    e.preventDefault();

    if (newKeyword) {
      const updatedKeywords = Array.from(new Set([newKeyword, ...keywords])).slice(0, 5);
      setKeywords(updatedKeywords);
      setNewKeyword('');

      localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
    }
  }

  // 로컬 스토리지에서 최근 검색어를 불러옴
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords');
      setKeywords(JSON.parse(result));
    }
  }, []);

  // 최근 검색어가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  // 모든 검색어 삭제
  function handleRemoveAllKeywords() {
    setKeywords([]);
    localStorage.clear();
    localStorage.setItem('keywords', JSON.stringify([]));
  }

  // 단일 검색어 삭제
  function handleRemoveKeywords(selectedKeyword) {
    const updatedKeywords = keywords.filter((keyword) => keyword !== selectedKeyword);
    setKeywords(updatedKeywords);
    localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
  }

  return (
    <div className="w-full">
      <Header title={'검색'} close={close} />
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]" onSubmit={handleAddKeyword}>
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-3 opacity-30"
          type="text"
          placeholder="지역 이름으로 검색해보세요."
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
        />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>
      {/* 최근검색어 */}
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p className="font-bold">최근 검색어</p>
          <button className="text-[14px] text-gary-1" onClick={handleRemoveAllKeywords}>
            전체삭제
          </button>
        </div>
        {/* 최근 검색어 목록 */}
        {keywords.map((keyword) => (
          <SearchItem key={keyword} keyword={keyword} onRemove={handleRemoveKeywords} />
        ))}
      </div>
      {keywords.length === 0 && (
        <p className="text-center text-gray-1 text-[14px] mt-[20px]">최근 검색어 내역이 없습니다.</p>
      )}
    </div>
  );
}
