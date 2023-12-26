import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

export default function LocationMap() {
  // function mapHandleClick() {
  //   const latlng = mouseEvent.latLng;
  //   const getLat = 37.54699;
  //   const getLng = 127.09598;

  //   // Kakao Map 검색 URL
  //   // const searchURL = `https://map.kakao.com/link/search/${latitude},${longitude}`;

  //   window.open(searchURL, '_blank');
  // }

  return (
    <>
      <Map
        center={{
          // 지도의 중심좌표
          lat: 37.54699,
          lng: 127.09598,
        }}
        className="w-full h-full"
        level={4} // 지도의 확대 레벨
      >
        <MapMarker
          position={{ lat: 37.54699, lng: 127.09598 }}
          image={{
            // 마커이미지 주소
            src: 'https://ifh.cc/g/vGy0l6.png',
            size: {
              width: 45,
              height: 53,
            }, // 마커이미지의 크기
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
            },
          }}
        />
        <CustomOverlayMap position={{ lat: 37.54699, lng: 127.09598 }} yAnchor={1} className="relative">
          <div>
            <a href="handleClick()" target="_blank" rel="noreferrer">
              <div className="w-[45px] h-[53px] flex justify-center items-center ml-[-9px] mt-[-75px]">
                <span className="text-[20px] text-white">1</span>
              </div>
            </a>
          </div>
        </CustomOverlayMap>
      </Map>
    </>
  );
}
