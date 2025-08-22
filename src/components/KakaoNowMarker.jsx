import React, {useEffect} from "react";

function KakaoNowMarker({map}){
  useEffect(() => {
    if (!map) return;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) =>{
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const locPosition = new window.kakao.maps.LatLng(lat, lon);
      
      const content = `
        <div style="
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #F2592A;
          border: 3px solid #FFB8A2;
          box-sizing: border-box;
          box-shadow: 0 0 8px #FFC800;"></div>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        position: locPosition,
          content: content,
          yAnchor: 1,
      });

      overlay.setMap(map);
      map.setCenter(locPosition);
    }); 
  } else {
     const locPosition = new kakao.maps.LatLng(37.597788, 127.057779);

     const content = `
        <div style="
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #F2592A;
          border: 3px solid #FFB8A2;
          box-sizing: border-box;
          box-shadow: 0 0 8px #FFC800;"></div>
      `;

     const overlay = new window.kakao.maps.CustomOverlay({
        position: locPosition,
        content: content,
        yAnchor: 1,
      });

      overlay.setMap(map);
      map.setCenter(locPosition);
    }
  }, [map]);

  return null;
}
export default KakaoNowMarker;