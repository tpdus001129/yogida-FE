import PropTypes from 'prop-types';

import { IoArrowUpCircle } from 'react-icons/io5';

function ReplyId({ authorNickname, replyOff, widthRef }) {
  return (
    <span
      className="text-primary text-[12px] bg-primary bg-opacity-30 rounded-[4px] px-[4px] mr-[6px] absolute top-[50%] mt-[-9px] left-[10px]"
      ref={widthRef}
    >
      @{authorNickname}
      <button className="ml-[6px] leading-[12px]" onClick={replyOff}>
        X
      </button>
    </span>
  );
}

export default function Input({
  className,
  setInputValue,
  addCommentHandler,
  disabled,
  createCommentReply,
  authorNickname,
  replyMode,
  replyOff,
  editMode,
  commentReplyContent,
  commentPostId,
  commentParentsComment,
  setCommentParentsComment,
  setCommentReplyContent,
}) {
  const nicknameLength = authorNickname.length;

  function onSubmitHandler() {
    // e.preventDefault();
    addCommentHandler();
    createCommentReply(commentParentsComment, commentPostId, commentReplyContent);
    setInputValue('');
    setCommentParentsComment('');
  }

  // 댓글 작성 버튼 클릭시
  function handleCommentSubmit(e) {
    e.preventDefault();
    onSubmitHandler();
  }

  return (
    <div className={className}>
      <form className="mx-[24px] flex items-center relative" onSubmit={handleCommentSubmit}>
        <label htmlFor="commentInput"></label>
        <div className="flex-col w-full">
          {replyMode ? (
            <div className="relative w-full">
              <ReplyId authorNickname={authorNickname} replyOff={replyOff} />
              <input
                id="replyInput"
                onChange={(e) => setCommentReplyContent(e.target.value)}
                value={commentReplyContent}
                style={{ paddingLeft: `${nicknameLength + 80}px` }}
                className="w-full h-[48px] bg-gray-3 bg-opacity-30 focus:outline-none rounded-[24px] pr-[44px] text-[14px]"
                placeholder={`님께 댓글 작성 중입니다.`}
              />
            </div>
          ) : (
            <input
              id="commentInput"
              placeholder={disabled ? '로그인 후 댓글 작성이 가능합니다.' : '댓글을 작성해보세요.'}
              onChange={(e) => setCommentReplyContent(e.target.value)}
              value={commentReplyContent}
              className="w-full h-[48px] bg-gray-3 bg-opacity-30 focus:outline-none rounded-[24px] pl-[20px] pr-[44px] text-[14px]"
              disabled={disabled || editMode ? true : undefined}
            />
          )}
        </div>
        {commentReplyContent && (
          <button type="submit" className="absolute right-0">
            <IoArrowUpCircle className="text-primary" size="40px" />
          </button>
        )}
      </form>
    </div>
  );
}

ReplyId.propTypes = {
  authorNickname: PropTypes.string.isRequired,
  replyOff: PropTypes.func,
  widthRef: PropTypes.any,
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
  createCommentReply: PropTypes.func,
  editMode: PropTypes.bool,
  commentReplyContent: PropTypes.string,
  commentPostId: PropTypes.string,
  commentParentsComment: PropTypes.string,
  setCommentReplyContent: PropTypes.func,
  setCommentParentsComment: PropTypes.func,
};
