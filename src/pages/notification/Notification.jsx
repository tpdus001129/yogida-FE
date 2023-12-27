import Header from '../../components/Search/Header';
import NotificationItem from '../../components/Notification/NotificationItem';
import useNotification from '../../hooks/useNotification';
import { useNotificationQuery } from './queries';
import { useEffect } from 'react';

export default function Notification() {
  const { notificationList, setNotificationList } = useNotification();
  const { data, deleteAllAlarm, refetch } = useNotificationQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    setNotificationList(data);
  }, [data, setNotificationList]);

  return (
    <div>
      <Header title={'알림'} />
      <div className="flex justify-end mr-[24px]">
        <button className="text-[12px] text-gray-1 mb-[14px]" onClick={deleteAllAlarm}>
          전체삭제
        </button>
      </div>
      <div className={`overflow-scroll h-[calc(100vh-144px)]`}>
        {notificationList?.map((notification) => (
          <NotificationItem
            key={notification._id}
            type={notification.alarmType}
            nickname={notification.senderId.nickname}
            message={''}
            createdAt={notification.createdAt}
            url={notification.postId}
            isRead={notification.isRead}
            alarmId={notification._id}
          />
        ))}
      </div>
    </div>
  );
}
