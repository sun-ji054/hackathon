import React from "react";
import MapSort from "../components/MapSort";
import MapStoreHeader from "../components/MapStoreHeader";
import MapStore from "../components/MapStore";

function MapStorePage(){
  return(
    <div style={{backgroundColor: '#FCFAF7', width: '100%', height:'100%'}}>
      <MapStoreHeader></MapStoreHeader>
      <MapSort></MapSort>
      <MapStore></MapStore>
    </div>
  );
}

export default MapStorePage;

/**
 * todo 언니 검색 컴포넌트 받아서 헤더와 sort 사이에 넣기
 */