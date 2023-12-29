import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userState } from '../../recoils/userAtom';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import Notfound from '../Search/NotFound';
import { IoChatbubbleOutline, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

import Tag from '../commons/Tag';
import ImageSlide from './ImageSlide';
import likesAPI from '../../services/likes';

export default function PostItem({ data }) {
  const user = useRecoilValue(userState);

  // 유저가 좋아요 누른 데이터
  const [myLikeId, setMyLikeId] = useState([]);
  const [myLikes, setMyLikes] = useState([]);

  // 좋아요 get
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likes = await likesAPI.getAllLikesByMe();
        setMyLikeId(likes.data.likedPosts);
        setMyLikes(likes.data.likedPosts.flatMap((post) => post.postId).flatMap((it) => it._id));
      } catch (error) {
        console.error('likes Error:', error);
      }
    };
    fetchLikes();
  }, []);

  // 좋아요 post
  async function handleClickLike(e, userId, postId) {
    e.stopPropagation();
    e.preventDefault();

    // console.log(myLikeId);
    const isLiked = myLikes.includes(postId);

    // console.log('?????', myLikeId.find((item) => item.postId._id === postId)._id);
    if (isLiked) {
      await handleRemoveLike([myLikeId.find((item) => item.postId._id === postId)._id]);
      setMyLikes((prev) => prev.filter((item) => item._id !== postId));
    } else {
      const updateResult = await likesAPI.postLike(userId, postId);
      setMyLikes((prev) => [...prev, updateResult.data.postId]);
    }
  }

  // 좋아요 patch
  async function handleRemoveLike(payload) {
    await likesAPI.removeAll(payload);
  }

  if (data.length === 0) return <Notfound />;
  return (
    <div>
      {data.map((item) => (
        <Link to={`/posts/${item._id}`} key={`post-${item._id}`}>
          <div>
            <div className="pb-[20px]">
              <div>
                <div className="relative">
                  <button
                    onClick={(e) => handleClickLike(e, user._id, item._id)}
                    className="absolute z-[10] top-[16px] right-[16px]"
                  >
                    {myLikes.includes(item._id) ? (
                      <IoHeartSharp size="36" className="text-red" />
                    ) : (
                      <IoHeartOutline size="36" color="#ffffff" />
                    )}
                  </button>
                  <ImageSlide
                    images={item.schedules.flatMap((schedule) => schedule.flatMap((place) => place.placeImageSrc))}
                    myLikes={myLikes}
                    item={item}
                    handleClickLike={handleClickLike}
                  />
                </div>
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
