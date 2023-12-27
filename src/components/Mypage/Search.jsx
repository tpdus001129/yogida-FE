import PropTypes from 'prop-types';

import { IoSearchOutline, IoReloadOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { TRAVEL_DESTINATION } from '../../constants';
import { useEffect, useState } from 'react';
import Title from '../Filter/Title';
import Button from '../commons/Button';
import { scrollToTop } from '../../utils/scrollToTop';
import { convertToHangulJamo } from '../../utils/convertToHangulJamo';
import { TAGS } from '../../constants';
import toast from 'react-hot-toast';

export function SearchTravelDestination({ handleDestinationClick, onClose }) {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="w-full">
      <Header title={'검색'} onClick={onClose} />
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]">
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-4 placeholder:text-gray-1"
          type="text"
          placeholder="여행, 어디로 떠나시나요?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>

      <ul className="w-full px-[24px]">
        {TRAVEL_DESTINATION.filter((destination) => convertToHangulJamo(destination).includes(keyword)).map((item) => (
          <li key={item}>
            <DestinationItem name={item} onClick={() => handleDestinationClick(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SearchPlace({ onClose }) {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  // const [map, setMap] = useState();

  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data);
      }
    });
  }, [keyword]);

  return (
    <div className="w-full">
      <Header title={'검색'} onClick={onClose} />
      {/* 검색 */}
      <form className="w-full h-[74px] flex relative items-center px-[24px]" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full h-[48px] pl-[20px] rounded-[24px] focus:outline-none bg-gray-4 placeholder-gray-1 placeholder-opacity-100"
          type="text"
          placeholder="장소를 검색해보세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="absolute right-[40px] top-[35%]" type="submit">
          <IoSearchOutline size="22" />
        </button>
      </form>

      {places?.length === 0 && <p className="text-center text-gray-1 text-[14px] mt-[20px]">검색어 내역이 없습니다.</p>}
      {places?.length !== 0 && (
        <ul className="w-full px-[24px]">
          {places?.map((place) => (
            <li key={place?.id}>
              <PlaceItem {...place} keyword={keyword} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SelectTag({ tag, handleTagsClick, onClose }) {
  // 체크된 값을 담을 배열
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    if (tag && tag?.length !== 0) {
      setCheckedList(tag);
    }
  }, [tag]);

  // 배열에 값 넣기
  function checkedValue(value) {
    setCheckedList((prevList) => {
      // 선택된 값이 있으면 해당 값을 해제(배열에서 삭제)
      if (prevList.includes(value)) {
        return prevList.filter((item) => item !== value);
      }

      // 길이가 5미만이면 값을 배열에 추가
      if (prevList.length < 5) {
        return [...prevList, value];
      }
      toast('태그는 최대 5개까지 선택할 수 있습니다.', {
        icon: '👏',
      });

      // 길이가 5를 넘으면 이전 값 유지
      return [...prevList];
    });
  }

  // 필터 초기화
  function filterResetHandler() {
    setCheckedList([]);
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <Header title={'태그 선택'} onClick={onClose} />
        {/* 필터초기화 */}
        <div className="mx-[24px]">
          <div className="flex justify-end">
            <button className="flex items-center text-primary" onClick={filterResetHandler}>
              <span className="mr-[2px] text-[12px]">필터 초기화</span>
              <IoReloadOutline size="12" />
            </button>
          </div>
          {/* 필터 */}
          <div>
            {TAGS?.map((item, index) => (
              <div key={item.title + index}>
                <Title title={item.title} />
                <div className="flex flex-wrap gap-[4px]">
                  {item.contents.map((content, innerIndex) => (
                    <span key={innerIndex}>
                      <input
                        type="checkbox"
                        id={`${item.title}-${innerIndex}`}
                        value={content}
                        className="hidden"
                        onClick={(e) => checkedValue(e.target.value)}
                      />
                      <label
                        htmlFor={`${item.title}-${innerIndex}`}
                        className={`inline-block bg-opacity-30 text-center rounded-[20px] px-[16px] py-[10px] cursor-pointer text-[14px] ${
                          checkedList && checkedList.includes(content)
                            ? 'bg-primary text-primary font-bold'
                            : 'bg-gray-3 text-gray-3 font-bold'
                        }`}
                      >
                        {content}
                      </label>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-[11px] px-[24px] w-full pb-[24px]">
          <Button type="primary" onClick={() => handleTagsClick(checkedList)}>
            태그 선택하기
          </Button>
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

function DestinationItem({ name, onClick }) {
  return (
    <div className="flex items-center justify-between py-4">
      <strong>{name}</strong>
      <button className="bg-gray-4 text-sm px-3 py-1 rounded-2xl" onClick={onClick}>
        선택
      </button>
    </div>
  );
}

function PlaceItem({ keyword, place_name, category_name, address_name, onClick }) {
  const category = category_name?.split(' > ').slice(0, 2).join('>');
  const address = address_name?.split(' ').slice(0, 2).join(' ');
  const name = place_name?.split(keyword);
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-col gap-1">
        <span>
          {name[0]}
          {name?.length !== 1 && <strong className="text-primary">{keyword}</strong>}
          {name[1]}
        </span>
        <span className="text-xs text-gray-2 tracking-tight">
          {category} · {address}
        </span>
      </div>
      <button className="bg-gray-4 text-sm px-3 py-1 rounded-2xl" onClick={onClick}>
        선택
      </button>
    </div>
  );
}

SearchPlace.propTypes = {
  onClose: PropTypes.func.isRequired,
};
SearchTravelDestination.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleDestinationClick: PropTypes.func,
};
SelectTag.propTypes = {
  tag: PropTypes.array,
  onClose: PropTypes.func.isRequired,
  handleTagsClick: PropTypes.func,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
DestinationItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
PlaceItem.propTypes = {
  place_name: PropTypes.string,
  category_name: PropTypes.string,
  address_name: PropTypes.string,
  onClick: PropTypes.func,
  keyword: PropTypes.string,
};
