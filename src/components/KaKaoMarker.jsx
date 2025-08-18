import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";

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

    // React 컴포넌트를 HTML string으로 변환
    // 카카오맵 api의 CustomOverlay는 html 요소만 받을 수 있기 때문
    const content = ReactDOMServer.renderToString(
      <MarkerBox>{store.name}</MarkerBox>
    );

    //커스텀 오버레이를 어디에 어떻게 붙일지 정하는 옵션
    const overlay = new window.kakao.maps.CustomOverlay({
      position: new window.kakao.maps.LatLng(
        store.position.lat,
        store.position.lng
      ), //오버레이를 놓을 좌표
      content: content, //오버레이에 그릴 html
      yAnchor: 1, //position과 맞닿을 content 내부의 세로 기준 점, 1 = 맨아래
      map: map, //이 오버레이를 어느 지도에 표시할 지
      clickable: true,
    });

    // 클릭 이벤트 연결
    window.kakao.maps.event.addListener(overlay, "click", () => {
      setActive(true);
      if (onClick) onClick(store); //클릭 이벤트 일어나면 
    });

    // useEffect에서 return하는 함수를 cleanup
    //컴포넌트 언마운트되거나 의존성 배열([map, store, onClick])이 바뀔 때 이전 effect를 정리할 용도로 호출
    return () => {
      overlay.setMap(null); //customoverlay를 지도에서 제거
                            //컴포넌트 사라질 때 지도 위 마커도 제거
                            //안하면 map, store, onClick 재실행 될 때마다 겹쳐서 표시되니까
    };
  }, [map, store, onClick]); //저 안에 값이 바뀔 때만 재실행

  return null; // 실제 DOM은 없음
}

export default KakaoMarker;