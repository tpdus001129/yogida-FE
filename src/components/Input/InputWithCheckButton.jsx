import Input from '../commons/Input';
import Button from '../commons/Button';

import PropTypes from 'prop-types';

InputWithCheckButton.propTypes = {
  value: PropTypes.string,
  inputType: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeFunc: PropTypes.func,
  buttonType: PropTypes.string,
  buttonChildren: PropTypes.node,
  isButtonDisabled: PropTypes.bool,
};

InputWithCheckButton.defaultProps = {
  value: '',
  inputType: 'text',
  placeholder: '',
  buttonType: 'default',
  isButtonDisabled: true,
};

export default function InputWithCheckButton({
  value,
  inputType,
  name,
  placeholder,
  onChangeFunc,
  buttonType,
  buttonChildren,
  isButtonDisabled,
}) {
  return (
    <div className="flex flex-row justify-between">
      <Input
        value={value}
        type={'default'}
        size={'medium'}
        inputType={inputType}
        name={name}
        placeholder={placeholder}
        onChangeFunc={onChangeFunc}
      />
      <Button type={buttonType} size={'small'} text={'description'} isDisabled={isButtonDisabled}>
        {buttonChildren}
      </Button>
    </div>
  );
}
