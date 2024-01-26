import { useQuery, useMutation } from '@tanstack/react-query';
import { queryKeys, queryClient } from '../../store/reactQuery';
import alarmsAPI from '../../services/alarms';
import { useRef } from 'react';
import { isValidUser } from '../../utils/isValidUser';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';
import useNotification from '../../hooks/useNotification';

export const useNotificationQuery = () => {
  const user = useRecoilValue(userState);
  const lastItemId = useRef(null);
  const { setNotificationList } = useNotification();

  const { data, refetch } = useQuery({
    queryKey: [queryKeys.notification],
    queryFn: () => alarmsAPI.getAllAlarms({ perPage: 10, lastItemId: lastItemId.current }),
    select: (data) => {
      return { data: data?.data, lastItemId: data?.lastItemId };
    },
    onSuccess: (data) => {
      if (lastItemId.current === null) {
        setNotificationList(data.data);
      } else {
        if (data.data.length > 0) {
          const curItem = data.data;
          setNotificationList((prev) => {
            const newItem = prev ? [...prev, ...curItem] : curItem;
            const newItemWithFilter = newItem.reduce((acc, cur) => {
              if (acc.findIndex(({ _id }) => _id === cur._id) === -1) {
                acc.push(cur);
              }
              return acc;
            }, []);
            return newItemWithFilter;
          });
        }
      }
      lastItemId.current = data.lastItemId;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: isValidUser(user),
  });

  const invalidateMatchQuery = () => {
    lastItemId.current = null;
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
    onSuccess: () => {
      return invalidateMatchQuery();
    },
  }).mutateAsync;

  const deleteAllAlarm = useMutation({
    mutationFn: alarmsAPI.deleteAllAlarm,
    onSuccess: invalidateMatchQuery,
  }).mutateAsync;

  return {
    data,
    refetch,
    readAlarm,
    deleteAlarm,
    deleteAllAlarm,
  };
};
