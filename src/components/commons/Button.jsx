import PropTypes from 'prop-types';

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  borderColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  bgColor: 'bg-primary',
  textColor: 'text-white',
  width: 'w-[328px]',
  height: 'h-[44px]',
  type: 'button',
  borderColor: 'border-transparent',
  fontSize: 'text-base',
  isDisabled: false,
};

export default function Button({
  bgColor,
  textColor,
  width,
  height,
  type,
  borderColor,
  fontSize,
  isDisabled,
  children,
}) {
  return (
    <button
      className={`${bgColor} ${textColor} ${width} ${height} ${fontSize} ${borderColor} cursor-pointer disabled:cursor-not-allowed border rounded-md flex justify-center items-center disabled:bg-gray-2 disabled:opacity-50 disabled:text-black disabled:border-black`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
