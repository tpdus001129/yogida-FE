import PropTypes from 'prop-types';

import ReplyButton from './ReplyButton';
import ReplyId from './ReplyId';

export default function Comment({ reply, image, nickname, content, date }) {
  return (
    <div className={`mx-[24px] flex items-center mb-[16px] ${reply ? 'ml-[44px]' : ''}`}>
      <div className="w-[50px] h-[50px] rounded-full bg-gray-3 mr-[10px] flex-shrink-0 overflow-hidden">
        <Profile img={image} />
      </div>
      <div>
        <div className="flex">
          <div className="text-[12px] font-bold mr-[8px]">{nickname}</div>
          <div className="text-[12px] text-gray-2">{date}</div>
        </div>
        <p className="text-[12px]">
          {reply ? <ReplyId userId={'댓글아이디'} /> : ''}
          {content}
        </p>
        <div>
          {reply ? '' : <ReplyButton text={'댓글 열기'} textColor={'text-blue-500'} className={'mr-[8px]'} />}
          <ReplyButton text={'댓글 달기'} textColor={'text-gray-500'} />
        </div>
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
