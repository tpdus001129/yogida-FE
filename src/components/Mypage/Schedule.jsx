import { useNavigate } from 'react-router';
import logo from '/logo.svg';
import { IoChevronBack } from 'react-icons/io5';
import { IoCalendarClear } from 'react-icons/io5';
import { IoDocumentText } from 'react-icons/io5';
import { IoLocationSharp } from 'react-icons/io5';
import { IoAccessibility } from 'react-icons/io5';
import { IoWallet } from 'react-icons/io5';
import { IoBagRemove } from 'react-icons/io5';
import { IoMap } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import { IoPricetag } from 'react-icons/io5';
import ScheduleItem from './ScheduleItem';
import DayButton from '../Detail/DayButton';
import Button from '../commons/Button';
import { IoCamera } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { getTags } from '../../services/tags';
import Title from '../Filter/Title';
import CheckBox from '../Filter/CheckBox';

export default function Schedule() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getTags()
      .then((tags) => {
        setData(tags);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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
        <ScheduleItem icon={<IoCalendarClear color="#589BF7" size={20} />} title="날짜" id="date">
          <input
            type="text"
            name="date"
            id="date"
            className="w-full focus:outline-none text-[14px] font-medium placeholder:text-[14px]"
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
            />
            <span className="text-[10px]">4/20</span>
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
          ></textarea>
        </ScheduleItem>
        <ScheduleItem icon={<IoLocationSharp color="#589BF7" size={20} />} title="여행지" id="place">
          <input
            type="text"
            name="place"
            id="place"
            className="w-full focus:outline-none text-[14px] font-medium placeholder:text-[14px]"
          />
        </ScheduleItem>
        <ScheduleItem icon={<IoAccessibility color="#589BF7" size={20} />} title="인원수" id="count">
          <input
            type="number"
            name="count"
            id="count"
            defaultValue={0}
            className="w-full focus:outline-none text-[14px] font-medium text-right placeholder:text-[14px]"
          />
        </ScheduleItem>
        <ScheduleItem icon={<IoWallet color="#589BF7" size={20} />} title="예산" id="budget">
          <input
            type="number"
            name="budget"
            id="budget"
            defaultValue={0}
            className="w-full focus:outline-none text-[14px] font-medium text-right placeholder:text-[14px]"
          />
        </ScheduleItem>
        <ScheduleItem
          icon={<IoBagRemove color="#589BF7" size={20} />}
          title="게시글 공개 여분"
          id="secret"
          width={'w-[80%]'}
        >
          <div className="flex items-center justify-end gap-[20px] w-full">
            <label htmlFor="show" className="flex items-center gap-[10px] text-[12px]">
              <input type="radio" name="secret" id="show" className="w-[20px] h-[20px]" />
              공개
            </label>

            <label htmlFor="hidden" className="flex items-center gap-[10px] text-[12px]">
              <input type="radio" name="secret" id="hidden" className="w-[20px] h-[20px]" />
              비공개
            </label>
          </div>
        </ScheduleItem>
        <ScheduleItem icon={<IoMap color="#589BF7" size={20} />} title="코스 등록" id="map"></ScheduleItem>
      </ul>

      <div className="overflow-scroll mb-[30px]">
        <DayButton />
      </div>

      <section className="px-[26px] pb-[16px]">
        <Button
          width={'w-full'}
          textColor={'text-black'}
          bgColor={'bg-white'}
          borderColor={'border-primary'}
          fontSize={'text-[14px]'}
        >
          장소 추가
        </Button>

        <ul className="mt-5 flex flex-col gap-5">
          <li>
            <div className="w-full bg-[#ffffff] rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="h-[43px] flex justify-between items-center mx-[16px] rounded-t-[20px]">
                <div className="flex">
                  <p className="text-[14px] mr-[4px] font-bold">안목해변</p>
                  <p className="text-[12px] mt-[2px] line-height-[14px]">관광명소</p>
                </div>
              </div>
              <div className="h-[120px] rounded-b-[20px] bg-[#d9d9d9] overflow-hidden flex items-center justify-center">
                <button className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                  <IoCamera size={24} color="white" />
                </button>
              </div>
            </div>
          </li>
        </ul>
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

      {/* 필터 */}
      <section className="px-[26px] pb-[16px]">
        <div className="mb-7">
          {data.map((item, index) => (
            <div key={index}>
              <Title title={item.title} />
              <CheckBox tag={item.name} checked={checked} setChecked={setChecked} />
            </div>
          ))}
        </div>
        <Button type={'submit'} width={'w-full'}>
          작성완료
        </Button>
      </section>
    </>
  );
}
