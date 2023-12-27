import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';
import PropTypes from 'prop-types';

import { IoChatbubbleOutline, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

import Tag from '../commons/Tag';
import ImageSlide from './ImageSlide';
import likesAPI from '../../services/likes';

export default function PostItem({ data }) {
  const user = useRecoilValue(userState);
  const [isLiked, setIsLiked] = useState([]);
  // const [isNotLike, setIsNotLike] = useState(data);
  const [myLikes, setMyLikes] = useState([]);

  // 좋아요 get
  useEffect(() => {
    const fetchLikes = async () => {
      const likes = await likesAPI.getAllLikesByMe();
      setMyLikes(likes.data.likedPosts);
      setIsLiked(likes);
    };
    fetchLikes();
  }, []);

  // 좋아요 post
  async function handleClickLike(e, userId, postId) {
    e.stopPropagation();
    e.preventDefault();

    if (!isLiked.includes(postId)) {
      await likesAPI.postLike(userId, postId);
    }
  }

  // async function handleRemoveLike() {
  //   await likesAPI.removeAll();
  // }

  return (
    <div className="relative">
      {data.map((item) => (
        <Link to={`/posts/${item._id}`} key={item._id}>
          <div>
            <div className="pb-[20px]">
              <div>
                <button
                  onClick={(e) => {
                    handleClickLike(e, user._id, item._id);
                  }}
                  className="absolute z-[10] top-[16px] right-[16px]"
                >
                  {myLikes === item._id ? (
                    <IoHeartSharp size="36" className="text-red" />
                  ) : (
                    <IoHeartOutline size="36" color="#ffffff" />
                  )}
                </button>
                <ImageSlide
                  images={item.schedules.flatMap((schedule) => schedule.flatMap((place) => place.placeImageSrc))}
                />
              </div>
              <div className="flex justify-between">
                <p className="mb-[6px]">{item.destination}</p>
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
              <span className="text-gray-1 mb-[4px]">
                일정 {new Date(item.startDate).getMonth() + 1}월 {new Date(item.startDate).getDate()}일 ~{' '}
                {new Date(item.endDate).getMonth() + 1}월 {new Date(item.endDate).getDate()}일
              </span>
              <p className="text-gray-1">총 예산 {item.cost}원</p>
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
};
