import { useNavigate } from 'react-router';
import logo from '/logo.svg';
import { IoChevronBack } from 'react-icons/io5';

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full top-0 border-[#E8E8E8] border-b-[1px]">
        <header className="w-full h-header bg-white text-center flex items-center">
          <IoChevronBack size={32} className="pl-2 cursor-pointer justify-self-start" onClick={() => navigate(-1)} />
          <div className="border w-full flex items-center gap-[8px]">
            <h1 className="text-[18px] font-bold">여기다 글쓰기</h1>
            <img src={logo} alt="logo" />
          </div>
        </header>
      </section>
    </>
  );
}
