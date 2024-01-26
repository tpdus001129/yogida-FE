import { useQuery } from 'react-query';
import { queryKeys } from '../../store/reactQuery';
import authAPI from '../../services/auth';

export const useKakaoUserInfoQuery = () => {
  const { data: user } = useQuery({
    queryKey: [queryKeys.kakaoUser],
    queryFn: authAPI.getKakaoUserInfo,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { user };
};
