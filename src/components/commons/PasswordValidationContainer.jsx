import ConditionLabel from '../Login/ConditionLabel';
import { PASSWORD_VALIDATION_CONDITION } from '../../constants/passwordValidationConditions';

import PropTypes from 'prop-types';

PasswordValidationContanier.propTypes = {
  password: PropTypes.string.isRequired,
};

PasswordValidationContanier.defaultProps = {
  password: '',
};

export default function PasswordValidationContanier({ password }) {
  console.log(`password is ${password}`);
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
