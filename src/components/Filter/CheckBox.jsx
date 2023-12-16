import PropTypes from 'prop-types';

export default function CheckBox({ tag, checked, setChecked }) {
  function onClickHandler() {
    setChecked(!checked);
  }

  return (
    <div className="items-center">
      {/* 기본상태 */}
      {tag.map((item, index) => (
        <span
          key={index}
          className={`${
            checked ? 'bg-[#CDE1FD] text-primary' : 'bg-[#F4F4F4] text-[#D9D9D9]'
          } rounded-[20px] cursor-pointer px-[16px] text-[14px] font-bold mr-[8px] leading-[46px] py-[10px]`}
          onClick={onClickHandler}
        >
          <input type="checkbox" className="hidden" />
          <label>{item}</label>
        </span>
      ))}

      {/* 클릭상태 */}
      {/* <div>
        <input type="checkbox" className="hidden" />
        <label className="text-center bg-[#CDE1FD] border rounded-[20px] border-solid border-primary px-[16px] py-[10px] cursor-pointer text-[14px] text-primary font-bold mr-[8px]">
          Label Text
        </label>
      </div> */}
    </div>
  );
}

CheckBox.propTypes = {
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};
