import { IoClose } from 'react-icons/io5';

export default function SearchItem() {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[52px] flex justify-between items-center px-[24px]">
          <p>keyword</p>
          <button>
            <IoClose />
          </button>
        </div>
        <hr className="w-full absolute bottom-0 border-gray-1" />
      </div>
    </div>
  );
}
