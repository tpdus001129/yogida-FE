import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ModalContext } from '../../pages/Detail';

import toast from 'react-hot-toast';

import {
  IoChevronBackOutline,
  IoShareOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoCreateOutline,
  IoWalletOutline,
  IoCalendarClearOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

const share = () => {
  const href = document.location.href;
  navigator.clipboard.writeText(href).then(() => toast.success('링크가 복사되었습니다.'));
};

export default function IconButton({ iconName, buttonType }) {
  const { setCommentModalMode } = useContext(ModalContext);

  function iconSelect(name) {
    switch (name) {
      case 'prev':
        return <IoChevronBackOutline size="25" />;
      case 'heart':
        return isHeartClicked ? <IoHeartSharp size="25" className="text-red" /> : <IoHeartOutline size="25" />;
      case 'comment':
        return <IoChatbubbleOutline size="22" />;
      case 'share':
        return <IoShareOutline size="24" onClick={share} />;
      case 'edit':
        return <IoCreateOutline size="24" />;
      case 'wallet':
        return <IoWalletOutline size="24" />;
      case 'calendar':
        return <IoCalendarClearOutline size="22" />;
      case 'destination':
        return <IoLocationOutline size="24" />;
      case 'people':
        return <IoPeopleOutline size="24" />;
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
        navigate(-1);
        break;
      case 'comment':
        setCommentModalMode(true);
        break;
      case 'heart':
        setIsHeartClicked((prev) => !prev);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {buttonType ? (
        <button className=" flex justify-center items-center text-white" onClick={onClickHandler}>
          {selectedIcon}
        </button>
      ) : (
        <div className="text-black">{selectedIcon}</div>
      )}
    </div>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  buttonType: PropTypes.bool,
};
