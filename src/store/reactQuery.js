import toast from 'react-hot-toast';
import { QueryClient } from 'react-query';

export const queryErrorHandler = (error) => {
  return toast.error(`데이터를 가져오지 못했습니다! \n error code : ${error}`);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      onError: queryErrorHandler,
      retry: 0,
    },
    mutations: {
      suspense: true,
      onError: queryErrorHandler,
      retry: 0,
    },
  },
});

export const queryKeys = {
  mypageComment: 'MYPAGE_COMMENT',
  kakaoUser: 'KAKAO_USER',
  loginStatus: 'LOGiN_STATUS',
};
