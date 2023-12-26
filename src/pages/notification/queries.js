import { useQuery, useMutation } from 'react-query';
import { queryKeys, queryClient } from '../../store/reactQuery';
import alarmsAPI from '../../services/alarms';
import { useAuth } from '../../hooks/useAuth';

export const useNotificationQuery = () => {
  const { loginUserInfo } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: [queryKeys.notification],
    queryFn: () => {
      if (loginUserInfo) {
        return alarmsAPI.getAllAlarms();
      }
    },
    refetchInterval: loginUserInfo ? 1000 * 60 * 2 : false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const invalidateMatchQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.notification],
    });
  };

  const readAlarm = useMutation({
    mutationFn: (alarmId) => alarmsAPI.setAlarmRead(alarmId),
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  const deleteAlarm = useMutation({
    mutationFn: (alarmId) => alarmsAPI.deleteAlarm(alarmId),
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  const deleteAllAlarm = useMutation({
    mutationFn: alarmsAPI.deleteAllAlarm,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return { data, refetch, readAlarm, deleteAlarm, deleteAllAlarm };
};
