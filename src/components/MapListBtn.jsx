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
  border-color: #F2592A;
  background-color: white;
`

function MapListBtn(){
  return(
    <MapListBtnStyle><Link to="/mapStorePage">≡</Link></MapListBtnStyle>
  );
}

export default MapListBtn;