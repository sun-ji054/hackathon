import React, { useState } from "react";
import KakaoMap from "../components/KakaoMap";
import MapSearch from "../components/MapSearch";
import MapListBtn from "../components/MapListBtn";
import MapSort from "../components/MapSort";
import styled from "styled-components";

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 23px;
  z-index: 100;

  display: flex;
  align-items: center;
`;

const MapSortWrapper = styled.div`
  position: absolute;
  top: 93px;
  left: 23px;
  width: 95%;
  z-index: 100;
  white-space: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }

`

function MapPage() {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 }); // 제주도 기본 위치

  const handleWheel = (e) => {
     e.currentTarget.scrollBy({
    left: e.deltaY,
    behavior: "smooth",
  });
  };

  return (
    <MapContainer>
      <SearchWrapper>
      <MapSearch onSearch={setCenter} />
      <MapListBtn></MapListBtn>
      </SearchWrapper>
      <MapSortWrapper onWheel={handleWheel}>
        <MapSort></MapSort>
      </MapSortWrapper>
      <KakaoMap center={center} />

    </MapContainer>
  );
}

export default MapPage;
