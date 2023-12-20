import PropTypes from 'prop-types';

import { IoClose } from 'react-icons/io5';

export default function SearchItem({ keyword, onRemove }) {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p>{keyword}</p>
          <button onClick={onRemove}>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}

SearchItem.propTypes = {
  keyword: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
