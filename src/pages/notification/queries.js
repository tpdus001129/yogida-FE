import { useQuery, useMutation } from 'react-query';
import { queryKeys, queryClient } from '../../store/reactQuery';
import alarmsAPI from '../../services/alarms';

export const useNotificationQuery = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.notification],
    queryFn: alarmsAPI.getAllAlarms,
    enabled: false,
    refetchInterval: 1000 * 60 * 2,
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

  return { data, readAlarm, deleteAlarm, deleteAllAlarm };
};
