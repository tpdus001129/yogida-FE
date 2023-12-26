import { useRecoilState, useRecoilValue } from 'recoil';
import { notificationCountState, notificationListState } from '../recoils/notificationAtom';

export default function useNotification() {
  const [notificationList, setNotificationList] = useRecoilState(notificationListState);
  const notificationCount = useRecoilValue(notificationCountState);

  return { notificationList, setNotificationList, notificationCount };
}
