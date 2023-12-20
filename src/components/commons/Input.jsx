import PropTypes from 'prop-types';

Input.propTypes = {
  type: PropTypes.string,
  inputType: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

Input.defaultProps = {
  type: 'default',
  inputType: 'text',
  size: 'large',
  placeholder: '',
  value: '',
};

const typeStyle = {
  default: 'bg-input text-gray-1',
  password: 'bg-input text-gray-1 pr-9',
};

const sizeStyle = {
  large: 'w-full',
  'large-medium': 'w-4/5',
  medium: 'w-3/5',
  'medium-small': 'w-2/5',
  small: 'w-1/5',
};

export default function Input({ type, inputType, size, name, maxLength, placeholder, value, onChangeFunc }) {
  return (
    <input
      maxLength={maxLength}
      className={`text-sm p-2.5 ${typeStyle[type] !== undefined ? typeStyle[type] : typeStyle['default']} ${
        sizeStyle[size] !== undefined ? sizeStyle[size] : sizeStyle['large']
      } h-input appearance-none m-0 rounded-md mb-2 outline-none focus:border-2 focus:border-primary`}
      type={inputType}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChangeFunc(event.target.value)}
    ></input>
  );
}
