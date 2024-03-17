import { Link } from 'react-router-dom';
import { userState } from '../../recoils/userAtom';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import Notfound from '../Search/NotFound';
import { IoChatbubbleOutline, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

import Tag from '../commons/Tag';
import ImageSlide from './ImageSlide';
import { isValidUser } from '../../utils/isValidUser';
import { ScheduleDate } from '../../utils/ScheduleDate';

export default function PostItem({ data, handleClickLike, likedList }) {
  const user = useRecoilValue(userState);

  if (data?.length === 0) return <Notfound />;
  return (
    <div>
      {data?.map((item) => (
        <Link to={`/posts/${item._id}`} key={`post-${item._id}`}>
          <div>
            <div className="pb-[30px]">
              <div>
                <div className="relative">
                  <button
                    onClick={(e) => handleClickLike(e, user._id, item._id)}
                    className="absolute z-[10] top-[16px] right-[16px]"
                  >
                    {isValidUser(user) && item.authorId !== user._id && (
                      <>
                        {likedList?.includes(item._id) ? (
                          <IoHeartSharp size="36" className="text-red" />
                        ) : (
                          <IoHeartOutline size="36" color="#D9D9D9" />
                        )}
                      </>
                    )}
                  </button>
                  <ImageSlide images={item.schedules.map((place) => place.placeImageSrc)} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>{item.destination}</p>
                <div className="flex items-center">
                  <IoChatbubbleOutline size="16" className="mr-[4px]" />
                  <span className="mr-[10px]">{item.commentCount}</span>
                  <IoHeartOutline size="18" className="mr-[4px]" />
                  <span>{item.likeCount}</span>
                </div>
              </div>
              <p className="text-[22px] font-bold mb-[10px]">{item.title}</p>
              <div>
                <Tag tags={item.tag} />
              </div>
              <span className="text-gray-1 mb-[4px]">일정 : {ScheduleDate(item.startDate, item.endDate)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

PostItem.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string,
  handleClickLike: PropTypes.func,
  likedList: PropTypes.array,
};
