import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoils/userAtom';
import { useEffect } from 'react';

export default function PrivateRoute() {
  const { loginUserInfo, isPrivate, isError } = useAuth();
  const setUser = useSetRecoilState(userState);

  // 로그인 유저정보 recoil에 저장
  useEffect(() => {
    if (loginUserInfo) {
      setUser(loginUserInfo);
    }
  }, [loginUserInfo, setUser]);

  if (isError && isPrivate) return <Navigate to="/login" />;
  return <Outlet />;
}
