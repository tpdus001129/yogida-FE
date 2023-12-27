import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoOptionsOutline, IoSearchOutline } from 'react-icons/io5';

import Header from '../components/Main/Header';
import PostItem from '../components/Main/PostItem';
import Search from './Search';
import Filter from './Filter';
import NotFound from '../components/Search/NotFound';
import postsAPI from '../services/posts';

export default function Main() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cityValue = queryParams.get('city');
  const tagValue = queryParams.get('tag');
  const navigate = useNavigate();

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

  // 체크된 값을 담을 배열
  const [checkedList, setCheckedList] = useState([]);

  // 배열에 값 넣기
  function checkedValue(value) {
    setCheckedList((prevList) => {
      // 선택된 값이 있으면 해당 값을 해제(배열에서 삭제)
      if (prevList.includes(value)) {
        return prevList.filter((item) => item !== value);
      }

      // 최신순, 오래된순, 찜많은순이 이미 선택되어 있다면 해당 값을 해제 후 값을 바꿈
      const oneValue = ['최신순', '오래된순', '찜많은순'];
      if (oneValue.includes(value)) {
        const changeValue = prevList.filter((item) => oneValue.includes(item));
        if (changeValue.length > 0) {
          return [...prevList.filter((item) => !oneValue.includes(item)), value];
        }
      }

      // 길이가 5미만이면 값을 배열에 추가
      if (prevList.length < 5) {
        return [...prevList, value];
      }

      // 길이가 5를 넘으면 이전 값 유지
      return [...prevList];
    });
  }

  // 쿼리스트링 만들기
  function makeQueryString() {
    if (Array.isArray(checkedList)) {
      const queryString = checkedList.join(',');
      navigate(`?tag=${queryString}`);
      filterModeOff();
      setNotFound(true);
    }
  }

  // 키워드가 있냐 없냐에 따라 부르는 API가 달라지게 구현해야함
  // [전체 검색]: 여기만 useEffect사용, [키워드], [필터+검색] 으로 나눠짐 -> useEffect에 전부다 들어가 있으면 안됨(따로)
  useEffect(() => {
    postsAPI.getAllPosts({ sort: '최신순', city: '서울' }).then((Posts) => {
      setData(Posts);
    });
  }, [data]);

  // if (keyword) {
  //   getPostSearchCity(cityValue).then((posts) => {
  //     if (posts.length === 0) {
  //       setNotFound(true);
  //     } else {
  //       setData(posts);
  //     }
  //   });
  // }
  // if (checkedList.length > 0) {
  //   getPostTag(checkedList).then((posts) => {
  //     setData(posts);
  //   });
  // }

  useEffect(() => {
    console.log('태그전달값', checkedList);
  }, [checkedList]);

  return (
    <>
      {searchMode ? (
        <Search searchModeOff={searchModeOff} />
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
