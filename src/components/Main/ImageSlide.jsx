import { useState } from 'react';
import { useImageSlide } from '../../hooks/useImageSlide';

import PropTypes from 'prop-types';

import { IoEllipseSharp, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

export default function ImageSlide({ images }) {
  const { onMouseDown, onMouseUp, onTouchStart, onTouchEnd, transformValue, currentPage } = useImageSlide(images);

  // ul의 width길이 동적으로 변환
  function widthSize(images) {
    return `${images.length * 100}%`;
  }

  // 찜하기
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // 버블링 방지
  function onClickHandler(e) {
    e.preventDefault();
    setIsHeartClicked((prev) => !prev);
  }

  return (
    <div className="w-[327px] h-[303px] rounded-[10px] mb-[14px] overflow-hidden relative">
      <button onClick={onClickHandler} className="absolute z-[10] top-[16px] right-[16px]">
        {isHeartClicked ? (
          <IoHeartSharp size="36" className="text-red" />
        ) : (
          <IoHeartOutline size="36" color="#ffffff" />
        )}
      </button>
      <ul
        className={`flex transition-transform duration-300 ease-in-out`}
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        style={{ transform: `translateX(${transformValue}px)`, width: widthSize(images) }}
      >
        {images.map((image, index) => (
          <li key={index} className="w-[327px] h-[303px] bg-gray-3">
            {image}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-[14px] flex justify-center inset-x-0 items-center">
        {Array.from({ length: images.length }, (_, index) => (
          <IoEllipseSharp
            key={index}
            className={` ${currentPage === index ? 'text-primary text-[12px]' : 'text-white text-[8px]'} inline mx-1`}
          />
        ))}
      </div>
    </div>
  );
}

ImageSlide.propTypes = {
  images: PropTypes.array.isRequired,
};
