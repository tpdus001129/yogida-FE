import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
// import { IoHomeSharp ,IoNotificationsSharp} from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';

import { IoPersonCircleOutline } from 'react-icons/io5';
import { PiNotePencil } from 'react-icons/pi';
import { PATH } from '../../constants/path';
import defaultProfile from '../../assets/images/defaultProfile.png';
import useNotification from '../../hooks/useNotification';
import { useNotificationQuery } from '../../pages/notification/queries';
import { useEffect, useRef } from 'react';
import { isValidUser } from '../../utils/isValidUser';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';

export default function Navbar() {
  //recoil에 저장된 user정보 가져오기
  const user = useRecoilValue(userState);
  const { notificationCount, setNotificationList } = useNotification();
  const { data, refetch } = useNotificationQuery();
  const location = useLocation();
  const isInit = useRef(true);

  useEffect(() => {
    if (location.pathname !== '/notification' && isValidUser(user)) {
      if (isInit.current) {
        refetch();
        setNotificationList(data);
        isInit.current = false;
      }
    }
  }, [data, location.pathname, refetch, setNotificationList, isInit, user]);

  return (
    <nav className="border-t-[1px] border-solid border-gray w-full fixed bottom-0 left-0 h-navbar bg-white z-10">
      <ul className="flex items-center h-full w-full px-[20px] py-[12px]">
        <Tab path={PATH.root} icon={<IoHomeOutline size={26} />} />
        <Tab
          path={PATH.notification}
          icon={
            <div className="relative">
              <IoNotificationsOutline size={26} />
              {notificationCount > 0 && (
                <span className="absolute bottom-[-4px] right-[-4px] text-xs text-white bg-red py-[2px] px-[4px] rounded-full">
                  {notificationCount}
                </span>
              )}
            </div>
          }
        />
        <Tab path={PATH.schedule} icon={<PiNotePencil size={26} />} />
        <Tab
          path={PATH.mypage}
          icon={user ? <Profile img={user?.profileImageSrc || defaultProfile} /> : <IoPersonCircleOutline size={26} />}
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
  return (
    <img src={img} alt="profile-img" className="flex items-center w-fit m-auto object-cover h-[24px] rounded-full" />
  );
}

Tab.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
Profile.propTypes = {
  img: PropTypes.string.isRequired,
};
