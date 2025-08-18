import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import KaKaoStore from "./KaKaoStore";
import { useMapStore } from "../store";

function KakaoMap({ center }) {
  const mapRef = useRef(null); /**{current: null} */
  const { setSelectedStore } = useMapStore();

  useEffect(() => {
    // 렌더링 될 때 실행되는 코드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAOMAP_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(center.lat, center.lng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 가게 데이터 예시
        const stores = [
          {
            id: 1,
            name: "🍔 햄버거 가게",
            desc: "맛있는 수제버거 전문점",
            position: { lat: center.lat, lng: center.lng },
          },
          {
            id: 2,
            name: "☕ 카페 B",
            desc: "아메리카노가 맛있는 카페",
            position: { lat: center.lat + 0.001, lng: center.lng + 0.001 },
          },
        ];


        stores.forEach((store) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              store.position.lat,
              store.position.lng
            ),
            map,
          });

          // 마커 클릭 이벤트
          window.kakao.maps.event.addListener(marker, "click", () => {
            setSelectedStore(store);
          });
        });
      });
    };

    document.head.appendChild(script);
  }, [center, setSelectedStore]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      <KaKaoStore></KaKaoStore>
    </div>
  );
}

export default KakaoMap;
