import PropTypes from 'prop-types';
import { IoArrowUpCircle } from 'react-icons/io5';

export default function Input({
  className,
  inputValue,
  setInputValue,
  addCommentHandler,
  disabled,
  createComment,
  postId,
}) {
  function onSubmitHandler(e) {
    e.preventDefault();
    addCommentHandler();
    createComment(postId, inputValue);
    setInputValue('');
  }

  console.log('postId', postId);
  console.log('inputValue', inputValue);

  return (
    <div className={className}>
      <form className="mx-[24px] flex items-center relative" onSubmit={onSubmitHandler}>
        <label htmlFor="commentInput"></label>
        <input
          id="commentInput"
          placeholder={disabled ? '로그인 후 댓글 작성이 가능합니다.' : '댓글을 작성해보세요.'}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="w-full h-[48px] bg-gray-3 bg-opacity-30 focus:outline-none rounded-[24px] pl-[20px] pr-[44px]"
          disabled={disabled ? true : undefined}
        />
        {inputValue && (
          <button type="submit" className="absolute right-0">
            <IoArrowUpCircle className="text-primary" size="40px" />
          </button>
        )}
      </form>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  addCommentHandler: PropTypes.func,
  disabled: PropTypes.bool,
  createComment: PropTypes.func,
  postId: PropTypes.string,
};
