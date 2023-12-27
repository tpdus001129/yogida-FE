import Proptypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

export default function ScheduleCalendar({ setStartDate, setEndDate }) {
  const handleDateClick = (e) => {
    setStartDate(e[0]);
    setEndDate(e[1]);
  };
  return <Calendar onChange={handleDateClick} selectRange={true} next2Label={null} prev2Label={null} />;
}

ScheduleCalendar.propTypes = {
  setStartDate: Proptypes.func,
  setEndDate: Proptypes.func,
};
