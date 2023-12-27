import Card from './Card';
import PropTypes from 'prop-types';

export default function Course({ schedules, handleAddPlaceImgClick }) {
  return (
    <ul className="mt-5 flex flex-col gap-5">
      {schedules?.map((schedule) => (
        <li key={schedule?.id}>
          <Card {...schedule} handleAddPlaceImgClick={handleAddPlaceImgClick} />
        </li>
      ))}
    </ul>
  );
}

Course.propTypes = {
  schedules: PropTypes.array,
  selectDay: PropTypes.number,
  handleAddPlaceImgClick: PropTypes.func,
};
