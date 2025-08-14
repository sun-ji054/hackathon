import React, { useState } from "react";
import styled from "styled-components";
import { useLocationStore } from "../store";

const SearchFormStyle = styled.form`
  display: flex;
  background-color: white;
  width: 312px;
  height: 52px;
  border-radius: 25px;
  border-style: dashed;
  border-width: 1px;
  border-color: black;
`;

const SearchInputStyle = styled.input`
  display: inline-block;
  width: 255px;
  height: 39px;
  margin-top: 5.5px;
  margin-left: 17px;
  -webkit-text-fill-color: #969696;
  outline: none;
  z-index: 1;
`

const SearchBtnStyle = styled.button`
  background-color: #DFDFDF;
  width: 53px;
  height: 39px;
  margin-top: 5.5px;
  margin-right: 5px;
  border-radius: 17px;
  border-color: #969696;
  border-width: 1px;
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
        placeholder="찾고 싶은 가게를 입력하세요."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <SearchBtnStyle type="submit">🔍</SearchBtnStyle>
    </SearchFormStyle>
  );
}

export default MapSearch;
