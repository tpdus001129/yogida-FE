import { useState, createContext, useEffect } from 'react';

import Header from '../components/Detail/Header';
import DayButton from '../components/Detail/DayButton';
import ContentItem from '../components/Detail/ContentItem';
import Button from '../components/commons/Button';
import CourseMap from '../components/KakaoMaps/CourseMap';
import Modal from '../components/CommentModal/Modal';

export const ModalContext = createContext();

export default function Detail() {
  const firstPlace = true;
  const lastPlace = true;

  // 댓글 모드
  const [commentModalMode, setCommentModalMode] = useState(false);

  // 시작점과 종료점의 Y 좌표를 저장하는 state
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);

  // 드래그 종료 시 처리
  useEffect(() => {
    const deltaY = mouseUpClientY - mouseDownClientY;
    if (commentModalMode && deltaY > 30) {
      setCommentModalMode(false);
    }
  }, [mouseDownClientY, mouseUpClientY, commentModalMode, setCommentModalMode]);

  // 데스크탑 드래그 종료 시 마우스의 y 좌표 저장 및 처리
  function onMouseUp(e) {
    setMouseUpClientY(e.clientY);
    const deltaY = e.clientY - mouseDownClientY;
    if (commentModalMode && deltaY > 30) {
      setCommentModalMode(false);
    }
  }
  // 데스크탑 드래그 시작 시 마우스의 y 좌표 저장
  function onMouseDown(e) {
    setMouseDownClientY(e.clientY);
  }

  // 데스크탑 드래그 종료 시 마우스의 y 좌표 저장
  // function onMouseUp(e) {
  //   setMouseUpClientY(e.clientY);
  // }

  // // 터치 시작 시 처리
  // function onTouchStart(e) {
  //   setStartY(e.touches[0].clientY);
  // }

  // // 터치 종료 시 처리
  // function onTouchEnd(e) {
  //   setEndY(e.changedTouches[0].clientY);
  // }

  return (
    <ModalContext.Provider value={{ commentModalMode, setCommentModalMode }}>
      {commentModalMode && <Modal onMouseDown={onMouseDown} onMouseUp={onMouseUp} />}
      <div className={commentModalMode ? 'w-full h-screen overflow-hidden' : ''}>
        <Header />
        <div className="w-full h-[160px] mb-[22px]">
          <CourseMap />
        </div>
        <div className="overflow-scroll scrollbar-hide">
          <DayButton />
        </div>
        <p className="text-center text-[14px] font-bold my-[26px]">day1 날짜</p>
        <ContentItem firstPlace={firstPlace} index={1} />
        <ContentItem index={2} />
        <ContentItem lastPlace={lastPlace} index={3} />

        <div className="mx-[24px] mb-[80px]">
          <p className="text-center text-[14px] font-bold mt-[60px] mb-[30px]">여행 한마디</p>
          <p className="text-[14px]">
            강릉 바다가 너무 예쁘네요~ 다음에 또 방문할 예정이랍니다. 특히 맛집은 꼭 가세요!!!!
          </p>
        </div>
        <div className="w-full flex justify-center mb-[60px] px-[24px]">
          <Button type={'secondary'} text={'boldDescription'}>
            삭제하기
          </Button>
        </div>
      </div>
    </ModalContext.Provider>
  );
}
