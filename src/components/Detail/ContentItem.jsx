import { useState } from 'react';
import PropTypes from 'prop-types';

import { IoBookmarkOutline, IoBookmark, IoStar, IoCar, IoWalkOutline } from 'react-icons/io5';

import NoImage from './NoImage';

export default function ContentItem({ distanceIndex, schedulesData, distancesData }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  // 거리별 아이콘 타입
  function distanceIconType(distance) {
    if (Number(distance) < 1000) {
      return <IoWalkOutline className="text-gray-1 h-[28px]" size="20" />;
    } else {
      return <IoCar className="text-gray-1 h-[28px]" size="20" />;
    }
  }

  if (!schedulesData) return <div>Loading...</div>;
  return (
    <div>
      {distancesData &&
        schedulesData.map((places, index) => (
          <div className="flex mx-[24px] justify-between" key={index}>
            {/* 왼쪽 컨텐츠*/}
            <div className="flex flex-col items-center relative">
              {index === 0 && (
                <p className="text-[12px] absolute w-[24px] text-center ml-[50px] leading-[24px]">출발</p>
              )}
              <div className="w-[24px] h-[24px] rounded-full bg-secondary">
                {index === schedulesData.length - 1 && (
                  <p className="text-[12px] absolute w-[24px] text-center ml-[26px] leading-[24px]">도착</p>
                )}
              </div>
              <div className="absolute text-[12px] leading-[24px]">{+index + 1}</div>
              {index === schedulesData.length - 1 ? (
                <div></div>
              ) : (
                <div className="w-[3px] h-[144px] bg-gray-4 mt-[-1px]"></div>
              )}
              {index === schedulesData.length - 1 ? (
                ''
              ) : (
                <div className="absolute bottom-[40px] bg-white flex items-center">
                  {distanceIconType(distancesData)}
                  <p className="text-[12px] w-[40px] mr-[-40px] pl-[2px]">{distancesData[distanceIndex]}m</p>
                </div>
              )}
            </div>
            {/* 오른쪽 컨텐츠 */}
            <div className="w-[236px] h-[130px] bg-white rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative">
              <div className="h-[43px] flex justify-between items-center ml-[18px] rounded-t-[20px]">
                <div className="flex">
                  <p className="text-[14px] mr-[4px] font-bold">{places.placeName}</p>
                  <p className="text-[12px] mt-[2px] line-height-[14px]">{places.category}</p>
                </div>
                <button onClick={handleClick} className="absolute right-[14px]">
                  {isClicked ? (
                    <IoBookmark className="text-secondary" size="22" />
                  ) : (
                    <IoBookmarkOutline className="text-secondary" size="22" />
                  )}
                </button>
              </div>
              <div className="h-[87px] rounded-b-[20px] bg-gray-3 relative overflow-hidden">
                <div>{places.placeImageSrc ? places.placeImageSrc : <NoImage />}</div>
                <div className="absolute bottom-[9px] right-[16px] flex">
                  {Array.from({ length: places.star }, (_, index) => (
                    <IoStar key={index} className="text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

ContentItem.propTypes = {
  distanceIndex: PropTypes.number.isRequired,
  schedulesData: PropTypes.array.isRequired,
  distancesData: PropTypes.array.isRequired,
};
