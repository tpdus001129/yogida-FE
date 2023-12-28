import PropTypes from 'prop-types';

export default function CommentMenu({ deleteComment, commentId }) {
  console.log('아이디', commentId);
  return (
    <div className="absolute w-[40px] h-[56px] rounded-[4px] text-[12px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] bg-white left-[-4px] bottom-[2px]">
      <button className="hover:bg-gray-200 w-full h-[50%]">수정</button>
      <button className="hover:bg-gray-200 w-full h-[50%]" onClick={() => deleteComment(commentId)}>
        삭제
      </button>
    </div>
  );
}

CommentMenu.propTypes = {
  deleteComment: PropTypes.func,
  commentId: PropTypes.string,
};
