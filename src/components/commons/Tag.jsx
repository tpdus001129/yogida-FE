import PropTypes from 'prop-types';

export default function Tag({ tags, white }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`${
            white ? 'text-primary bg-[#ffffff]' : 'text-[#ffffff] bg-primary'
          } rounded px-[6px] py-[1px] mb-[10px] mr-[5px]`}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  white: PropTypes.bool,
};
