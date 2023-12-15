import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,

      retry: 1,
    },
    mutations: {
      useErrorBoundary: true,

      retry: 1,
    },
  },
});

export const queryKeys = {
  //   [key]: [name],
  mypageComment: 'MYPAGE_COMMENT',
};
