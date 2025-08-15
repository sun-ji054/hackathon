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
const MapSortWrapper = styled.div`
  position: absolute;
  top: 93px;
  left: 23px;
  width: 95%;
  z-index: 100;
  white-space: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`

function MapSort(){
  const handleWheel = (e) => {
     e.currentTarget.scrollBy({
    left: e.deltaY,
    behavior: "smooth",
  });
  };

  return(
    <MapSortWrapper onWheel={handleWheel}>
      <MapSortStyle>저장된 쿠폰이 있는 곳</MapSortStyle>
      <MapSortStyle>카페</MapSortStyle>
      <MapSortStyle>브런치</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
      <MapSortStyle>음식점</MapSortStyle>
    </MapSortWrapper>
  );
}

export default MapSort;