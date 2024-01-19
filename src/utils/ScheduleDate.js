import { convertSimpleDate } from './convertSimpleDate';

export const ScheduleDate = (startDate, endDate) => {
  return startDate && endDate
    ? `${convertSimpleDate(startDate)}` === `${convertSimpleDate(endDate)}`
      ? `${convertSimpleDate(startDate)}`
      : `${convertSimpleDate(startDate)} ~ ${convertSimpleDate(endDate)}`
    : '';
};
