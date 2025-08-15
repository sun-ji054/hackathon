import React, { useState } from "react";
import KakaoMap from "../components/KakaoMap";
import MapSearch from "../components/MapSearch";
import MapListBtn from "../components/MapListBtn";
import MapSort from "../components/MapSort";
import styled from "styled-components";
import HomeBottomNav from "../components/HomeBottomNav";

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
  const [center, setCenter] = useState({ lat: 37.6042, lng: 127.0635  }); // 한국외대

  return (
    <MapContainer>
      <SearchWrapper>
      <MapSearch onSearch={setCenter} />
      <MapListBtn></MapListBtn>
      </SearchWrapper>
      <MapSort></MapSort>
      <KakaoMap center={center} />
      <HomeBottomNav />

    </MapContainer>
  );
}

export default MapPage;
