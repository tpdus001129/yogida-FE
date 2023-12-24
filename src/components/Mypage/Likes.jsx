import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';
import sample from '../../assets/images/sample.jpg';
import Title from './Title';
import DeleteAllCheckbox from './DeleteAllCheckbox';
import { useMypageLikesQuery } from '../../pages/mypage/queries';

export default function Likes() {
  const { likesList } = useMypageLikesQuery();
  const { list, totalCount } = likesList;

  return (
    <>
      <Title title="내가 찜한 코스" count={totalCount} icon={<IoHeartSharp color="#FB6363" size="13" />} />

      <DeleteAllCheckbox clickedCount={1} totalCount={20} title="찜" />

      <div className="border-b border-gray-4 mb-[20px]"></div>

      <div className="flex flex-col gap-[20px]">
        {totalCount !== 0 &&
          list?.map((item) => <Like key={item._id} img={sample} title="강릉 여행" subTitle="2023.05.24 ~ 05.28" />)}
      </div>
    </>
  );
}

function Like({ img, title, subTitle }) {
  return (
    <>
      <input type="checkbox" name="delete-item" id="delete-item" className="" />
      <label htmlFor="delete-item" className="cursor-pointer flex items-center gap-[8px] w-full">
        <IoCheckmarkCircle className="text-gray-3 active:text-primary" size={20} />
        <div className="flex gap-[16px] items-center w-full">
          <img src={img} alt="card-thumbnail" className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="w-[65%]">
            <div className="flex items-center">
              <strong className=" block text-black text-[14px] truncate">{title}</strong>
            </div>
            <span className="text-gray-1 text-[14px] font-medium">{subTitle}</span>
          </div>
          <IoTrashOutline size={16} className="text-gray-1" />
        </div>
      </label>
    </>
  );
}

Like.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  deleteMode: PropTypes.bool.isRequired,
};
