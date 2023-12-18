import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className="w-full h-[64px] flex justify-center items-center">
      <img src={logo} alt="여기다" className="w-[30px]" />
    </div>
  );
}
