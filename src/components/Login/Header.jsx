import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full h-header bg-white text-center fixed top-0 left-0 flex items-center">
      <IoChevronBack size={'32px'} className="pl-2 cursor-pointer" onClick={() => navigate(-1)} />
    </header>
  );
}
