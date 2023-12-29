import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { IoOptionsOutline, IoSearchOutline } from 'react-icons/io5';

import Header from '../components/Main/Header';
import PostItem from '../components/Main/PostItem';
import Search from './Search';
import Filter from './Filter';
import NotFound from '../components/Search/NotFound';
import postsAPI from '../services/posts';
import { filterState } from '../recoils/filterAtom';

export default function Main() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const cityValue = queryParams.get('city');
  const tagValue = queryParams.get('tag');
  const sortValue = queryParams.get('sort');

  const [newKeyword, setNewKeyword] = useState('');

  // 디코딩
  const keyword = decodeURI(location.search);

  // 검색어 모드
  const [searchMode, setSearchMode] = useState(false);

  function searchModeOn() {
    setSearchMode(true);
  }

  function searchModeOff() {
    setSearchMode(false);
  }

  // 필터모드
  const [filterMode, setFilterMode] = useState(false);

  function filterModeOn() {
    setFilterMode(true);
  }

  function filterModeOff() {
    setFilterMode(false);
  }

  const [notFound, setNotFound] = useState(false);

  //  체크된 값을 담을 배열
  const [checkedList, setCheckedList] = useRecoilState(filterState);
  const oneValue = ['최신순', '오래된순', '찜많은순'];

  // 배열에 값 넣기
  function checkedValue(value) {
    setCheckedList((prevList) => {
      // 선택된 값이 있으면 해당 값을 해제(배열에서 삭제)
      if (prevList.includes(value)) {
        return prevList.filter((item) => item !== value);
      }

      // 최신순, 오래된순, 찜많은순이 이미 선택되어 있다면 해당 값을 해제 후 값을 바꿈
      if (oneValue.includes(value)) {
        const updatedList = [value, ...prevList.filter((item) => item !== value && !oneValue.includes(item))];
        return updatedList.slice(0, 5);
      }

      // 길이가 5미만이면 값을 배열에 추가
      if (prevList.length < 6) {
        return [...prevList, value];
      }

      // 길이가 5를 넘으면 이전 값 유지
      return [...prevList];
    });
  }

  console.log('aaaa', tagValue);
  console.log('bbbb', sortValue);
  console.log('cccc', cityValue);

  // 쿼리스트링 만들기
  function makeQueryString() {
    console.log('아아아', newKeyword);
    console.log('checkedList', checkedList);
    let queryString = '/'; // 기본 경로 설정

    if (oneValue.includes(checkedList[0])) {
      if (checkedList.length === 1) {
        queryString = `/filter?sort=${checkedList[0]}`;
      } else {
        const sortStr = checkedList[0];
        const tagQueryString = checkedList.slice(1).join(',');
        queryString = `/filter?tag=${tagQueryString}&sort=${sortStr}`;
      }
    } else if (checkedList.length > 0) {
      const tagQueryString = checkedList.join(',');
      queryString = `/filter?city=${newKeyword}&tag=${tagQueryString}`;
    }

    navigate(queryString);

    filterModeOff();
  }

  useEffect(() => {
    postsAPI.getAllPosts({ tag: tagValue, sort: sortValue, city: cityValue }).then((Posts) => {
      const receivedData = Posts.data.posts;
      setData(receivedData);

      console.log(data);

      // 데이터가 없는 경우 notFound 상태를 true로 설정
      setNotFound(receivedData.length === 0);
    });
  }, [cityValue, tagValue, sortValue]);

  return (
    <>
      {searchMode ? (
        <Search
          searchModeOff={searchModeOff}
          tagValue={tagValue}
          setNewKeyword={setNewKeyword}
          newKeyword={newKeyword}
        />
      ) : filterMode ? (
        <Filter
          filterModeOff={filterModeOff}
          checkedValue={checkedValue}
          makeQueryString={makeQueryString}
          setCheckedList={setCheckedList}
          checkedList={checkedList}
        />
      ) : (
        <div className="w-full h-screen flex justify-center">
          <div className="w-mobile flex flex-col">
            <div>
              <Header />
              <div className="mx-[24px]">
                <div className="mx-auto">
                  <div className="mb-[22px] flex">
                    <div className="w-[264px] h-[52px] border rounded-[26px] border-gray-4 bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mr-[11px] flex items-center">
                      <button className="w-[264px] h-[52px] flex items-center" onClick={() => searchModeOn()}>
                        <div className="mr-[18px] pl-[20px]">
                          <IoSearchOutline size="20px" />
                        </div>
                        {keyword ? (
                          <p> {cityValue}</p>
                        ) : (
                          <span>
                            <div className="text-sm">어디로 여행가세요?</div>
                            <div className="text-[10px] text-gray-1 text-left">여행지를 알려주세요.</div>
                          </span>
                        )}
                      </button>
                    </div>
                    {checkedList === null || checkedList.length === 0 ? (
                      <button
                        className="w-[52px] h-[52px] border rounded-full border-gray-2 flex justify-center items-center"
                        onClick={filterModeOn}
                      >
                        <IoOptionsOutline className="text-[20px]" />
                      </button>
                    ) : (
                      <button
                        className={`w-[52px] h-[52px] ${
                          checkedList ? 'bg-primary' : 'border-gray-2'
                        } rounded-full flex justify-center items-center`}
                        onClick={filterModeOn}
                      >
                        <IoOptionsOutline className={`text-[20px] ${checkedList ? 'text-white' : ''}`} />
                      </button>
                    )}
                  </div>
                  {notFound ? <NotFound /> : <PostItem data={data} filter={tagValue} />}
                </div>
              </div>
              <div className="w-full h-[64px]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
