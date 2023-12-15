import PropTypes from 'prop-types';
import { useMemo } from 'react';

Input.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isPasswordInput: PropTypes.bool,
};

export default function Input({ bgColor, textColor, size, type, name, placeholder, isPasswordInput }) {
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
    <input
      className={`text-sm ${textColor} ${bgColor} ${width} ${height} p-2.5 rounded-md mb-2 ${
        isPasswordInput && 'pr-9'
      }  outline-none focus:border-2 focus:border-primary`}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    ></input>
  );
}
