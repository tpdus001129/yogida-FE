import { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import { IoHeartOutline } from 'react-icons/io5';
import { IoEllipseSharp } from 'react-icons/io5';

export default function ImageSlide({ images }) {
  // 데스크탑 드래그
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);

  // 모바일 드래그
  const [touchedX, setTouchedX] = useState(0);
  const [touchedY, setTouchedY] = useState(0);

  // 이동한 값
  const [transformValue, setTransformValue] = useState(0);

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(0);

  // 다음 슬라이드로 이동
  const handleNextSlide = useCallback(() => {
    if (transformValue === -327 * (images.length - 1)) {
      return;
    }
    setTransformValue((prevTransform) => {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage !== currentPage ? nextPage : currentPage);
      return prevTransform - 327;
    });
  }, [currentPage, transformValue, images.length]);

  // 이전 슬라이드로 이동
  const handlePrevSlide = useCallback(() => {
    if (transformValue === 0) {
      return;
    }
    setTransformValue((prevTransform) => {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage !== currentPage ? prevPage : currentPage);
      return prevTransform + 327;
    });
  }, [currentPage, transformValue]);

  // 데스크탑 드래그 시작 시 마우스의 x, y 좌표 저장
  const onMouseDown = useCallback((e) => {
    setMouseDownClientX(e.clientX);
    setMouseDownClientY(e.clientY);
  }, []);

  // 데스크탑 드래그 종료 시 마우스의 x, y 좌표 저장
  const onMouseUp = useCallback((e) => {
    setMouseUpClientX(e.clientX);
    setMouseUpClientY(e.clientY);
  }, []);

  // 드래그에 의한 슬라이드 변경 감지
  useEffect(() => {
    const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
    const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
    const vector = dragSpaceX / dragSpaceY;

    if (mouseDownClientX !== 0 && dragSpaceX > 100 && vector > 2) {
      if (mouseUpClientX < mouseDownClientX) {
        handleNextSlide();
      }
      if (mouseUpClientX > mouseDownClientX) {
        handlePrevSlide();
      }
    }
  }, [mouseDownClientX, mouseUpClientX, mouseDownClientY, mouseUpClientY, handleNextSlide, handlePrevSlide]);

  // 모바일 터치 시작 시 좌표 저장
  function onTouchStart(e) {
    setTouchedX(e.changedTouches[0].pageX);
    setTouchedY(e.changedTouches[0].pageY);
  }

  // 모바일 터치 종료 시 드래그 거리를 계산하여 슬라이드 변경 감지
  function onTouchEnd(e) {
    const distanceX = touchedX - e.changedTouches[0].pageX;
    const distanceY = touchedY - e.changedTouches[0].pageY;
    const vector = Math.abs(distanceX / distanceY);

    if (distanceX > 30 && vector > 2) {
      handleNextSlide();
    } else if (distanceX < -30 && vector > 2) {
      handlePrevSlide();
    }
  }

  // ul의 width길이 동적으로 변환
  function widthSize(images) {
    return `${images.length * 100}%`;
  }

  return (
    <div className="w-[327px] h-[303px] rounded-[10px] mb-[14px] overflow-hidden relative">
      <IoHeartOutline size="36" color="#ffffff" className="absolute z-[10] top-[16px] right-[16px]" />
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
      <div className="absolute bottom-[14px] flex justify-center inset-x-0">
        {Array.from({ length: images.length }, (_, index) => (
          <IoEllipseSharp
            key={index}
            size="8"
            className={` ${currentPage === index ? 'text-primary' : 'text-white'} inline mx-1`}
          />
        ))}
      </div>
    </div>
  );
}

ImageSlide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
