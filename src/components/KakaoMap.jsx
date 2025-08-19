import React, { useEffect, useRef, useState } from "react";
import KaKaoStore from "./KaKaoStore";
import { useMapStore } from "../store";
import KakaoMarker from "./KaKaoMarker";

function KakaoMap({ center }) {
  const mapRef = useRef(null);
  const { selectedStore, setSelectedStore } = useMapStore();
  const [map, setMap] = useState(null);

  // Kakao map 로딩
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAOMAP_KEY}&autoload=false`;
    script.async = true;

    //script가 완전히 로드됐을 때 실행되는 콜백함수
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current; //지도 그릴 html 가져오기
        const options = {
          center: new window.kakao.maps.LatLng(center.lat, center.lng),
          level: 3, //지도 초기화 할 때 설정할 옵션 객체
        };
        const createdMap = new window.kakao.maps.Map(container, options); //실제 지도 객체 생성. 위에서 만든 변수 쓰이네
        setMap(createdMap); //react state에 지도 저장
      });
    };

    document.head.appendChild(script); //script dom에 추가
  }, [center]); //center 바뀔 때 

  // 가게 데이터 예시
  const stores = [
    {
      id: 1,
      name: "도란도란곱창",
      desc: "맛있는 수제버거 전문점",
      position: { lat: center.lat, lng: center.lng },
    },
    {
      id: 2,
      name: "카페 B",
      desc: "아메리카노가 맛있는 카페",
      position: { lat: center.lat + 0.001, lng: center.lng + 0.001 },
    },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />

      {/* 마커 렌더링 */}
      {map &&
        stores.map((store) => (
          <KakaoMarker
            key={store.id}
            map={map}
            store={store}
            isActive={selectedStore?.id === store.id}
            onClick={setSelectedStore} //클릭하면 store가 클릭한 가게로 바뀜
          />
        ))}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <KaKaoStore />
      </div>
    </div>
  );
}

export default KakaoMap;
