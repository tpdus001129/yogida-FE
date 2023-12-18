import { useState } from 'react';

const dummy = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6'];

export default function DayButton() {
  const [selectedDay, setSelectedDay] = useState('day1');

  function handleButtonClick(day) {
    setSelectedDay(day);
  }

  return (
    <div className="flex ml-[24px] w-full">
      {dummy.map((day) => (
        <button
          key={day}
          className={`w-[74px] h-[36px] rounded-full ${
            day === selectedDay ? 'bg-primary text-[#ffffff]' : 'bg-[#ffffff] border border-primary'
          } flex-shrink-0 flex justify-center items-center text-[14px] font-bold mr-[9px]`}
          onClick={() => handleButtonClick(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}
