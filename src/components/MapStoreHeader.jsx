import React from "react";
import styled from "styled-components";
import DongBox from "./DongBox";

const MapStoreStyle = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  background-color:#FCF9F7;
  margin-bottom: 5px;
`

function MapStoreHeader(){
  return(
    <MapStoreStyle>
      <DongBox></DongBox>
    </MapStoreStyle>
  );
}

export default MapStoreHeader;

/**
 * todo DongBox에 동 선택 후 regionBox 자동으로 닫기는 기능 만들기
 */