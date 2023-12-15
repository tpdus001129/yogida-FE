import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';

const TABS = [
  {
    name: '둘러보기',
    icon: <IoSearchOutline size={26} />,
    path: '/',
  },
  {
    name: '글작성',
    icon: <IoAddCircleOutline size={26} />,
    path: '/add',
  },
  {
    name: '마이페이지',
    icon: <IoPersonOutline size={26} />,
    path: '/mypage',
  },
];

export default function Navbar() {
  return (
    <nav className="border-t-[1px] border-solid border-gray w-full fixed bottom-0 left-0 h-navbar bg-white">
      <ul className="flex items-center h-full w-full px-[20px] py-[12px]">
        {TABS.map((tab) => (
          <li key={tab.name} className="flex-1 h-full">
            <NavLink
              to={tab.path}
              className="flex flex-col items-center w-fit m-auto h-full text-black aria-[current=page]:text-primary"
            >
              {tab.icon}
              <span className="text-[12px] ">{tab.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
