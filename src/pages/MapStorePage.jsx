import React from "react";
import MapSort from "../components/MapSort";
import MapStoreHeader from "../components/MapStoreHeader";
import HomeBottomNav from "../components/HomeBottomNav";
import MapStore from "../components/MapStore";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

const MapSortWrapper = styled.div`
  margin-top: 10px;
  margin-left: 23px;
  padding-bottom: 5px;
`

function MapStorePage(){
  return(
    <div style={{backgroundColor: '#FCFAF7', width: '100%', height:'100%'}}>
      <MapStoreHeader></MapStoreHeader>
      <SearchBar></SearchBar>
      <MapSortWrapper>
        <MapSort></MapSort>
      </MapSortWrapper>
      <div style={{flex: 1, overflowY: 'auto', height: '495px'}}>
        <MapStore></MapStore>
      </div>
      <HomeBottomNav></HomeBottomNav>
    </div>
  );
}

export default MapStorePage;