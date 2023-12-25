import { useState, useEffect } from 'react';

import Header from '../components/Search/Header';
import Title from '../components/Filter/Title';
import CheckBox from '../components/Filter/CheckBox';

import { getTags } from '../services/tags';

import { IoReloadOutline } from 'react-icons/io5';

export default function Filter() {
  const [data, setData] = useState([]);
  const close = true;

  const [checked, setChecked] = useState(false);

  function resetHandler() {
    setChecked(false);
  }

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
    <div>
      <Header title={'필터'} close={close} />
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
    </div>
  );
}
