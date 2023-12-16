import { useState, useEffect } from 'react';

import { IoChatbubbleOutline } from 'react-icons/io5';

import { getPosts } from '../../services/posts';

import Tag from '../commons/Tag';
import ImageSlide from './imageSlide';

export default function PostItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setData(posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <div className="pb-[20px]">
            <ImageSlide images={item.image} />
            <div className="flex justify-between">
              <p className="mb-[6px]">{item.place}</p>
              <div className="flex items-center">
                <IoChatbubbleOutline size="16" className="mr-[4px]" />
                <span>{item.comment}</span>
              </div>
            </div>
            <p className="text-[22px] font-bold mb-[10px]">{item.title}</p>
            <div>
              <Tag tags={item.tag} />
            </div>
            <span className="text-darkgray mb-[4px]">
              일정 {item.startDate.slice(6)} ~ {item.endDate.slice(6)}
            </span>
            <p className="text-darkgray">총 예산 {item.budget}원</p>
          </div>
        </div>
      ))}
    </>
  );
}
