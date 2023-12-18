import { IoClose } from 'react-icons/io5';

export default function SearchList() {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p>강원 정선</p>
          <button>
            <IoClose />
          </button>
        </div>
        <hr className="w-full absolute bottom-0 border-gray-1" />
      </div>
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p>강원도</p>
          <button>
            <IoClose />
          </button>
        </div>
        <hr className="w-full absolute bottom-0 border-gray-1" />
      </div>
    </div>
  );
}
