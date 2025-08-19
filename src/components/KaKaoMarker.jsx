import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import KaKaoStore from "./KaKaoStore";

const MarkerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2592A;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 16px;
  box-shadow: 0 1px 6px #00000040;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    background: #ff4757;
  }
`;

function KakaoMarker({ map, store, onClick }) {
  
  useEffect(() => {
    if (!map || !window.kakao) return;

  const markerId = `marker-${store.id}`; // 고유 ID 생성
     // React → HTML 문자열 변환 + id 부여
    const content = ReactDOMServer.renderToString(
      <MarkerBox id={markerId}>{store.name}</MarkerBox>
    );


    // React 컴포넌트를 HTML string으로 변환
    // 카카오맵 api의 CustomOverlay는 html 요소만 받을 수 있기 때문
    // const content = ReactDOMServer.renderToString(
    //   <MarkerBox>{store.name}</MarkerBox>
    // );

    //커스텀 오버레이를 어디에 어떻게 붙일지 정하는 옵션
    const overlay = new window.kakao.maps.CustomOverlay({
      position: new window.kakao.maps.LatLng(
        store.position.lat,
        store.position.lng
      ), //오버레이를 놓을 좌표
      content, //오버레이에 그릴 html
      yAnchor: 1, //position과 맞닿을 content 내부의 세로 기준 점, 1 = 맨아래
      map, //이 오버레이를 어느 지도에 표시할 지
      clickable: true,
    });

     // 실제 DOM이 렌더링된 후 이벤트 바인딩
    setTimeout(() => {
      const el = document.getElementById(markerId);
      if (el) {
        el.addEventListener("click", () => {
          console.log("✅ marker clicked:", store);
          if (onClick) onClick(store);
        });
      } else {
    console.warn("❌ marker element not found:", markerId);
  }
    }, 0);

    return () => overlay.setMap(null);
  }, [map, store, onClick]);

  return null;
}

export default KakaoMarker;