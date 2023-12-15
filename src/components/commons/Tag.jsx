import PropTypes from 'prop-types';

export default function Tag({ tags }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <span key={index} className="text-[#ffffff] bg-primary rounded px-[6px] py-[1px] mb-[10px] mr-[10px]">
          #{tag}
        </span>
      ))}
    </div>
  );
}

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
