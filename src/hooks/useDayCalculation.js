import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(dayOfYear);

// 시작 날짜 ~ 끝 날짜 계산기
const useDayCalculation = (startDate, endDate) => {
  const startDateData = dayjs(startDate);
  const endDateData = dayjs(endDate);
  const diffDate = endDateData.dayOfYear() - startDateData.dayOfYear();

  return diffDate;
};

export default useDayCalculation;
