import { useState, useMemo } from 'react';

import { PASSWORD_VALIDATION_CONDITION } from '../constants/passwordValidationConditions';

export default function usePassword() {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const passwordValidationMessage = useMemo(() => {
    return `${PASSWORD_VALIDATION_CONDITION.filter((condition) => {
      return !condition.validateFunction(password);
    })
      .map((condition) => condition.name)
      .join(', ')}`;
  }, [password]);

  const checkPasswordValidationMessage = useMemo(() => {
    return password === checkPassword ? '' : '비밀번호가 일치하지 않습니다';
  }, [password, checkPassword]);

  return {
    password,
    setPassword,
    checkPassword,
    setCheckPassword,
    passwordValidationMessage,
    checkPasswordValidationMessage,
  };
}
