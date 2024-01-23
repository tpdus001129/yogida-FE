import Header from '../../components/Search/Header';
import NotificationItem from '../../components/Notification/NotificationItem';
import useNotification from '../../hooks/useNotification';
import { useNotificationQuery } from './queries';
import { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useInfinityPaging from '../../hooks/useInfinityPaging';
import spinner from '../../assets/images/spinner.gif';

export default function Notification() {
  const { notificationList } = useNotification();
  const { data, deleteAllAlarm, refetch, readAlarm, deleteAlarm } = useNotificationQuery();
  const { handleObserver, hasNextPage, setHasNextPage } = useInfinityPaging({
    callback: () => refetch(),
  });

  const { setTarget } = useIntersectionObserver({ onIntersect: handleObserver });

  useEffect(() => {
    if (data.data.length === 0) setHasNextPage(false);
    else setHasNextPage(true);
  }, [data, setHasNextPage]);

  return (
    <div>
      <Header title={'알림'} />
      <div className="flex justify-end mr-[24px]">
        {notificationList?.length > 0 && (
          <button className="text-[12px] text-gray-1 mb-[14px]" onClick={deleteAllAlarm}>
            전체삭제
          </button>
        )}
      </div>
      <div className={`overflow-scroll h-[calc(100vh-160px)] scrollbar-hide`}>
        {notificationList?.length === 0 && (
          <div className="text-center mt-[150px]">
            <p className="text-gary-3">알림이 존재하지 않습니다.</p>
          </div>
        )}
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
            readAlarm={readAlarm}
            deleteAlarm={deleteAlarm}
          />
        ))}
        {
          <div ref={setTarget} className={`flex justify-center w-full ${hasNextPage && 'h-4'}`}>
            {hasNextPage && <img src={spinner} alt="loading" />}
          </div>
        }
      </div>
    </div>
  );
}
