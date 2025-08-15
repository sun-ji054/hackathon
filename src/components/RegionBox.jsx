import React from "react";
import {useRegionStore} from "../store";
import { FormStyle2, FormNameStyle, SelectStyle } from "./FormStyle";
import styled from "styled-components";


function RegionBox({SelectComponent = "select", FormComponent = "form"}) {
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
      <FormComponent>
        {/* 시/도 선택 */}
          <SelectComponent value={sido} onChange={(e) => selectSido(e.target.value)}>
          <option value="">시/도 선택</option>
          {sidoList.map((sido) => (
            <option key={sido} value={sido}>
              {sido}
            </option>
          ))}
          </SelectComponent>

        {/* 구/군/시 선택 */}
        <SelectComponent
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
        </SelectComponent>

        {/* 동/읍/면 선택 */}
        <SelectComponent
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
        </SelectComponent>
      </FormComponent>
    </>
  );
}

export default RegionBox;
