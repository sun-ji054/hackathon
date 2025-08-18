import React from "react";
import styled from "styled-components";
import { useMapStore } from "../store";

const StoreInfoBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #ccc;
  padding: 12px;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.1);
  z-index: 100;
`;

function KaKaoStore(){
  const {selectedStore, clearSelectedStore } = useMapStore();

  if (!selectedStore) return null; //선택된 가게 없으면 렌더링 안 함

  return(
    <StoreInfoBox>
      <h3>{selectedStore.name}</h3>
      <p>{selectedStore.desc}</p>
      <p>위도: {selectedStore.position.lat}</p>
      <p>경도: {selectedStore.position.lng}</p>
      <button onClick={clearSelectedStore}>닫기</button>
    </StoreInfoBox>
  );
}

export default KaKaoStore;