import { useQuery } from 'react-query';
import { queryKeys } from '../../store/reactQuery';
import authAPI from '../../services/auth';

export const useCheckLoginQuery = () => {
  const { data: loginUserInfo, refetch } = useQuery({
    queryKey: [queryKeys.loginStatus],
    queryFn: authAPI.verify,
    enabled: false,
    select: (data) => data.data.user,
  });

  return { loginUserInfo, refetch };
};
