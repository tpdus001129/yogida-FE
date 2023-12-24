import { useMutation, useQuery } from 'react-query';
import { queryClient, queryKeys } from '../../store/reactQuery';
import commentAPI from '../../services/comment';

export const useMypageCommentQuery = () => {
  const { data: commentList } = useQuery({
    queryKey: [queryKeys.mypageComment], //쿼리키를 기반으로 데이터 캐싱 관리
    queryFn: commentAPI.getAllCommentsByMe,
    useErrorBoundary: false,
    select: (data) => ({ list: data.data, totalCount: data.data.length }),
  });

  const invalidateMatchQuery = () =>
    queryClient.invalidateQueries({
      queryKey: [queryKeys.mypageComment],
    });

  const removeComment = useMutation({
    mutationFn: commentAPI.removeOne,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { commentList, removeComment };
};
