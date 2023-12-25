import { useCallback, useLayoutEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useCheckLoginQuery } from '../pages/auth/queries';
import { PATH } from '../constants/path';

//꼭 로그인해야 하는 페이지 링크를 여기에다 입력하기
const PRIVATE_PATHS = [PATH.mypage, PATH.notification, PATH.schedule];

export function useAuth() {
  const { pathname } = useLocation();
  const { loginUserInfo, refetch, isError } = useCheckLoginQuery();

  const isPrivate = useMemo(() => {
    return PRIVATE_PATHS.includes(pathname);
  }, [pathname]);

  const getUserAuth = useCallback(async () => {
    if (isPrivate) {
      return await refetch();
    }
  }, [isPrivate, refetch]);

  useLayoutEffect(() => {
    getUserAuth();
  }, [getUserAuth, pathname]);

  return { loginUserInfo, isPrivate, isError, getUserAuth };
}
