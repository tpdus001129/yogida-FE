import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import IconButton from './IconButton';
import Tag from '../commons/Tag';

import { getPosts } from '../../services/posts';

import { IoLockClosed } from 'react-icons/io5';

const share = () => {
  const href = document.location.href;
  navigator.clipboard.writeText(href).then(() => toast.success('링크가 복사되었습니다.'));
};
export default function Header() {
  const [data, setData] = useState([]);
  const white = true;

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setData(posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const headerHeight = data.length > 0 && data[0].tag.length >= 5 ? 'h-[324px]' : 'h-[274px]';

  return (
    <div className={`w-full ${headerHeight} bg-primary`}>
      {/* 아이콘 */}
      <div className="flex justify-between mx-[24px] pt-[30px] mb-[26px]">
        <IconButton iconName={'prev'} />
        <div className="flex space-x-[6px]">
          <span onClick={share}>
            <IconButton iconName={'share'} />
          </span>
          <IconButton iconName={'comment'} />
          <IconButton iconName={'heart'} />
        </div>
      </div>
      <div className="mx-[24px] text-white">
        <div className="flex justify-between mb-[6px] items-center">
          <p>ㅇㅇ님의 ㅇㅇ여행 일정입니다.</p>
          <div>
            <IoLockClosed className="text-secondary" size="18" />
          </div>
        </div>
        <p className="text-[22px] font-bold mb-[6px]">여행 일지 공유 제목</p>
        {data.length > 0 && <Tag tags={data[0].tag} white={white} />}
        <p>날짜</p>
        <p>총 예산 100,000원</p>
        <p>인원수 2명</p>
      </div>
    </div>
  );
}
