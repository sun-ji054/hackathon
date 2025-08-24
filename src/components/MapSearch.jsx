import React, { useState } from "react";
import styled from "styled-components";
import { useLocationStore } from "../store";

import search from "../assets/icons/Search.png";

const SearchFormStyle = styled.form`
  display: flex;
  background-color: white;
  width: 329px;
  height: 52px;
  align-items: center;
  border-radius: 25px;
  border: 2px solid #DCDCDC;
  box-shadow: 0 4px 8px 0 #00000040;
`;

const SearchInputStyle = styled.input`
  display: inline-block;
  width: 263px;
  height: 39px;
  margin-left: 17px;
  outline: none;
  -webkit-text-fill-color: #8B6A55;
  font-size: 16px;
  font-weight: 400;
  z-index: 1;
`

const SearchBtnStyle = styled.button`
  display: flex;
  background-color: #F2592A;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

function MapSearch({ onSearch }) {
  const { location, setLocation } = useLocationStore();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!window.kakao) {
      console.error("Kakao maps SDK not loaded");
      return;
    }
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(location, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const place = data[0];
        onSearch({
          lat: parseFloat(place.y),
          lng: parseFloat(place.x),
        });
      } else {
        console.log("검색 결과가 없습니다.");
      }
    });
  };

  return (
    <SearchFormStyle id="mapSearch" onSubmit={handleSearch}>
      <SearchInputStyle
        type="text"
        placeholder="가게를 검색해보세요"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <SearchBtnStyle type="submit">
        <img src={search} alt="검색" ></img>
      </SearchBtnStyle>
    </SearchFormStyle>
  );
}

export default MapSearch;
