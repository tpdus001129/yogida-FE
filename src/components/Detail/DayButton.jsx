import PropTypes from 'prop-types';
import { useState } from 'react';

export default function DayButton({ startDate, dayCount, dayTitle, setIndex }) {
  // 클릭한 날짜 데이터 저장
  const [selectedDay, setSelectedDay] = useState(0);

  // 클릭시 클릭한 날짜 데이터에 저장
  function handleOnClick(day) {
    setSelectedDay(day);
    setIndex(day);
  }

  // 시작 날짜
  const newStartDate = new Date(startDate);
  // const startDateMonth = newStartDate.getMonth();
  const startDateDate = newStartDate.getDate();

  // 요일 계산기
  function getTodayLabel() {
    const day = new Array('일', '월', '화', '수', '목', '금', '토');
    const startDateDay = newStartDate.getDay();
    const todayLabel = day[startDateDay];

    return todayLabel;
  }

  // 선택한 day 날짜 계산
  const selectedDateObj = new Date(newStartDate);
  selectedDateObj.setDate(startDateDate + selectedDay);

  const selectedDateMonth = selectedDateObj.getMonth();
  const selectedDateDate = selectedDateObj.getDate();
  const selectedDateLabel = getTodayLabel(selectedDateObj);

  const selectedDayTitle = `${selectedDateMonth + 1}월 ${selectedDateDate}일 ${selectedDateLabel}요일`;

  dayTitle(selectedDayTitle);

  // day 버튼을 생성할 변수 길이
  const mapDayCount = Array.from({ length: dayCount + 1 });

  return (
    <>
      <div className="flex ml-[24px] mb-[26px]">
        {mapDayCount.map((_, index) => (
          <button
            key={index}
            className={`w-[74px] h-[36px] rounded-full flex-shrink-0 flex justify-center items-center text-[14px] mr-[9px] ${
              index === selectedDay ? 'bg-primary text-white font-bold' : 'bg-white border border-gray-2 text-gray-2'
            }`}
            onClick={() => handleOnClick(index)}
          >
            day {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

DayButton.propTypes = {
  dayCount: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  dayTitle: PropTypes.func,
  setIndex: PropTypes.func,
};
