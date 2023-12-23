import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.jpg';
import { IoTrashOutline } from 'react-icons/io5';
import { IoChatbubbleSharp } from 'react-icons/io5';
import Title from './Title';
import { useMypageCommentQuery } from '../../pages/mypage/queries';

export default function Comments() {
  const { commentList } = useMypageCommentQuery();
  return (
    <>
      <Title title="내가 쓴 댓글" count="10" icon={<IoChatbubbleSharp color="#589BF7" size="13" />} />

      <div className="border-b border-gray-4 mb-[20px]"></div>

      <div className="flex flex-col gap-[20px]">
        {commentList?.length !== 0 &&
          commentList?.map((list) => <Comment key={list._id} img={profile} title=" 안목해변이 너무 예쁘네요." />)}
      </div>
    </>
  );
}

function Comment({ img, title }) {
  return (
    <div className="flex gap-[16px] items-center">
      <img src={img} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
      <div className="w-[76%]">
        <div className="flex items-center justify-between">
          <span className="block text-black text-[14px] truncate w-[90%]">{title}</span>
          <IoTrashOutline size={16} className="text-gray-1" />
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
