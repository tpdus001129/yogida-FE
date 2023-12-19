import Header from '../components/Search/Header';
import NotificationItem from '../components/Notification/NotificationItem';

export default function Notification() {
  return (
    <div>
      <Header title={'알림'} />
      <div className="flex justify-end mr-[24px]">
        <button className="text-[12px] text-gray-1 mb-[14px]">전체삭제</button>
      </div>
      <div>
        <NotificationItem
          type={'comment'}
          nickname={'이다현'}
          message={'저도 꼭 가보고 싶어요.!! 저도 꼭 가보고 싶어요.!! 저도 꼭 가보고 싶어요.!!'}
          time={30}
        />
        <NotificationItem type={'heart'} nickname={'이다현'} time={30} />
        <NotificationItem
          type={'chat'}
          nickname={'이다현'}
          message={'안녕하세요 궁금한게 있어서 채팅남겼습니다! 안녕하세요 궁금한게 있어서 채팅남겼습니다!'}
          time={30}
        />
      </div>
    </div>
  );
}
