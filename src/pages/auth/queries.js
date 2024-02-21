import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../store/reactQuery';
import authAPI from '../../services/auth';

export const useCheckLoginQuery = () => {
  const { data, refetch, isError } = useQuery({
    queryKey: [queryKeys.loginStatus],
    queryFn: authAPI.verify,
    throwOnError: false,
    gcTime: 1,
  });

  return { data, refetch, isError };
};
