import React, { useState } from "react";
import KakaoMap from "../components/KakaoMap";
import MapSearch from "../components/MapSearch";
import MapListBtn from "../components/MapListBtn";
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

function MapPage() {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 }); // 제주도 기본 위치

  return (
    <MapContainer>
      <SearchWrapper>
      <MapSearch onSearch={setCenter} />
      <MapListBtn></MapListBtn>
      </SearchWrapper>
      <KakaoMap center={center} />

    </MapContainer>
  );
}

export default MapPage;
