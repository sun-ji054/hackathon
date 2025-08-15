import React from "react";
import RegionBox from "./RegionBox";
import styled from "styled-components";

const MapStoreStyle = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  background-color:#FCF9F7;
`

function MapStoreHeader(){
  return(
    <MapStoreStyle>
      <RegionBox></RegionBox>
    </MapStoreStyle>
  );
}

export default MapStoreHeader;