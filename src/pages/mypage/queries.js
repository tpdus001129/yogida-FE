import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient, queryKeys } from '../../store/reactQuery';
import commentAPI from '../../services/comment';
import likesAPI from '../../services/likes';
import bookmarkAPI from '../../services/bookmarks';
import postsAPI from '../../services/posts';

// 내 여행
export const useMypagePostsQuery = () => {
  const { data: postsList } = useQuery({
    queryKey: [queryKeys.mypagePost],
    queryFn: postsAPI.getAllPostsByMe,
    throwOnError: false,
    select: (data) => data.data.posts,
  });

  const invalidateMatchQuery = () =>
    queryClient.invalidateQueries({
      queryKey: [queryKeys.mypagePost],
    });

  const addPost = useMutation({
    mutationFn: postsAPI.addOne,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  const removePost = useMutation({
    mutationFn: postsAPI.removeOne,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  const updatePost = useMutation({
    mutationFn: postsAPI.updateOne,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { postsList, addPost, removePost, updatePost };
};

// 내 댓글
export const useMypageCommentQuery = () => {
  const { data: commentList } = useQuery({
    queryKey: [queryKeys.mypageComment],
    queryFn: commentAPI.getAllCommentsByMe,
    throwOnError: false,
    select: (data) => ({ list: data.data.myComments, totalCount: data.data.myComments.length }),
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

// 내 장소
export const useMypageBookmarksQuery = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.mypageBookmarks],
    queryFn: bookmarkAPI.getAllBookmarksByMe,
    throwOnError: false,
  });

  const invalidateMatchQuery = () =>
    queryClient.invalidateQueries({
      queryKey: [queryKeys.mypageBookmarks],
    });

  const removeBookmarks = useMutation({
    mutationFn: bookmarkAPI.removeAll,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { bookmarkedSchedules: data?.bookmarkedSchedules || [], removeBookmarks };
};

// 내 찜 목록
export const useMypageLikesQuery = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.mypageLikes],
    queryFn: likesAPI.getAllLikesByMe,
    throwOnError: false,
  });

  const invalidateMatchQuery = () =>
    queryClient.invalidateQueries({
      queryKey: [queryKeys.mypageLikes],
    });

  const removeLikes = useMutation({
    mutationFn: likesAPI.removeAll,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { likedPosts: data?.likedPosts || [], removeLikes };
};
