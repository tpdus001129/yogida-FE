import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { IoOptionsOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';

import { getPostsAllList } from '../services/posts';

import Header from '../components/Main/Header';
import PostItem from '../components/Main/PostItem';
import Search from './Search';
import NotFound from '../components/Search/NoFound';

import { getPostSearchCity } from '../services/posts';

export default function Main() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cityValue = queryParams.get('city');

  // 검색어 모드
  const [searchMode, setSearchMode] = useState(false);
  const keyword = decodeURI(location.search);

  function searchModeOn() {
    setSearchMode(true);
  }

  function searchModeOff() {
    setSearchMode(false);
  }

  const [notFound, setNotFound] = useState(false);

  // API
  useEffect(() => {
    getPostsAllList().then((posts) => {
      setData(posts);
      if (keyword) {
        getPostSearchCity(cityValue).then((posts) => {
          if (posts.length === 0) {
            setNotFound(true);
          } else {
            setData(posts);
          }
        });
      }
    });
  }, [keyword, cityValue]);

  return (
    <>
      {searchMode ? (
        <Search searchModeOff={searchModeOff} />
      ) : (
        <div className="w-full h-screen flex justify-center">
          <div className="w-mobile flex flex-col">
            <div>
              <Header />
              <div className="mx-[24px] mt-[24px]">
                <div className="mx-auto">
                  <div className="mb-[22px] flex">
                    <div className="w-[264px] h-[52px] border rounded-[26px] border-gray-4 bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mr-[11px] flex items-center">
                      <button className="w-[264px] h-[52px] flex items-center" onClick={() => searchModeOn()}>
                        <div className="mr-[18px] pl-[20px]">
                          <IoSearchOutline size="20px" />
                        </div>
                        <span>
                          <div className="text-sm">어디로 여행가세요?</div>
                          <div className="text-[10px] text-gray-1 text-left">여행지를 알려주세요.</div>
                        </span>
                      </button>
                    </div>

                    {/* 필터 */}
                    <button
                      className="w-[52px] h-[52px] border rounded-[26px] border-gray-2 flex justify-center items-center"
                      onClick={() => {
                        navigate('/filter');
                      }}
                    >
                      <IoOptionsOutline />
                    </button>
                  </div>
                  {notFound ? <NotFound /> : <PostItem data={data} />}
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
