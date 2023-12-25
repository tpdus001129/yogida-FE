import { Map, MapMarker, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';

import PropTypes from 'prop-types';

export default function CourseMap({ data }) {
  console.log(
    '여기는 위도 경도',
    // data.map((day) => day.map((place) => place.placePosition)),
  );

  console.log('지도에 필요한 정보', data);

  // 위도, 경도 데이터
  // const coordinateData = data.map((day) => day.map((place) => place.placePosition));

  // 지도 중심 좌표
  // const centerCoordinate = coordinateData[0][0];
  // console.log(centerCoordinate);

  return (
    <Map
      center={{
        // 지도의 중심좌표 첫번째 장소
        lat: 37.55155166956004,
        lng: 127.08359680098087,
      }}
      className="w-full h-full"
      level={6} // 지도의 확대 레벨
    >
      {/* {coordinateData.map((data, index) =>
        data.map((item) => ( */}
      <Polyline
        path={[
          [
            { lat: 37.55155166956004, lng: 127.08359680098087 },
            { lat: 37.55155166956004, lng: 127.08359680098087 },
          ],
        ]}
        strokeWeight={5} // 선 두께
        strokeColor={'#FB6363'} // 선 색깔
        strokeOpacity={1} // 선 불투명(1에서 0 사이의 값, 0에 가까울수록 투명)
        strokeStyle={'dashed'} // 선 스타일
      />
      {/* )),
      )} */}

      <MapMarker
        position={{ lat: 37.54699, lng: 127.09598 }}
        image={{
          // 마커이미지 주소
          src: 'https://ifh.cc/g/vGy0l6.png',
          size: {
            width: 45,
            height: 53,
          }, // 마커이미지 크기
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
      {/* 한쌍 */}

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

CourseMap.propTypes = {
  data: PropTypes.array,
};
