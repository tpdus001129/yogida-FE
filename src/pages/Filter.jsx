import toast from 'react-hot-toast';
import Header from '../components/Filter/Header.jsx';
import Title from '../components/Filter/Title';
import Button from '../components/commons/Button';
import FILTER_CATEGORIES from '../constants/filterCategories.js';

import { IoReloadOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const sortArray = ['최신순', '오래된순', '찜많은순'];
const initialCheckList = ['최신순'];
export default function Filter() {
  //  체크된 값을 담을 배열
  const [checkedList, setCheckedList] = useState(initialCheckList);
  const [sort, setSort] = useState('최신순');
  // 태그 상태 추가
  const [tag, setTag] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();

  // 배열에 값 넣기
  function handleCheckboxChange(value) {
    if (sortArray.includes(value)) {
      setSort(value);
      setCheckedList((prevList) => {
        return [value, ...prevList.filter((item) => !sortArray.includes(item))];
      });
    } else {
      if (checkedList.includes(value)) {
        setCheckedList((prevList) => prevList.filter((item) => item !== value));
        setTag((prevTag) => prevTag.filter((item) => item !== value)); // 태그 상태 업데이트
      } else {
        if (tag.length >= 5) {
          toast.error('필터의 갯수는 최대 5개 입니다.');
          return;
        }
        setCheckedList((prevList) => [...prevList, value]);
        if (!sortArray.includes(value)) {
          setTag((prevTag) => [...prevTag, value]); // 태그 상태 업데이트
        }
      }
    }
  }

  // 필터 초기화
  function filterResetHandler() {
    setCheckedList(initialCheckList);
    setSort('최신순');
  }

  function testSubmit() {
    const searchQuery = location.state ? `/search?city=${location.state}` : '';
    const tagQuery = location.state ? '&tag=' + tag.toString() : '/filter?tag=' + tag.toString();
    const sortQuery = location.state ? '&sort=' + sort : '/filter?sort=' + sort;

    let query = '';

    if (tag.length > 0) {
      query += tagQuery;
    }
    console.log(searchQuery + query + sortQuery);

    navigate(searchQuery + query + sortQuery);
  }

  return (
    <>
      <Header title={'필터'} />
      <div className="mx-[24px]">
        <section>
          <div className="flex justify-end">
            <button className="flex items-center text-primary" onClick={filterResetHandler}>
              <p className="mr-[2px] text-[12px]">필터 초기화</p>
              <IoReloadOutline size="12" />
            </button>
          </div>
          <section>
            {FILTER_CATEGORIES.map((item, outerIndex) => (
              <div key={outerIndex} className="mb-[20px]">
                <Title title={item.title} className="mb-[32px]" />
                <div className="flex flex-wrap gap-[4px]">
                  {item.contents.map((content, innerIndex) => (
                    <span key={innerIndex}>
                      <input
                        type="checkbox"
                        id={`${item.title}-${innerIndex}`}
                        value={content}
                        className="hidden"
                        onClick={(e) => handleCheckboxChange(e.target.value)}
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
          </section>
          <section className="mt-[30px]">
            <Button type={checkedList ? 'primary' : 'gray'} text={'description'} onClick={testSubmit}>
              필터 적용하기
            </Button>
          </section>
        </section>
      </div>
    </>
  );
}
