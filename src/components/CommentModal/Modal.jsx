import { useState, useContext, useEffect } from 'react';
import { ModalContext } from '../../pages/detail/Detail';
import { useBottomSheet } from '../../hooks/useBottomSheet';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';

import PropTypes from 'prop-types';

import Comment from './Comment';
import Input from './Input';
import Background from './Background';
import commentAPI from '../../services/comment';

export default function Modal({ postId }) {
  // 유저정보
  const user = useRecoilValue(userState);
  const { commentModalMode, setCommentModalMode } = useContext(ModalContext);
  const commentPostId = postId;
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [commentReplyContent, setCommentReplyContent] = useState('');
  const [commentNickname, setCommentNickname] = useState('');
  const [commentParentsComment, setCommentParentsComment] = useState('');

  // 댓글 목록
  const [commentsData, setCommentsData] = useState(comments);

  // 대댓글 모드
  const [replyMode, setReplyMode] = useState(false);

  // bottom sheet
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useBottomSheet(() => {
    setCommentModalMode(false);
  });

  function replyOn() {
    setReplyMode(true);
  }

  function replyOff() {
    setReplyMode(false);
  }

  // 새로운 댓글
  const [newComment, setNewComment] = useState({
    image: user && user.profileImageSrc,
    nickname: user && user.nickname,
    date: '',
    content: '',
  });

  // 댓글 추가
  function addCommentHandler() {
    setCommentsData([...commentsData, { ...newComment, content: inputValue }]);
    setNewComment({ ...newComment, content: '' });
    setInputValue('');
    replyOff();
  }

  // comment get API
  useEffect(() => {
    commentAPI
      .getAllCommentByPost(postId)
      .then((comment) => {
        setComments(comment.data.postComments);
      })
      .catch((error) => {
        console.error(error);
        throw new Error('댓글을 불러오는 중에 오류가 생겼습니다.');
      });
  }, [postId]);

  // comment & reply post API
  async function createCommentReply(commentParentsComment, commentPostId, commentReplyContent) {
    await commentAPI.postComment(commentParentsComment, commentPostId, commentReplyContent);
    setCommentReplyContent('');
  }

  // 자식 컴포넌트에서 다른 자식 컴포넌트로 전달
  const getAuthorId = (nickname, parentsCommentId) => {
    setCommentNickname(nickname);
    setCommentParentsComment(parentsCommentId);
  };

  return (
    <div>
      <Background commentModalMode={commentModalMode} setCommentModalMode={setCommentModalMode} />
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className="w-full h-[80vh] bg-white absolute bottom-0 rounded-t-[20px] z-[10] animate-[bottom-sheet-up_200ms_ease-in-out] ">
          <div className="flex justify-center">
            <div className="w-1/6 h-[4px] bg-gray-3 rounded-[8px] mt-[16px]"></div>
          </div>
          <p className="text-[14px] font-bold text-center mt-[40px] mb-[10px]">댓글</p>
          <hr className="border-gray-3  mb-[18px]" />
          <div className="w-full h-[50vh] overflow-scroll scrollbar-hide">
            {comments.length === 0 ? (
              <p className="text-[14px] text-gray-1 text-center">작성된 댓글이 없습니다.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment._id}>
                  <Comment
                    image={comment.authorId.profileImageSrc}
                    nickname={comment.authorId.nickname}
                    date={comment.createdAt.slice(0, 10)}
                    content={comment.content}
                    commentId={comment._id}
                    setGetReplyId={comment.authorId.nickname}
                    authorId={comment.authorId._id}
                    newComment={newComment}
                    replyOn={replyOn}
                    getAuthorId={getAuthorId}
                    reply={comment.reply}
                  />
                </div>
              ))
            )}
          </div>
          <Input
            className={'absolute bottom-[28px] w-full'}
            inputValue={inputValue}
            addCommentHandler={addCommentHandler}
            setInputValue={setInputValue}
            disabled={!user}
            createCommentReply={createCommentReply}
            postId={postId}
            authorNickname={commentNickname}
            replyMode={replyMode}
            replyOff={replyOff}
            setCommentReplyContent={setCommentReplyContent}
            commentReplyContent={commentReplyContent}
            commentParentsComment={commentParentsComment}
            commentPostId={commentPostId}
          />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  postId: PropTypes.string,
};
