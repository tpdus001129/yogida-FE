import { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPostByPostId } from '../services/posts';

import Header from '../components/Detail/Header';
import DayButton from '../components/Detail/DayButton';
import ContentItem from '../components/Detail/ContentItem';
import Button from '../components/commons/Button';
import CourseMap from '../components/KakaoMaps/CourseMap';
import Modal from '../components/CommentModal/Modal';
import useDayCalculation from '../hooks/useDayCalculation';

export const ModalContext = createContext();

export default function Detail() {
  const { id: postId } = useParams();
  const [data, setData] = useState([]);
  const [dayTitle, setDayTitle] = useState('');
  const [index, setIndex] = useState(0);

  // 나의 글 유무
  // const myPost = true;

  // 댓글 모드
  const [commentModalMode, setCommentModalMode] = useState(false);

  // 시작점과 종료점의 Y 좌표를 저장하는 state
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);

  // API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPostByPostId(postId);
        setData(posts);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    fetchData();
  }, [postId]);

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

  // // 터치 시작 시 처리
  // function onTouchStart(e) {
  //   setStartY(e.touches[0].clientY);
  // }

  // // 터치 종료 시 처리
  // function onTouchEnd(e) {
  //   setEndY(e.changedTouches[0].clientY);
  // }

  // 날짜 계산기 커스텀 훅 사용
  const dayCalculation = useDayCalculation(data.startDate, data.endDate);

  // 작성 날짜 포맷
  const createData = String(data.createdAt).slice(0, 10);

  // 닉네임 가져오기
  function nicknameData() {
    if (data && data.authorId && data.authorId.nickname.length > 0) {
      const nicknameData = data.authorId.nickname;
      return nicknameData;
    }
  }

  // day 버튼 클릭시 day에 맞는 스케줄
  function dayClickedSchedulesData() {
    if (data.schedules && data.schedules.length > 0) {
      const schedulesData = data.schedules;
      return schedulesData[index];
    }
  }

  // day 버튼 클릭시 day에 맞는 스케줄
  function distancesData() {
    if (data.distances && data.distances.length > 0) {
      const distancesData = data.distances;
      return distancesData;
    }
  }

  if (!data) return <p>loading...</p>;
  return (
    <ModalContext.Provider value={{ commentModalMode, setCommentModalMode }}>
      {commentModalMode && <Modal onMouseDown={onMouseDown} onMouseUp={onMouseUp} />}
      <div className={commentModalMode ? 'w-full h-screen overflow-hidden' : ''}>
        <Header headerData={data} />
        <div className="w-full h-[160px] mb-[22px]">
          {data.schedules && <CourseMap data={data.schedules.map((schedule) => schedule)} />}
        </div>
        <div className="overflow-scroll scrollbar-hide">
          {data.startDate && (
            <DayButton
              startDate={data.startDate}
              dayCount={dayCalculation}
              dayTitle={setDayTitle}
              setIndex={setIndex}
            />
          )}
        </div>
        <p className="text-center text-[14px] font-bold mb-[26px]">{dayTitle}</p>
        <div className="mb-[60px]">
          {dayClickedSchedulesData() && (
            <ContentItem
              key={index}
              schedulesData={dayClickedSchedulesData()}
              distancesData={distancesData()}
              distanceIndex={index}
            />
          )}
        </div>
        <div className="mx-[24px] mb-[60px]">
          <div className="flex gap-[6px] mb-[16px]">
            {/* 프로필 사진 넣는곳 */}
            <div className="w-[40px] h-[40px] rounded-full border border-gray-4"></div>
            <div className="flex flex-col">
              <p className="text-[12px] text-gray-2">{createData}</p>
              <p className="text-[14px] font-bold">{nicknameData()}님의 여행 한마디</p>
            </div>
          </div>
          <div className="w-full bg-input rounded-[4px] text-[14px] p-[8px] break-all">{data.reviewText}</div>
        </div>
        <div className="w-full flex flex-col gap-[6px] justify-center pb-[60px] px-[24px]">
          <Button type={'default'} text={'description'}>
            수정하기
          </Button>
          <Button type={'red'} text={'description'}>
            삭제하기
          </Button>
        </div>
      </div>
    </ModalContext.Provider>
  );
}
