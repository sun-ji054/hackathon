import React, { useEffect, useRef, useState } from "react";
import KaKaoStore from "./KaKaoStore";
import { useMapStore } from "../store/useMapStore";
import { useCouponStore } from "../store/useCouponStore";
import KakaoMarker from "./KaKaoMarker";
import KakaoNowMarker from "./KakaoNowMarker";

function KakaoMap({ center }) {
  const mapRef = useRef(null);
  const { selectedStore, setSelectedStore } = useMapStore();
  const { coupons, fetchCoupons } = useCouponStore();
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
  }, []);

  useEffect(() => {
  if (map) {
    const moveLatLng = new window.kakao.maps.LatLng(center.lat, center.lng);
    map.panTo(moveLatLng); // 부드럽게 이동
  }
}, [center, map]);

  // 쿠폰 데이터 가져오기
  useEffect(() => {
    fetchCoupons();
  },[fetchCoupons]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />

      {/* 마커 렌더링 */}
      {map &&
        coupons.map((coupon) => {
          const store = {
            ...coupon,
            id: coupon.id,
            name: coupon.place.name,
            position: {
              lat: parseFloat(coupon.place.lat),
              lng: parseFloat(coupon.place.lng),
            },
          };
          return (
            <KakaoMarker
              key={store.id}
              map={map}
              store={store}
              isActive={selectedStore?.id === store.id}
              onClick={setSelectedStore}
            />
          );
        })}

      {map && <KakaoNowMarker map={map} />}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <KaKaoStore />
      </div>
    </div>
  );
}

export default KakaoMap;
