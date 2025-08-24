import React, { useState } from "react";
import KakaoMap from "../components/KakaoMap";
import MapSearch from "../components/MapSearch";
import MapListBtn from "../components/MapListBtn";
import MapSort from "../components/MapSort";
import styled from "styled-components";
import BottomNav from "../components/HomeBottomNav";
import { useMapStore } from "../store/useMapStore";

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
  z-index: 100;
`

function MapPage() {
  const [center, setCenter] = useState({ lat: 37.6042, lng: 127.0635  }); // 한국외대
  const { setSelectedStore } = useMapStore();

   // 검색 시 호출될 함수
  const handleSearchResult = (place, coupon) => {
    // 지도 중심 이동
    setCenter({ lat: parseFloat(place.y), lng: parseFloat(place.x) });
    // 선택된 가게 저장 → KaKaoStore 표시
    if (coupon) {
      setSelectedStore(coupon);
    }
  };

  return (
    <MapContainer>
      <SearchWrapper>
        <MapSearch onSearch={handleSearchResult} />
        <MapListBtn />
      </SearchWrapper>
      <MapSortWrapper>
        <MapSort />
      </MapSortWrapper>
      <KakaoMap center={center} />
      <BottomNav />
    </MapContainer>
  );
}

export default MapPage;
