import PropTypes from 'prop-types';
import { IoCamera, IoClose } from 'react-icons/io5';

export default function Card(props) {
  const { id, category, placeName, placeImageSrc, handleAddPlaceImgClick, handleRemoveSingleScheduleClick } = props;

  const handleChangeImage = (e) => {
    if (!e.target.files) {
      return;
    }
    const fileInput = e.target.files[0];
    const img = URL.createObjectURL(fileInput);
    handleAddPlaceImgClick({ id, img });
  };

  return (
    <div className="w-full bg-[#ffffff] rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="h-[43px] flex justify-between items-center mx-[16px] rounded-t-[20px]">
        <div className="flex">
          <p className="text-[14px] mr-[4px] font-bold">{placeName || ''}</p>
          <p className="text-[12px] mt-[2px] line-height-[14px]">{category || ''}</p>
        </div>
        <IoClose size={20} onClick={() => handleRemoveSingleScheduleClick(id)} />
      </div>
      <label
        htmlFor={`${id}`}
        className="h-[130px] rounded-b-[20px] bg-[#d9d9d9] overflow-hidden flex items-center justify-center"
      >
        {placeImageSrc && <img src={placeImageSrc} alt="place-img" />}
        {!placeImageSrc && (
          <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center" type="button">
            <IoCamera size={24} color="white" />
          </span>
        )}
        <input type="file" name="placeImg" id={`${id}`} className="hidden" onChange={handleChangeImage} />
      </label>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string,
  placeName: PropTypes.string,
  placeImageSrc: PropTypes.string,
  handleAddPlaceImgClick: PropTypes.func,
  handleRemoveSingleScheduleClick: PropTypes.func,
  id: PropTypes.string,
};
