import React from "react";
import {useRegionStore} from "../store";
import { FormStyle2, FormNameStyle } from "./FormStyle";
import styled from "styled-components";

const SelectStyle = styled.select`
  display: inline-block;
  width: 370px;
  height: 55px;
  font-size: medium;
  margin-bottom: 10px;
  border: 1px solid black;
`

function RegionBox() {
  const {
    sidoList,
    gugunList,
    dongList,
    sido,
    gugun,
    dong,
    selectSido,
    selectGugun,
    selectDong,
  } = useRegionStore();

  return (
    <>
      <p style={{marginLeft: "24px"}}>자주 가는 지역 선택</p>
      <FormStyle2>
        {/* 시/도 선택 */}
        <SelectStyle value={sido} onChange={(e) => selectSido(e.target.value)}>
          <option value="">시/도 선택</option>
          {sidoList.map((sido) => (
            <option key={sido} value={sido}>
              {sido}
            </option>
          ))}
        </SelectStyle>

        {/* 구/군/시 선택 */}
        <SelectStyle
          value={gugun}
          onChange={(e) => selectGugun(e.target.value)}
          disabled={!sido}
        >
          <option value="">구/군 선택</option>
          {gugunList.map((gugun) => (
            <option key={gugun} value={gugun}>
              {gugun}
            </option>
          ))}
        </SelectStyle>

        {/* 동/읍/면 선택 */}
        <SelectStyle
          value={dong}
          onChange={(e) => selectDong(e.target.value)}
          disabled={!gugun}
        >
          <option value="">동/읍/면 선택</option>
          {dongList.map((dong) => (
            <option key={dong} value={dong}>
              {dong}
            </option>
          ))}
        </SelectStyle>
      </FormStyle2>
    </>
  );
}

export default RegionBox;
