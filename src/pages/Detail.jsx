import Header from '../components/Detail/Header';
import DayButton from '../components/Detail/DayButton';
import ContentItem from '../components/Detail/ContentItem';
import Button from '../components/commons/Button';

export default function Detail() {
  const firstPlace = true;
  const lastPlace = true;

  return (
    <div>
      <Header />
      <div className="w-full h-[160px] bg-[#d9d9d9] mb-[22px]">지도지도</div>
      {/* 추후 드래그로 바꿀 예정 : 스크롤로 임시 구현  */}
      <div className="overflow-scroll">
        <DayButton />
      </div>
      <p className="text-center text-[14px] font-bold my-[26px]">day1 날짜</p>
      <ContentItem firstPlace={firstPlace} />
      <ContentItem />
      <ContentItem lastPlace={lastPlace} />

      <div className="mx-[24px] mb-[80px]">
        <p className="text-center text-[14px] font-bold mt-[60px] mb-[30px]">여행 한마디</p>
        <p className="text-[14px]">
          강릉 바다가 너무 예쁘네요~ 다음에 또 방문할 예정이랍니다. 특히 맛집은 꼭 가세요!!!!
        </p>
      </div>
      <div className="w-full flex justify-center mb-[60px]">
        <Button bgColor="bg-[#FFDB5F]" textColor="text-[#606060]">
          삭제하기
        </Button>
      </div>
    </div>
  );
}
