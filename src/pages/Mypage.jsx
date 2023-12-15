import { useState } from 'react';
import { HEADER_HEIGHT, NAVBAR_HEIGHT } from '../constants';
import profile from '../assets/images/profile.jpg';
import Posts from '../components/Mypage/Posts';
import Comments from '../components/Mypage/Comments';
import Places from '../components/Mypage/Places';
import Bookmarks from '../components/Mypage/Bookmarks';
import Profile from '../components/Mypage/Profile';

const TABS = [
  {
    name: '내 여행',
    element: <Posts />,
  },
  {
    name: '내 댓글',
    element: <Comments />,
  },
  {
    name: '내 장소',
    element: <Places />,
  },
  {
    name: '내 찜 목록',
    element: <Bookmarks />,
  },
];

export default function Mypage() {
  const [editProfileMode, setEditProfileMode] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (index) => {
    setCurrentTab(index);
  };

  const claculatedHeight = `calc(100vh - ${HEADER_HEIGHT}px - 230px - 38px - ${NAVBAR_HEIGHT}px)`;

  if (editProfileMode) return <Profile setEditProfileMode={setEditProfileMode} />;
  return (
    <>
      <section className="top-0">
        <div className="h-header px-[23px] flex items-center justify-end text-[14px] text-black">
          <button onClick={() => setEditProfileMode((prev) => !prev)}>프로필 편집</button>
        </div>
        <div className="flex flex-col items-center justify-center h-[230px] ">
          <img src={profile} alt="profile" className="w-[60px] h-[60px] rounded-full object-cover mb-[10px]" />
          <span className="text-black text-[20px] font-bold tracking-tight">이다현</span>
        </div>
      </section>
      <section>
        <nav className="list-none flex items-center">
          {TABS.map((tab, index) => (
            <li
              key={tab.name}
              className={
                'border-b flex-1 text-center text-[12px] font-bold pb-[16px] cursor-pointer ' +
                (currentTab === index ? 'border-primary border-b-4 text-black' : ' text-gray')
              }
              onClick={() => handleTabClick(index)}
            >
              {tab.name}
            </li>
          ))}
        </nav>
        <section className="overflow-y-auto p-[24px]" style={{ height: claculatedHeight }}>
          {TABS[currentTab].element}
        </section>
      </section>
    </>
  );
}
