import { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useCheckLoginQuery } from '../pages/auth/queries';
import { PATH } from '../constants/path';

const PRIVATE_PATHS = [PATH.mypage, PATH.notification, PATH.schedule];

export function useAuth() {
  const { pathname } = useLocation();
  const { loginUserInfo, refetch } = useCheckLoginQuery();

  const isPrivate = useMemo(() => {
    return PRIVATE_PATHS.includes(pathname);
  }, [pathname]);

  const getUserAuth = useCallback(() => {
    if (isPrivate) {
      refetch();
    }
  }, [isPrivate, refetch]);

  useEffect(() => {
    getUserAuth();
  }, [getUserAuth, pathname]);

  return { loginUserInfo };
}
