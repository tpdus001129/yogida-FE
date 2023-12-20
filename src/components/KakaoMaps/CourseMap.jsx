import { Map, MapMarker, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';

export default function CourseMap() {
  // 마커 여러개 표시 배열
  // const positions = [
  //   {
  //     title: '카카오',
  //     latlng: { lat: 33.450705, lng: 126.570677 },
  //   },
  //   {
  //     title: '생태연못',
  //     latlng: { lat: 33.450936, lng: 126.569477 },
  //   },
  //   {
  //     title: '텃밭',
  //     latlng: { lat: 33.450879, lng: 126.56994 },
  //   },
  //   {
  //     title: '근린공원',
  //     latlng: { lat: 33.451393, lng: 126.570738 },
  //   },
  // ];

  return (
    <Map
      center={{
        // 지도의 중심좌표
        lat: 37.54699,
        lng: 127.09598,
      }}
      className="w-full h-full"
      level={4} // 지도의 확대 레벨
    >
      <Polyline
        path={[
          [
            { lat: 37.54699, lng: 127.09598 },
            { lat: 37.55155166956004, lng: 127.08359680098087 },
          ],
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={'#FB6363'} // 선의 색깔입니다
        strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={'dashed'} // 선의 스타일입니다
      />

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
          <a href="https://map.kakao.com/link/map/11394059" target="_blank" rel="noreferrer">
            <div className="w-[45px] h-[53px] flex justify-center items-center ml-[-9px] mt-[-75px]">
              <span className="text-[20px] text-white">1</span>
            </div>
          </a>
        </div>
      </CustomOverlayMap>

      <MapMarker
        position={{ lat: 37.55155166956004, lng: 127.08359680098087 }}
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
      <CustomOverlayMap position={{ lat: 37.55155166956004, lng: 127.08359680098087 }} yAnchor={1} className="relative">
        <div>
          <a href="https://map.kakao.com/link/map/11394059" target="_blank" rel="noreferrer">
            <div className="w-[45px] h-[53px] flex justify-center items-center ml-[-9px] mt-[-75px]">
              <span className="text-[20px] text-white">2</span>
            </div>
          </a>
        </div>
      </CustomOverlayMap>
    </Map>
  );
}
