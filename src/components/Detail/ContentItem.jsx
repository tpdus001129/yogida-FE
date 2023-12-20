import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IoBookmarkOutline, IoBookmark, IoStar, IoCar, IoWalkOutline } from 'react-icons/io5';

import NoImage from './NoImage';

export default function ContentItem({ firstPlace, distance, lastPlace, index }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleClickMap() {
    navigate('/map');
  }

  return (
    <div className="flex mx-[24px] justify-between">
      {/* 왼쪽 컨텐츠*/}
      <div className="flex flex-col items-center relative">
        {firstPlace && <p className="text-[12px] absolute w-[24px] text-center ml-[45px]">출발</p>}
        <div className="w-[16px] h-[16px] rounded-full bg-secondary">
          {lastPlace && <p className="text-[12px] absolute w-[24px] text-center ml-[20px]">도착</p>}
        </div>
        <div className="absolute text-[12px] leading-[16px]">{index}</div>
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
            <p className="text-[14px] mr-[4px] font-bold">안목해변</p>
            <p className="text-[12px] mt-[2px] line-height-[14px]">관광명소</p>
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
  );
}

ContentItem.propTypes = {
  firstPlace: PropTypes.bool,
  distance: PropTypes.bool,
  lastPlace: PropTypes.bool,
  index: PropTypes.number.isRequired,
};
