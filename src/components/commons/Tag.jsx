import PropTypes from 'prop-types';

export default function Tag({ tags, white }) {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`${
            white ? 'text-primary bg-white' : 'text-white bg-primary'
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
