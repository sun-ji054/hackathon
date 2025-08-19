import React, { useEffect } from "react";
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
  }

   &.active {
    background-color: white;
    color: #F2592A;
    border: 2px solid #F2592A;
  }
`;

function KakaoMarker({ map, store, isActive, onClick }) {
  
  useEffect(() => {
  if (!map || !window.kakao) return;

  const markerId = `marker-${store.id}`;
  const overlay = new window.kakao.maps.CustomOverlay({
    position: new window.kakao.maps.LatLng(store.position.lat, store.position.lng),
    yAnchor: 1,
    map,
    clickable: true,
  });

  const updateContent = () => {
    const content = ReactDOMServer.renderToString(
      <MarkerBox id={markerId} className={isActive ? "active" : ""}>
        {store.name}
      </MarkerBox>
    );
    overlay.setContent(content);
  };

  updateContent(); // 처음 content 설정

  setTimeout(() => {
    const el = document.getElementById(markerId);
    if (el) {
      el.addEventListener("click", () => {
        if (onClick) onClick(store);
      });
    }
  }, 0);

  return () => overlay.setMap(null);
}, [map, store, onClick, isActive]);


}

export default KakaoMarker;