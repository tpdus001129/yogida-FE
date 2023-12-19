import ConditionLabel from '../Login/ConditionLabel';
import { PASSWORD_VALIDATION_CONDITION } from '../../constants/passwordValidationConditions';

import PropTypes from 'prop-types';

PasswordValidationContainer.propTypes = {
  password: PropTypes.string.isRequired,
};

PasswordValidationContainer.defaultProps = {
  password: '',
};

export default function PasswordValidationContainer({ password }) {
  return (
    <div className="grid grid-cols-2 mb-5">
      {PASSWORD_VALIDATION_CONDITION.map((condition) => {
        return (
          <ConditionLabel
            message={condition.name}
            isSatisfied={condition.validateFunction(password)}
            key={condition.name}
          />
        );
      })}
    </div>
  );
}
