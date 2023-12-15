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
  //   [key]: [name],
  mypageComment: 'MYPAGE_COMMENT',
};
