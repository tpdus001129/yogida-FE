import PropTypes from 'prop-types';

import Header from '../components/Search/Header';
import Title from '../components/Filter/Title';
import Button from '../components/commons/Button';
import FilterCategory from '../components/Filter/FilterCategory';

import { IoReloadOutline } from 'react-icons/io5';

export default function Filter({ filterModeOff, checkedValue, makeQueryString, checkedList, setCheckedList }) {
  const close = true;

  // 필터 초기화
  function filterResetHandler() {
    setCheckedList([]);
  }

  return (
    <>
      <Header title={'필터'} close={close} filterModeOff={filterModeOff} />
      <div className="mx-[24px]">
        <section>
          <div className="flex justify-end">
            <button className="flex items-center text-primary" onClick={filterResetHandler}>
              <p className="mr-[2px] text-[12px]">필터 초기화</p>
              <IoReloadOutline size="12" />
            </button>
          </div>
          <section>
            {FilterCategory.map((item, outerIndex) => (
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
          </section>
          <section className="mt-[30px]">
            <Button
              type={checkedList ? 'primary' : 'gray'}
              text={'description'}
              onClick={(e) => {
                e.preventDefault();
                if (checkedList) {
                  makeQueryString();
                } else {
                  return;
                }
              }}
            >
              필터 적용하기
            </Button>
          </section>
        </section>
      </div>
    </>
  );
}

Filter.propTypes = {
  filterModeOff: PropTypes.func,
  handleCheckList: PropTypes.func,
  makeQueryString: PropTypes.func,
  checkedList: PropTypes.array,
  checkedValue: PropTypes.func,
  setCheckedList: PropTypes.func,
};
