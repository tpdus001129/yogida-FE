import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IoClose } from 'react-icons/io5';

export default function Header({ title, close }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[56px] flex items-center justify-center px-[24px]">
      <p className="w-full h-full flex items-center justify-center">{title}</p>
      {close && (
        <IoClose
          size="24px"
          onClick={() => {
            navigate('/');
          }}
        />
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.bool,
};
