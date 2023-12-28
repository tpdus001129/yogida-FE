import PropTypes from 'prop-types';
import { useState } from 'react';
import ReplyButton from './ReplyButton';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import CommentMenu from './CommentMenu';

export default function Comment({ reply, image, nickname, content, date, deleteComment, commentId }) {
  const [commentMenu, setCommentMenu] = useState(false);

  function CommentMenuToggle() {
    setCommentMenu(!commentMenu);
  }

  console.log('여기~!는 코멘트 아이디', commentId);

  return (
    <div className="flex justify-between">
      <div className={`mx-[24px] flex items-center mb-[16px] ${reply ? 'ml-[44px]' : ''}`}>
        <div className="w-[50px] h-[50px] rounded-full bg-gray-3 mr-[10px] flex-shrink-0 overflow-hidden">
          <Profile img={image} />
        </div>
        <div>
          <div className="flex">
            <div className="text-[12px] font-bold mr-[8px]">{nickname}</div>
            <div className="text-[12px] text-gray-2">{date}</div>
          </div>
          <p className="text-[12px]">{content}</p>
          <div className="text-[12px]">
            <button className="text-blue-500 mr-[8px]">댓글 열기</button>
            <button className="text-gray-500">댓글 달기</button>
          </div>
        </div>
      </div>
      <div className="mr-[24px] relative">
        <button>
          <IoEllipsisHorizontalSharp onClick={CommentMenuToggle} />
        </button>
        {commentMenu && <CommentMenu commentMenu={commentMenu} deleteComment={deleteComment} commentId={commentId} />}
      </div>
    </div>
  );
}

function Profile({ img }) {
  return <img src={img} alt="profile-img" className="rounded-full items-center w-[50px]" />;
}

Comment.propTypes = {
  reply: PropTypes.bool.isRequired,
  nickname: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  deleteComment: PropTypes.func,
  commentId: PropTypes.string,
};

Comment.defaultProps = {
  reply: false,
};

ReplyButton.defaultProps = {
  className: '',
};

Profile.propTypes = {
  img: PropTypes.string,
};
