import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import list from '../assets/icons/List.png';

const MapListBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-left: 10px;
  border-radius: 50%;
  border-width: 2px;
  border-color: #F2592A;
  background-color: white;
`

function MapListBtn(){
  return(
      <Link to="/mapStore">
        <MapListBtnStyle>
          <img src={list} alt="list"></img>
        </MapListBtnStyle>
      </Link>
  );
}

export default MapListBtn;