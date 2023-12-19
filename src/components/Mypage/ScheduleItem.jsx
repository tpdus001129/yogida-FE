import PropTypes from 'prop-types';

export default function ScheduleItem({ icon, title, id, width, children }) {
  const getWidth = width ? width : 'w-[40%]';

  return (
    <li className="border-[#E8E8E8] border-b-[1px] px-[26px] py-[16px] flex items-center justify-between last:border-b-0">
      <label htmlFor={id} className={`flex items-center gap-[10px] ${getWidth}`}>
        {icon}
        <strong className="text-[12px] font-semibold">{title}</strong>
      </label>
      <div className="flex items-center w-full gap-[2px]">{children}</div>
    </li>
  );
}

ScheduleItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.element,
};
