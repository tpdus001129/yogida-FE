import PropTypes from 'prop-types';

import { IoClose } from 'react-icons/io5';

export default function Header({ title, close, searchModeOff }) {
  return (
    <div className="w-full h-[56px] flex items-center justify-center px-[24px]">
      <p className="w-full h-full flex items-center justify-center">{title}</p>
      {close && <IoClose size="24px" onClick={searchModeOff} />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.bool,
  searchModeOff: PropTypes.func,
};
