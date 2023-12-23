import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoChatbubbleOutline } from 'react-icons/io5';

import { getPostsAllList } from '../../services/posts';

import Tag from '../commons/Tag';
import ImageSlide from './ImageSlide';

export default function PostItem() {
  const [data, setData] = useState([]);

  // API
  useEffect(() => {
    getPostsAllList().then((posts) => {
      setData(posts);
    });
  }, []);

  return (
    <>
      {data.map((item) => (
        <Link to={`/posts/${item._id}`} key={item._id}>
          <div>
            <div className="pb-[20px]">
              <ImageSlide
                images={item.schedules.flatMap((schedule) => schedule.flatMap((place) => place.placeImageSrc))}
              />
              <div className="flex justify-between">
                <p className="mb-[6px]">{item.destination}</p>
                <div className="flex items-center">
                  <IoChatbubbleOutline size="16" className="mr-[4px]" />
                  <span>댓글수</span>
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
    </>
  );
}
