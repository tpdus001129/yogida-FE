import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
  IoChevronBackOutline,
  IoShareSocialOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoCreateOutline,
} from 'react-icons/io5';

export default function IconButton({ iconName }) {
  function iconSelect(name) {
    switch (name) {
      case 'prev':
        return <IoChevronBackOutline size="25" />;
      case 'heart':
        return isHeartClicked ? <IoHeartSharp size="25" color="#FB6363" /> : <IoHeartOutline size="25" />;
      case 'comment':
        return <IoChatbubbleOutline size="22" />;
      case 'share':
        return <IoShareSocialOutline size="22" />;
      case 'edit':
        return <IoCreateOutline size="24" />;
      default:
        return null;
    }
  }

  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const selectedIcon = iconSelect(iconName, isHeartClicked);

  const navigate = useNavigate();

  function onClickHandler() {
    switch (iconName) {
      case 'prev':
        navigate('/');
        break;
      case 'comment':
        navigate('/comment-modal');
        break;
      case 'heart':
        setIsHeartClicked((prev) => !prev);
        break;
      default:
        break;
    }
  }

  return (
    <button
      className="w-[36px] h-[36px] rounded-full bg-[#ffffff] flex justify-center items-center"
      onClick={onClickHandler}
    >
      {selectedIcon}
    </button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};
