import toast from 'react-hot-toast';
import { QueryClient } from '@tanstack/react-query';

export const queryErrorHandler = (error) => {
  return toast.error(`${error.status} :: ${error.message}`);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: queryErrorHandler,
      retry: 0,
    },
    mutations: {
      throwOnError: queryErrorHandler,
      retry: 0,
    },
  },
});

export const queryKeys = {
  mypagePost: 'MYPAGE_POSTS',
  mypageComment: 'MYPAGE_COMMENT',
  mypageBookmarks: 'MYPAGE_BOOKMARKS',
  mypageLikes: 'MYPAGE_LIKES',
  schedule: 'SCHEDULE',
  kakaoUser: 'KAKAO_USER',
  loginStatus: 'LOGiN_STATUS',
  notification: 'NOTIFICATION',
  comment: 'COMMENT',
  like: 'USER_LIKES',
  bookmark: 'USER_BOOKMARKS',
  post: 'POST',
};
