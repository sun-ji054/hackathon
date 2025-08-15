import React from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

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
        <div style={{ padding: "5px", color: "#000" }}>검색 위치</div>
      </MapMarker>
    </Map>
  );
}

export default KakaoMap;
