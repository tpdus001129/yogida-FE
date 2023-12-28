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
  authorNickname,
  replyMode,
  replyOff,
}) {
  function onSubmitHandler(e) {
    e.preventDefault();
    addCommentHandler();
    createComment(postId, inputValue);
    setInputValue('');
  }

  // 댓글 작성한 닉네임 길이: 답글 쓸 때 사용할 패딩값
  const authorNicknameLength = authorNickname.length + 2;

  return (
    <div className={className}>
      <form className="mx-[24px] flex items-center relative" onSubmit={onSubmitHandler}>
        <label htmlFor="commentInput"></label>
        <div className="flex-col w-full">
          {replyMode ? (
            <div className="relative w-full">
              <ReplyId authorNickname={authorNickname} replyOff={replyOff} />

              <input
                id="replyInput"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                style={{ paddingLeft: `calc(${authorNicknameLength} * 11px + 20px)` }}
                className="w-full h-[48px] bg-gray-3 bg-opacity-30 focus:outline-none rounded-[24px] pr-[44px] text-[14px]"
                placeholder={`님께 댓글 다는 중...`}
              />
            </div>
          ) : (
            <input
              id="commentInput"
              placeholder={disabled ? '로그인 후 댓글 작성이 가능합니다.' : '댓글을 작성해보세요.'}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className="w-full h-[48px] bg-gray-3 bg-opacity-30 focus:outline-none rounded-[24px] pl-[20px] pr-[44px] text-[14px]"
              disabled={disabled ? true : undefined}
            />
          )}
        </div>
        {inputValue && (
          <button type="submit" className="absolute right-0">
            <IoArrowUpCircle className="text-primary" size="40px" />
          </button>
        )}
      </form>
    </div>
  );
}

function ReplyId({ authorNickname, replyOff }) {
  return (
    <span className="text-primary text-[12px] bg-primary bg-opacity-30 rounded-[4px] px-[4px] mr-[6px] absolute top-[50%] mt-[-9px] left-[10px]">
      @{authorNickname}
      <button className="ml-[4px] leading-[12px]" onClick={replyOff}>
        X
      </button>
    </span>
  );
}

ReplyId.propTypes = {
  authorNickname: PropTypes.string.isRequired,
  replyOff: PropTypes.func,
};

Input.propTypes = {
  className: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  addCommentHandler: PropTypes.func,
  disabled: PropTypes.bool,
  createComment: PropTypes.func,
  postId: PropTypes.string,
  authorNickname: PropTypes.string,
  replyMode: PropTypes.bool,
  replyOff: PropTypes.func,
};
