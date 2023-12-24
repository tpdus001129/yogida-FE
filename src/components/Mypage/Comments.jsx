import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoils/userAtom';
import { useMypageCommentQuery } from '../../pages/mypage/queries';
import Title from './Title';
import { IoTrashOutline, IoChatbubbleSharp } from 'react-icons/io5';

export default function Comments() {
  const { profileImageSrc } = useRecoilValue(userState);
  const { commentList } = useMypageCommentQuery();
  const { list, totalCount } = commentList;

  return (
    <>
      <Title title="내가 쓴 댓글" count={totalCount} icon={<IoChatbubbleSharp color="#589BF7" size="13" />} />

      <div className="border-b border-gray-4 mb-[20px]"></div>

      <div className="flex flex-col gap-[20px]">
        {totalCount !== 0 &&
          list?.map((item) => <Comment key={item._id} img={profileImageSrc} title={item?.content} />)}
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
