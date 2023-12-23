import { useQuery } from 'react-query';
import { queryKeys } from '../../store/reactQuery';
import authAPI from '../../services/auth';

export const useCheckLoginQuery = () => {
  const {
    data: authStatus,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [queryKeys.loginStatus],
    queryFn: authAPI.verify,
    enabled: false,
  });

  return { authStatus, refetch, isLoading, isSuccess, isError, error };
};
