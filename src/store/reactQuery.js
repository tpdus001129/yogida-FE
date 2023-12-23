import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 1,
    },
    mutations: {
      suspense: true,
      retry: 1,
    },
  },
});

export const queryKeys = {
  mypageComment: 'MYPAGE_COMMENT',
  kakaoUser: 'KAKAO_USER',
  loginStatus: 'LOGiN_STATUS',
};
