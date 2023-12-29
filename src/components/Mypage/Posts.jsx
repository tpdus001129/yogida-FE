import PropTypes from 'prop-types';
import { IoAdd } from 'react-icons/io5';
import { IoEllipsisHorizontalSharp, IoLockClosedOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Title from './Title';
import { useMypagePostsQuery } from '../../pages/mypage/queries';
import { convertSimpleDate } from '../../utils/convertSimpleDate';
import useModal from '../../hooks/useModal';
import noImage from '../../assets/images/noImage.png';

export default function Posts() {
  const { postsList } = useMypagePostsQuery();
  const { openModal } = useModal();

  const modal = () => {
    openModal({ message: '?' });
  };

  return (
    <>
      <Link
        to="/schedule"
        className="bg-input py-[13px] px-[16px] rounded-[4px] flex gap-[10px] items-center mb-[24px] cursor-pointer"
      >
        <button className="w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center">
          <IoAdd className="text-white" size={23} />
        </button>
        <div className="w-[80%]">
          <strong className="font-bold text-[12px]">여행 일정 만들기</strong>
          <span className="block text-gray-1 text-[10px]">새로운 여행을 떠나보세요.</span>
        </div>
      </Link>

      <Title title={'지난 여행'} count={postsList?.totalCount} />

      <div className="flex flex-col gap-[20px]">
        {postsList?.list !== 0 &&
          postsList?.list?.map((item) => (
            <Post
              key={item._id}
              img={item?.schedules[0][0]?.placeImageSrc || noImage}
              title={item?.title}
              date={`${convertSimpleDate(item?.startDate)} ~ ${convertSimpleDate(item?.endDate)}`}
              isPublic={item?.isPublic}
              onClick={modal}
            />
          ))}
      </div>

      {/* <ModalWithOption /> */}
    </>
  );
}

function Post({ img, title, date, isPublic, onClick }) {
  return (
    <div className="flex gap-[16px] items-center">
      <div className="border rounded-full">
        <img
          src={img}
          alt="card-thumbnail"
          className="w-[60px] h-[60px] rounded-full object-cover border border-black"
        />
      </div>
      <div className="w-[65%]">
        <div className="flex items-center gap-1">
          <strong className=" block text-black text-[14px] truncate">{title}</strong>
          {!isPublic && <IoLockClosedOutline size={12} />}
        </div>
        <span className="text-gray-1 text-[14px] font-medium">{date}</span>
      </div>
      <IoEllipsisHorizontalSharp size={25} onClick={onClick} />
    </div>
  );
}

Post.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
