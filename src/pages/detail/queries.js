import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient, queryKeys } from '../../store/reactQuery';
import bookmarkAPI from '../../services/bookmarks';
import { userState } from '../../recoils/userAtom';
import { useRecoilValue } from 'recoil';
import { isValidUser } from '../../utils/isValidUser';

export const useBookmarkQuery = () => {
  const user = useRecoilValue(userState);
  const { data } = useQuery({
    queryKey: [queryKeys.bookmark],
    queryFn: bookmarkAPI.getAllBookmarksByMe,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: isValidUser(user),
  });

  const invalidateMatchQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.bookmark],
    });
  };

  const postBookmarks = useMutation({
    mutationFn: ({ singleScheduleId, postId }) => bookmarkAPI.postBookmarkByMe(singleScheduleId, postId),
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  const removeBookmarks = useMutation({
    mutationFn: (singleScheduleIds) => bookmarkAPI.removeAll(singleScheduleIds),
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { bookmarkedSchedules: data?.bookmarkedSchedules || [], postBookmarks, removeBookmarks };
};
