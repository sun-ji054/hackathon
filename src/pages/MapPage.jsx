import React, { useState } from "react";
import KakaoMap from "../components/KakaoMap";
import MapSearch from "../components/MapSearch";

function MapPage() {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 }); // 제주도 기본 위치

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapSearch onSearch={setCenter} />
      <KakaoMap center={center} />
    </div>
  );
}

export default MapPage;
