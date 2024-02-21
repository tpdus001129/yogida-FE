import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoStar, IoCar, IoWalkOutline } from 'react-icons/io5';
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import NoImage from './NoImage';
import defaultImg from '../../assets/images/noImage.png';
import { useBookmarkQuery } from '../../pages/detail/queries';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';
import { isValidUser } from '../../utils/isValidUser';

export default function ContentItem({ distanceIndex, schedulesData, distancesData, postId }) {
  const user = useRecoilValue(userState);
  const { bookmarkedSchedules, postBookmarks, removeBookmarks } = useBookmarkQuery();

  const bookmarkedScheduleIds = bookmarkedSchedules.map((bookmark) => bookmark.scheduleId._id);
  // 거리별 아이콘 타입
  function distanceIconType(distance) {
    if (Number(distance) < 1000) {
      return <IoWalkOutline className="text-gray-1 h-[28px]" size="20" />;
    } else {
      return <IoCar className="text-gray-1 h-[28px]" size="20" />;
    }
  }

  useEffect(() => {
    if (schedulesData) {
      schedulesData.map((places) => {
        localStorage.setItem(`detail-data-${places._id}`, JSON.stringify(places));
      });
    }
  }, [schedulesData]);

  function handleRemoveBookmark(singleScheduleId) {
    removeBookmarks([bookmarkedSchedules.find((item) => item.scheduleId._id === singleScheduleId)._id]);
  }

  function handlePostBookmark(singleScheduleId, postId) {
    postBookmarks({ singleScheduleId, postId });
  }

  return (
    <div>
      {distancesData &&
        schedulesData.map((places, index) => (
          <Link to={`/map/${places._id}`} key={places._id}>
            <div className="flex mx-[24px] justify-between" key={index}>
              {/* 왼쪽 컨텐츠*/}
              <div className="flex flex-col items-center relative">
                {index === 0 && schedulesData.length > 1 && (
                  <p className="text-[12px] absolute w-[24px] text-center ml-[50px] leading-[24px]">출발</p>
                )}
                <div className="w-[24px] h-[24px] rounded-full bg-secondary">
                  {index === schedulesData.length - 1 && schedulesData.length > 1 && (
                    <p className="text-[12px] absolute w-[24px] text-center ml-[26px] leading-[24px]">도착</p>
                  )}
                </div>
                <div className="absolute text-[12px] leading-[24px]">{+index + 1}</div>
                {index === schedulesData.length - 1 ? <div></div> : <div className="w-[3px] h-[180px] bg-gray-4"></div>}
                {index === schedulesData.length - 1 ? (
                  ''
                ) : (
                  <div className="absolute bottom-[40px] bg-white flex items-center">
                    {distanceIconType(distancesData[distanceIndex])}
                    <p className="text-[12px] w-[40px] mr-[-40px] pl-[2px]">
                      {(distancesData[distanceIndex][index] / 1000)?.toFixed(2)}km
                    </p>
                  </div>
                )}
              </div>
              {/* 오른쪽 컨텐츠 */}
              <div className="w-[236px] mb-[20px] bg-white rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative">
                <div className="h-[38px] flex justify-between items-center ml-[18px] my-2 rounded-t-[20px]">
                  <div className="flex flex-wrap items-center">
                    <p className="text-[14px] font-bold truncate w-[80%]">{places.placeName}</p>
                    <p className="text-[12px] text-gray-2">{places.category}</p>
                  </div>
                  <button className="absolute right-[14px]">
                    {isValidUser(user) && (
                      <>
                        {bookmarkedScheduleIds.includes(places._id) ? (
                          <IoBookmark
                            className="text-secondary"
                            size="22"
                            onClick={(event) => {
                              event.preventDefault();
                              handleRemoveBookmark(places._id);
                            }}
                          />
                        ) : (
                          <IoBookmarkOutline
                            className="text-secondary"
                            size="22"
                            onClick={(event) => {
                              event.preventDefault();
                              handlePostBookmark(places._id, postId);
                            }}
                          />
                        )}
                      </>
                    )}
                  </button>
                </div>
                <div className="h-[132px] rounded-b-[20px] bg-gray-3 relative">
                  {places.placeImageSrc ? (
                    <img
                      src={places.placeImageSrc === 'default' ? defaultImg : places.placeImageSrc}
                      alt="img"
                      className="w-full h-full block object-cover rounded-b-[20px]"
                    />
                  ) : (
                    <NoImage />
                  )}
                  <div className="absolute bottom-[9px] right-[16px] flex">
                    {Array.from({ length: places.star }, (_, index) => (
                      <IoStar key={`star-icon-${index}`} className="text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

ContentItem.propTypes = {
  distanceIndex: PropTypes.number.isRequired,
  schedulesData: PropTypes.array.isRequired,
  distancesData: PropTypes.array.isRequired,
  postId: PropTypes.string,
};
