import LocationMap from '../components/KakaoMaps/LocationMap';
import Header from '../components/Login/Header';

export default function Map() {
  return (
    <div className="w-screen h-screen ">
      <div className="absolute z-20">
        <Header place={'안목해변'} category={'관광명소'} />
      </div>
      <LocationMap />
    </div>
  );
}
