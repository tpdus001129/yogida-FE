import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IoBookmarkOutline, IoBookmark, IoStar, IoCar, IoWalkOutline } from 'react-icons/io5';

import NoImage from './NoImage';

export default function ContentItem({ firstPlace, distance, lastPlace, data }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleClickMap() {
    navigate('/map');
  }

  // 거리별 아이콘 타입
  // function distanceIconType(distance) {
  //   if (Number(distance) < 1000) {
  //     return console.log('뚜벅이');
  //   } else {
  //     return '자동차';
  //   }
  // }

  // function category() {
  //   if (data && data[0].category) {
  //     const categoryData = data[0].category;
  //     return categoryData;
  //   }
  // }
  // console.log('아이템', category());

  if (!data) return <div>Loading...</div>;
  return (
    <>
      {/* {data.map((place) => <div>{place}</div>)} */}
      {/* {data.schedules[0].map((schedule, index) => { */}
      <div className="flex mx-[24px] justify-between key={index}">
        {/* 왼쪽 컨텐츠*/}
        <div className="flex flex-col items-center relative">
          {firstPlace && <p className="text-[12px] absolute w-[24px] text-center ml-[50px] leading-[24px]">출발</p>}
          <div className="w-[24px] h-[24px] rounded-full bg-secondary">
            {lastPlace && <p className="text-[12px] absolute w-[24px] text-center ml-[26px] leading-[24px]">도착</p>}
          </div>
          <div className="absolute text-[12px] leading-[24px]">1</div>
          {lastPlace ? <div></div> : <div className="w-[3px] h-[144px] bg-gray-4 mt-[-1px]"></div>}
          {lastPlace ? (
            ''
          ) : (
            <div className="absolute bottom-[40px] bg-white flex items-center">
              {distance ? (
                <IoCar size="26px" className="text-gray-4" />
              ) : (
                <IoWalkOutline size="26px" className="text-gray-4" />
              )}
              <p className="text-[12px] w-[40px] mr-[-40px] pl[2px]">거리km</p>
            </div>
          )}
        </div>
        {/* 오른쪽 컨텐츠 */}
        <div
          className="w-[236px] h-[130px] bg-white rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          onClick={handleClickMap}
        >
          <div className="h-[43px] flex justify-between items-center mx-[16px] rounded-t-[20px]">
            <div className="flex">
              <p className="text-[14px] mr-[4px] font-bold"></p>
              <p className="text-[12px] mt-[2px] line-height-[14px]">{data.category}</p>
            </div>
            <button onClick={handleClick}>
              {isClicked ? (
                <IoBookmark className="text-secondary" size="17" />
              ) : (
                <IoBookmarkOutline className="text-secondary" size="17" />
              )}
            </button>
          </div>
          <div className="h-[87px] rounded-b-[20px] bg-gray-3 relative overflow-hidden">
            <div>
              <NoImage />
            </div>
            <div className="absolute bottom-[9px] right-[16px]">
              <IoStar className="text-secondary" />
            </div>
          </div>
        </div>
      </div>
      {/* })} */}
    </>
  );
}

ContentItem.propTypes = {
  firstPlace: PropTypes.bool,
  distance: PropTypes.bool,
  lastPlace: PropTypes.bool,
  index: PropTypes.number.isRequired,
  data: PropTypes.array,
};
