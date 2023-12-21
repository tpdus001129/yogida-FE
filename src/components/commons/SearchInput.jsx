import PropTypes from 'prop-types';

export default function SearchInput({ newKeyword, onChangeHandler }) {
  return (
    <input
      className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-3 opacity-30"
      type="text"
      placeholder="지역 이름으로 검색해보세요."
      value={newKeyword}
      onChange={onChangeHandler}
    />
  );
}

SearchInput.propTypes = {
  newKeyword: PropTypes.string,
  onChangeHandler: PropTypes.func,
};
