import React, { useState } from "react";
import styled from "styled-components";
import { useLocationStore } from "../store";

const SearchFormStyle = styled.form`
  display: block;
  background-color: pink;
  width: 80%;
  height: 30px;
`;

const SearchBtnStyle = styled.button`
  background-color: red;
  width: 30px;
  height: 30px;
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
      <input
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
