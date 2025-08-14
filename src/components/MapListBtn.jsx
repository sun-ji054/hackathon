import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MapListBtnStyle = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-left: 10px;
  border-radius: 50%;
  border-width: 1px;
  border-color: #969696;
  background-color: #DFDFDF;
`

function MapListBtn(){
  return(
    <MapListBtnStyle><Link to="/MapListPage">≡</Link></MapListBtnStyle>
  );
}

export default MapListBtn;