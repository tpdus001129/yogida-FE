import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
// import { IoHomeSharp ,IoNotificationsSharp} from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { PiNotePencil } from 'react-icons/pi';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';
import { PATH } from '../../constants/path';

export default function Navbar() {
  //recoil에 저장된 user정보 가져오기
  const user = useRecoilValue(userState);
  return (
    <nav className="border-t-[1px] border-solid border-gray w-full fixed bottom-0 left-0 h-navbar bg-white z-10">
      <ul className="flex items-center h-full w-full px-[20px] py-[12px]">
        <Tab path={PATH.root} icon={<IoHomeOutline size={26} />} />
        <Tab path={PATH.notification} icon={<IoNotificationsOutline size={26} />} />
        <Tab path={PATH.schedule} icon={<PiNotePencil size={26} />} />
        <Tab
          path={user ? PATH.mypage : PATH.login}
          icon={user ? <Profile img={user?.profileImageSrc} /> : <IoPersonCircleOutline size={26} />}
        />
      </ul>
    </nav>
  );
}

function Tab({ path, icon }) {
  return (
    <li className="flex-1 h-full">
      <NavLink to={path} className="flex items-center w-fit m-auto h-full text-black aria-[current=page]:text-primary">
        {icon}
      </NavLink>
    </li>
  );
}

function Profile({ img }) {
  return <img src={img} alt="profile-img" className="rounded-full flex items-center w-fit m-auto h-full p-[5px]" />;
}

Tab.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
Profile.propTypes = {
  img: PropTypes.string.isRequired,
};
