import PropTypes from 'prop-types';
import { useMemo } from 'react';

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default function Button({ bgColor, textColor, size, type, children }) {
  const width = useMemo(() => {
    if (size === 'full') {
      return 'w-[328px]';
    }
  }, [size]);

  const height = useMemo(() => {
    if (size === 'full') {
      return 'h-[44px]';
    }
  }, [size]);

  return (
    <button
      className={`${bgColor} ${textColor} ${width} ${height} rounded-md flex justify-center items-center`}
      type={type}
    >
      {children}
    </button>
  );
}
