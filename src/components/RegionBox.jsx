import React from "react";
import {useRegionStore} from "../store";
import { FormStyle } from "./FormStyle";

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
    <FormStyle>
      {/* 시/도 선택 */}
      <select value={sido} onChange={(e) => selectSido(e.target.value)}>
        <option value="">시/도 선택</option>
        {sidoList.map((sido) => (
          <option key={sido} value={sido}>
            {sido}
          </option>
        ))}
      </select>

      {/* 구/군/시 선택 */}
      <select
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
      </select>

      {/* 동/읍/면 선택 */}
      <select
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
      </select>
    </FormStyle>
  );
}

export default RegionBox;
