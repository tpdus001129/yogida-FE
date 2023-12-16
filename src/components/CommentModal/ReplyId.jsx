import PropTypes from 'prop-types';

export default function ReplyId({ userId }) {
  return <span className="text-primary text-[12px] bg-[#CDE1FD] rounded-[4px] px-[4px] mr-[6px]">@{userId}</span>;
}

ReplyId.propTypes = {
  userId: PropTypes.string.isRequired,
};
