import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
// import { IoHomeSharp } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
// import { IoNotificationsSharp } from 'react-icons햣 ㅁㅇㅇ/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { PiNotePencil } from 'react-icons/pi';

const TABS = [
  {
    title: '홈',
    icon: <IoHomeOutline size={26} />,
    path: '/',
  },
  {
    title: '알림',
    icon: <IoNotificationsOutline size={26} />,
    path: '/notification',
  },
  {
    title: '일정 작성',
    icon: <PiNotePencil size={26} />,
    path: '/schedule',
  },
  {
    title: '로그인',
    icon: <IoPersonCircleOutline size={26} />,
    path: '/login',
  },
];

export default function Navbar() {
  return (
    <nav className="border-t-[1px] border-solid border-gray w-full fixed bottom-0 left-0 h-navbar bg-white z-10">
      <ul className="flex items-center h-full w-full px-[20px] py-[12px]">
        {TABS.map((tab) => (
          <li key={tab.title} className="flex-1 h-full">
            <NavLink
              to={tab.path}
              className="flex items-center w-fit m-auto h-full text-black aria-[current=page]:text-primary"
            >
              {tab.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
