// 시작 날짜 ~ 끝 날짜 계산기
const useDayCalculation = (startDate, endDate) => {
  const startDateData = new Date(startDate);
  const endDateData = new Date(endDate);
  console.log(endDateData, startDateData);
  const diffDate = endDateData.getDay() - startDateData.getDay();

  return diffDate;
};

export default useDayCalculation;
