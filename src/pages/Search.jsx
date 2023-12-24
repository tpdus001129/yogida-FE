import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IoSearchOutline } from 'react-icons/io5';

import Header from '../components/Search/Header';
import SearchItem from '../components/Search/SearchItem';
import SearchInput from '../components/commons/SearchInput';

export default function Search({ searchModeOff }) {
  const close = true;
  const [, setSearchParams] = useSearchParams();

  // 검색 데이터
  const [newKeyword, setNewKeyword] = useState('');

  // 로컬스토리지에 배열로 담을 변수
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const result = localStorage.getItem('keywords');
    if (result.length !== 0) {
      setKeywords(JSON.parse(result));
    }
  }, []);

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

  // 현재 입력 검색어 저장
  function onChangeHandler(e) {
    setNewKeyword(e.target.value);
  }

  // 검색
  function searchHandler() {
    if (newKeyword) {
      setSearchParams({
        city: newKeyword,
      });
      searchModeOff();
    } else if (newKeyword === '' || newKeyword === null) {
      return;
    } else {
      searchModeOff();
      alert('존재하지 않는 게시물');
    }
  }

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <div className="w-full">
      <Header title={'검색'} close={close} searchModeOff={searchModeOff} />
      <form
        className="w-full h-[74px] flex relative items-center px-[24px]"
        onSubmit={(e) => {
          handleAddKeyword(e);
          searchHandler();
          handleRefresh();
        }}
      >
        <SearchInput newKeyword={newKeyword} onChangeHandler={onChangeHandler} />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p className="font-bold text-[14px]">최근 검색어</p>
          <button className="text-[14px] text-gary-1" onClick={handleRemoveAllKeywords}>
            전체삭제
          </button>
        </div>
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

Search.propTypes = {
  searchModeOff: PropTypes.func,
};
