import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function DeleteAllCheckbox({ clickedCount = 0, totalCount = 0, title }) {
  return (
    <>
      <div className="flex items-center justify-between mb-[20px]">
        <div className="w-fit flex items-center gap-[8px]">
          <label htmlFor="delete" className="cursor-pointer">
            <IoCheckmarkCircle className="text-gray-3" size={20} />
          </label>
          <input type="checkbox" name="delete" id="delete" className="hidden" />
          <label htmlFor="delete" className="text-[14px] cursor-pointer font-medium">
            전체 선택({clickedCount}/{totalCount})
          </label>
        </div>
        <button className="text-[14px] font-medium">{title} 삭제</button>
      </div>
    </>
  );
}

DeleteAllCheckbox.propTypes = {
  clickedCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
