import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import DayButton from '../Detail/DayButton';
import Button from '../commons/Button';
import Tag from '../commons/Tag';
import logo from '/logo.svg';

import {
  IoChevronBack,
  IoCalendarClear,
  IoDocumentText,
  IoLocationSharp,
  IoAccessibility,
  IoWallet,
  IoBagRemove,
  IoMap,
  IoStar,
  IoStarOutline,
  IoPricetag,
} from 'react-icons/io5';
import { SearchPlace, SearchTravelDestination, SelectTag } from './Search';
// import { useMypagePostsQuery } from '../../pages/mypage/queries';
// import toast from 'react-hot-toast';
// import { PATH } from '../../constants/path';
import useDayCalculation from '../../hooks/useDayCalculation';
import ScheduleCalendar from './Calendar';
import useModal from '../../hooks/useModal';
import { convertSimpleDate } from '../../utils/convertSimpleDate';
import Course from './Course';

// import { Map, MapMarker, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';

let count = 0;
export default function Schedule() {
  console.log('render', count++);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const [addTravelDestination, setAddTravelDestination] = useState(false); //여행지 설정
  const [addPlan, setAddPlan] = useState(false); //장소 추가
  const [addTag, setAddTag] = useState(false); //태그 선택

  // const { addPost } = useMypagePostsQuery();

  const [startDate, setStartDate] = useState(null); //시작 날짜
  const [endDate, setEndDate] = useState(null); //종료 날짜
  const [title, setTitle] = useState(''); // 제목
  const titleSize = useMemo(() => title.length, [title]); //제목 길이
  const reviewTextRef = useRef(); // 간단 리뷰
  const [destination, setDestination] = useState(''); // 여행지
  const peopleCountRef = useRef(); //인원수
  const costRef = useRef(); //예산
  const [isPublic, setIsPublic] = useState('true'); //게시글 공개 여부
  const [schedules, setSchedules] = useState([]); // 코스 등록
  const [tag, setTag] = useState([]); //태그
  // const distancesRef = useRef(); //거리

  const [dayTitle, setDayTitle] = useState('');
  const [selectDay, setSelectDay] = useState(0); //선택한 day

  // 날짜 계산기 커스텀 훅 사용
  const dayCalculation = useDayCalculation(startDate, endDate);

  // const [info, setInfo] = useState();
  // const [markers, setMarkers] = useState([]);
  // const [map, setMap] = useState();

  useEffect(() => {
    if (startDate && endDate && dayCalculation > 0) {
      console.log('render');
      const days = Array.from(Array(Math.ceil(dayCalculation)), () => new Array());
      setSchedules(days);
    }
  }, [dayCalculation, startDate, endDate]);

  // day별 장소 추가
  const handleSingleScheduleClick = (option) => {
    const singleSchedule = {
      id: option?.id,
      placeName: option?.place_name,
      placeImageSrc: '',
      star: 0,
      category: option?.category,
      placePosition: [Number(option?.x), Number(option?.y)],
    };

    setSchedules((prev) => prev.map((day, i) => (selectDay === i ? [...day, singleSchedule] : day)));
  };
  console.log('schedules:', schedules);

  // 장소 이미지 추가
  const handleAddPlaceImgClick = ({ id, img }) => {
    console.log('id', id);
    setSchedules((prev) =>
      prev.map((day, i) =>
        selectDay === i ? day.map((place) => (place?.id === id ? { ...place, placeImageSrc: img } : place)) : day,
      ),
    );
  };

  const handleDestinationClick = (text) => {
    setDestination(text);
    setAddTravelDestination(false);
  };

  const handleTagsClick = (tags) => {
    setAddTag(false);
    setTag(tags);
  };

  const onSubmit = async () => {
    console.log('submit : ');

    // const result = await addPost();
    // if (result?.status === 200) {
    //   toast.success('게시글이 등록되었습니다.');
    //   // URL.revokeObjectURL(img);

    //   navigate(`${PATH.post}/${result?._id}`);
    // }
  };

  const onTempSave = () => {
    console.log('Temp save : ');
  };

  //여행지 검색
  if (addTravelDestination)
    return (
      <SearchTravelDestination
        handleDestinationClick={handleDestinationClick}
        onClose={() => setAddTravelDestination(false)}
      />
    );
  //장소 검색
  if (addPlan)
    return <SearchPlace handleSingleScheduleClick={handleSingleScheduleClick} onClose={() => setAddPlan(false)} />;
  //태그 선택
  if (addTag) return <SelectTag tag={tag} handleTagsClick={handleTagsClick} onClose={() => setAddTag(false)} />;

  return (
    <>
      <section className="w-full top-0 border-[#E8E8E8] border-b-[1px]">
        <header className="w-full h-header bg-white flex items-center">
          <IoChevronBack size={32} className="pl-2 cursor-pointer" onClick={() => navigate(-1)} />
          <h1 className="flex gap-[8px] mx-auto font-bold text-[18px]">
            여기다 글쓰기
            <img src={logo} alt="logo" className="w-[20px]" />
          </h1>
        </header>
      </section>
      <ul role="list">
        <ScheduleItem
          icon={<IoCalendarClear color="#589BF7" size={20} />}
          title="날짜"
          id="date"
          onClick={() =>
            openModal({
              message: <ScheduleCalendar setStartDate={setStartDate} setEndDate={setEndDate} />,
              type: 'calendar',
            })
          }
        >
          <input
            type="text"
            name="date"
            id="date"
            className="w-full focus:outline-none text-[14px] font-medium placeholder:text-[14px]"
            value={startDate && endDate ? `${convertSimpleDate(startDate)} ~ ${convertSimpleDate(endDate)}` : ''}
            readOnly
          />
        </ScheduleItem>

        <ScheduleItem icon={<IoDocumentText color="#589BF7" size={20} />} title="제목" id="title">
          <>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full focus:outline-none text-[14px] font-medium placeholder:text-[14px]"
              placeholder="제목을 입력해 주세요."
              value={title}
              maxLength={20}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <span className="text-[10px]">{titleSize}/20</span>
          </>
        </ScheduleItem>
        <ScheduleItem id="review" width={'w-[0%]'}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="내용을 입력해 주세요."
            className="w-full focus:outline-none text-[14px] font-medium placeholder:text-[14px]"
            ref={reviewTextRef}
          ></textarea>
        </ScheduleItem>
        <ScheduleItem
          icon={<IoLocationSharp color="#589BF7" size={20} />}
          title="여행지"
          id="place"
          onClick={() => setAddTravelDestination(true)}
        >
          <input
            type="text"
            name="place"
            id="place"
            className="w-full focus:outline-none text-[14px] font-medium text-right bg-white placeholder:text-[14px]"
            value={destination}
            readOnly
          />
        </ScheduleItem>
        <ScheduleItem icon={<IoAccessibility color="#589BF7" size={20} />} title="인원수" id="count">
          <input
            type="number"
            name="count"
            id="count"
            defaultValue={0}
            className="w-full focus:outline-none text-[14px] font-medium text-right placeholder:text-[14px]"
            ref={peopleCountRef}
          />
        </ScheduleItem>
        <ScheduleItem icon={<IoWallet color="#589BF7" size={20} />} title="예산" id="budget">
          <input
            type="number"
            name="budget"
            id="budget"
            defaultValue={0}
            className="w-full focus:outline-none text-[14px] font-medium text-right placeholder:text-[14px]"
            ref={costRef}
          />
        </ScheduleItem>
        <ScheduleItem
          icon={<IoBagRemove color="#589BF7" size={20} />}
          title="게시글 공개 여부"
          id="secret"
          width={'w-[80%]'}
        >
          <div className="flex items-center justify-end gap-[20px] w-full">
            <label htmlFor="show" className="flex items-center gap-[10px] text-[12px]">
              <input
                type="radio"
                name="secret"
                id="show"
                className="w-[20px] h-[20px]"
                value={'true'}
                checked={isPublic === 'true'}
                onChange={(e) => setIsPublic(e.target.value)}
              />
              공개
            </label>

            <label htmlFor="hidden" className="flex items-center gap-[10px] text-[12px]">
              <input
                type="radio"
                name="secret"
                id="hidden"
                className="w-[20px] h-[20px]"
                value={'false'}
                checked={isPublic === 'false'}
                onChange={(e) => setIsPublic(e.target.value)}
              />
              비공개
            </label>
          </div>
        </ScheduleItem>
        <ScheduleItem icon={<IoMap color="#589BF7" size={20} />} title="코스 등록" id="map"></ScheduleItem>

        {/* <Map
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: '100%',
            height: '350px',
          }}
          level={3}
          onCreate={setMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
            </MapMarker>
          ))}
        </Map> */}
      </ul>

      {!startDate && !endDate && (
        <section className="px-[26px] pb-[16px] text-primary font-bold opacity-60 ">
          날짜(여행 일정)를 먼저 선택해 주세요!
        </section>
      )}

      {startDate && endDate && (
        <>
          <div className="overflow-scroll  scrollbar-hide">
            <DayButton startDate={startDate} dayCount={dayCalculation} dayTitle={setDayTitle} setIndex={setSelectDay} />
          </div>
          <p className="text-center text-[14px] font-bold mb-[30px]">{dayTitle}</p>

          <section className="px-[26px] pb-[16px]">
            <Button onClick={() => setAddPlan(true)}>장소 추가</Button>

            <Course
              schedules={schedules[selectDay]}
              selectDay={selectDay}
              handleAddPlaceImgClick={handleAddPlaceImgClick}
            />
            {/* <ul className="mt-5 flex flex-col gap-5">
              {schedules[index]?.map((schedule) => (
                <li key={schedule?.id}>
                  <Card {...schedule} handleAddPlaceImgClick={handleAddPlaceImgClick} />
                </li>
              ))}
            </ul> */}
          </section>
          <ul role="list">
            <ScheduleItem icon={<IoStar color="#589BF7" size={20} />} title="나의 평점" id="stars">
              <div className="flex gap-1">
                <IoStarOutline size={20} color="#FFDB5F" />
                <IoStarOutline size={20} color="#FFDB5F" />
                <IoStarOutline size={20} color="#FFDB5F" />
                <IoStarOutline size={20} color="#FFDB5F" />
                <IoStarOutline size={20} color="#FFDB5F" />
              </div>
            </ScheduleItem>
            <ScheduleItem icon={<IoPricetag color="#589BF7" size={20} />} title="태그" id="tag"></ScheduleItem>
          </ul>
        </>
      )}

      {/* 필터 */}
      <section className="px-[26px] pb-[16px]">
        <Button onClick={() => setAddTag(true)}>태그 선택하기</Button>
        <div className="mb-7 mt-4">
          {tag && tag?.length !== 0 ? (
            <Tag tags={tag} />
          ) : (
            <span className="text-primary font-bold opacity-60 ">태그를 선택해주세요!</span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button type={'secondary'} onClick={onTempSave}>
            임시저장
          </Button>
          <Button type={'primary'} onClick={onSubmit}>
            작성완료
          </Button>
        </div>
      </section>
    </>
  );
}

function ScheduleItem({ icon, title, id, width, children, onClick }) {
  const getWidth = width ? width : 'w-[40%]';

  return (
    <li
      className="border-[#E8E8E8] border-b-[1px] px-[26px] py-[16px] flex items-center justify-between last:border-b-0"
      onClick={onClick}
    >
      <label htmlFor={id} className={`flex items-center gap-[10px] ${getWidth}`}>
        {icon}
        <strong className="text-[12px] font-semibold">{title}</strong>
      </label>
      <div className="flex items-center w-full gap-[2px]">{children}</div>
    </li>
  );
}

// function Card(props) {
//   const { id, category, placeName, placeImageSrc, handleAddPlaceImgClick } = props;
//   const imgRef = useRef(null);

//   console.log('Card id : ', id);
//   const handleChangeImage = (e) => {
//     if (!e.target.files) {
//       return;
//     }
//     const fileInput = e.target.files[0];
//     const url = URL.createObjectURL(fileInput);

//     handleAddPlaceImgClick({ id, img: url });
//   };

//   return (
//     <div className="w-full bg-[#ffffff] rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
//       <div className="h-[43px] flex justify-between items-center mx-[16px] rounded-t-[20px]">
//         <div className="flex">
//           <p className="text-[14px] mr-[4px] font-bold">{placeName || ''}</p>
//           <p className="text-[12px] mt-[2px] line-height-[14px]">{category || ''}</p>
//         </div>
//       </div>
//       <label
//         htmlFor="placeImg"
//         className="h-[130px] rounded-b-[20px] bg-[#d9d9d9] overflow-hidden flex items-center justify-center"
//       >
//         {placeImageSrc && <img src={placeImageSrc} alt="place-img" />}
//         {!placeImageSrc && (
//           <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center" type="button">
//             <IoCamera size={24} color="white" />
//           </span>
//         )}
//         <input type="file" name="placeImg" id="placeImg" className="hidden" ref={imgRef} onChange={handleChangeImage} />
//       </label>
//     </div>
//   );
// }

ScheduleItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

// Card.propTypes = {
//   category: PropTypes.string,
//   placeName: PropTypes.string,
//   placeImageSrc: PropTypes.string,
//   handleAddPlaceImgClick: PropTypes.func,
//   id: PropTypes.string,
// };
