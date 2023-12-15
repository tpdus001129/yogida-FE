import { useMutation, useQuery } from 'react-query';
import { queryClient, queryKeys } from '../../store/reactQuery';
import authAPI from '../../services/auth';

export const useMypageCommentQuery = () => {
  const {
    data: commentList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKeys.mypageComment], //쿼리키를 기반으로 데이터 캐싱 관리
    queryFn: authAPI.login,
    //option값들 다양하게 알아보기...
  });

  //invalidateQueries : 쿼리 캐쉬를 무효화하고 해당 쿼리를 재조회
  //캐시된 데이터를 업데이트하거나 서버로부터 최신 데이터를 다시 가져옴
  const invalidateMatchQuery = () =>
    queryClient.invalidateQueries({
      queryKey: [queryKeys.mypageComment],
    });

  const removeComment = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { commentList, removeComment, isLoading, isSuccess, isError, error };
};
