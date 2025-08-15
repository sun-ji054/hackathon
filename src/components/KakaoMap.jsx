import React from "react";
import styled from "styled-components"; 
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

const MapStoreName = styled.button`
  display: flex;
  text-align: center;
  border-radius: 8px;
  background-color: #F2592A;
  -webkit-text-fill-color: white;
  padding: 3px 5px;
  font-size: small;
`

function KakaoMap({ center }) {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
    libraries: ["services", "clusterer"],
  });

  if (error)
    return <div>지도 로딩 중 오류 발생: {error.message}</div>;
  if (loading) return <div>지도 로딩 중...</div>;

  return (
    <Map center={center} style={{ width: "100%", height: "100%" }} level={3}>
      <MapMarker position={center}>
        <MapStoreName>검색 위치</MapStoreName>
      </MapMarker>
    </Map>
  );
}

export default KakaoMap;
