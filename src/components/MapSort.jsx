import React from "react";
import styled from "styled-components";

const MapSortStyle = styled.button`
  display: inline-block;
  height: 25px;
  border-radius: 20px;
  background-color: #DFDFDF;
  border-color: #969696;
  border-width: 1px;
  padding: 2px 7px 3px 7px;
  font-size: small;
  margin-right: 6px;
`

function MapSort(){
  return(
    <div>
      <MapSortStyle>저장된 쿠폰이 있는 곳</MapSortStyle>
      <MapSortStyle>카페</MapSortStyle>
      <MapSortStyle>브런치</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
    </div>
  );
}

export default MapSort;