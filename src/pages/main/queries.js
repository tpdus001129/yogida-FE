import { useMutation, useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../store/reactQuery';
import likesAPI from '../../services/likes';
import { queryClient } from '../../store/reactQuery';
import { isValidUser } from '../../utils/isValidUser';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';

export const useLikeQuery = () => {
  const user = useRecoilValue(userState);
  const { data, refetch } = useQuery({
    queryKey: [queryKeys.like],
    queryFn: likesAPI.getAllLikesByMe,
    throwOnError: isValidUser(user),
    enabled: isValidUser(user),
  });

  const invalidateMatchQuery = () =>
    queryClient.invalidateQueries({
      queryKey: [queryKeys.like],
    });

  const postLikes = useMutation({
    mutationFn: ({ userId, postId }) => likesAPI.postLike(userId, postId),
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  const removeLikes = useMutation({
    mutationFn: (removeLikeList) => likesAPI.removeAll(removeLikeList),
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return {
    refetch,
    likedPosts: data?.likedPosts || [],
    postLikes,
    removeLikes,
  };
};
