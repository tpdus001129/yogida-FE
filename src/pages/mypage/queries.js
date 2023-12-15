import { useMutation, useQuery } from 'react-query';
import { queryClient, queryKeys } from '../../store/reactQuery';
import authAPI from '../../services/auth';

//특정 동작 실행 후 트리거할 수 있게 템플릿 작성하기!

//page가 load되자마자 바로 실행되는 쿼리
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
    //option값들 다양하게 알아보고 공부해보기ㅠㅠ...
    //optimisticResults: //optimisticUI 알아보기(낙관적 UI) 좋아요 1279 -> 1280(정확할 필요 없다..) rollback :실패하면 되돌리기 (일단 사용자가 원하는 결과를 보여줘야한다!)
    //delay없이 다다닥 누를 수 있는 버튼..이런쪽에 적용하면 좋을듯!
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
  //mutateAsync : promise를 반환함

  //add logic...

  return { commentList, removeComment, isLoading, isSuccess, isError, error };
};
