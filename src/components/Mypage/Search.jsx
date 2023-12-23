import PropTypes from 'prop-types';

import { IoSearchOutline, IoReloadOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { TRAVEL_DESTINATION } from '../../constants';
import { useEffect, useState } from 'react';
import { getTags } from '../../services/tags';
import Title from '../Filter/Title';
import CheckBox from '../Filter/CheckBox';
import Button from '../commons/Button';

export function SearchTravelDestination({ onClose }) {
  return (
    <div className="w-full">
      <Header title={'검색'} onClick={onClose} />
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]">
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-3 opacity-30 placeholder:text-gray-1"
          type="text"
          placeholder="여행, 어디로 떠나시나요?"
        />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>

      <ul className="w-full px-[24px]">
        {TRAVEL_DESTINATION.map((item) => (
          <li key={item}>
            <DestinationItem name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SearchPlace({ onClose }) {
  return (
    <div className="w-full">
      <Header title={'검색'} onClick={onClose} />
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]">
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-3 opacity-30 placeholder-gray-1 placeholder-opacity-100"
          type="text"
          placeholder="장소를 검색해보세요."
        />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>

      <p className="text-center text-gray-1 text-[14px] mt-[20px]">최근 검색어 내역이 없습니다.</p>
    </div>
  );
}

export function SelectTag({ onClose }) {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  function resetHandler() {
    setChecked(false);
  }

  useEffect(() => {
    getTags()
      .then((tags) => {
        tags.shift();
        setData(tags);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <Header title={'태그 선택'} onClick={onClose} />
        {/* 필터초기화 */}
        <div className="mx-[24px]">
          <div className="flex justify-end">
            <button className="flex items-center text-primary" onClick={resetHandler}>
              <span className="mr-[2px] text-[12px]">필터 초기화</span>
              <IoReloadOutline size="12" />
            </button>
          </div>
          {/* 필터 */}
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <Title title={item.title} />
                <CheckBox tag={item.name} checked={checked} setChecked={setChecked} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-[11px] px-[24px] w-full">
          <Button type="primary">태그 선택하기</Button>
        </div>
      </div>
    </>
  );
}

function Header({ title, onClick }) {
  return (
    <div className="w-full h-[56px] flex items-center justify-center px-[24px]">
      <p className="w-full h-full flex items-center justify-center">{title}</p>
      {close && <IoClose size="24px" onClick={onClick} />}
    </div>
  );
}

function DestinationItem({ name }) {
  return (
    <div className="flex items-center justify-between py-4">
      <strong>{name}</strong>
      <button className="bg-gray-4 text-sm px-3 py-1 rounded-2xl">선택</button>
    </div>
  );
}

SearchPlace.propTypes = {
  onClose: PropTypes.func.isRequired,
};
SearchTravelDestination.propTypes = {
  onClose: PropTypes.func.isRequired,
};
SelectTag.propTypes = {
  onClose: PropTypes.func.isRequired,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
DestinationItem.propTypes = {
  name: PropTypes.string.isRequired,
};
