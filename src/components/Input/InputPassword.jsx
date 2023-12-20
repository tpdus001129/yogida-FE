import Input from '../commons/Input';
import { IoEye } from 'react-icons/io5';

import PropTypes from 'prop-types';

InputPassword.propTypes = {
  value: PropTypes.string,
  onChangeFunc: PropTypes.func,
  placeholder: PropTypes.string,
};

InputPassword.defaultProps = {
  value: '',
  placeholder: '',
};

export default function InputPassword({ value, onChangeFunc, placeholder }) {
  return (
    <div className="relative">
      <Input
        value={value}
        bgColor={'bg-input'}
        textColor={'text-darkgray'}
        type={'password'}
        name={'check-password'}
        padding={'pr-9'}
        placeholder={placeholder}
        onChangeFunc={onChangeFunc}
      />
      <IoEye className="text-darkgray absolute scale-150 right-3 top-3.5" />
    </div>
  );
}
