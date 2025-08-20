import React from "react";
import { useLocationStore } from "../store/locationStore";
import { FormStyle2, FormNameStyle, SelectStyle } from "./FormStyle";
import styled from "styled-components";


function RegionBox({SelectComponent = "select", FormComponent = "form"}) {
  const {
    provinceList,
    cityList,
    districtList,
    province,
    city,
    district,
    selectProvince,
    selectCity,
    selectDistrict,
  } = useLocationStore();

  return (
    <>
      <FormComponent>
        {/* 시/도 선택 */}
          <SelectComponent value={province} onChange={(e) => selectProvince(e.target.value)}>
          <option value="">시/도 선택</option>
          {provinceList.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
          </SelectComponent>

        {/* 구/군/시 선택 */}
        <SelectComponent
          value={city}
          onChange={(e) => selectCity(e.target.value)}
          disabled={!province}
        >
          <option value="">구/군 선택</option>
          {cityList.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </SelectComponent>

        {/* 동/읍/면 선택 */}
        <SelectComponent
          value={district}
          onChange={(e) => selectDistrict(e.target.value)}
          disabled={!city}
        >
          <option value="">동/읍/면 선택</option>
          {districtList.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </SelectComponent>
      </FormComponent>
    </>
  );
}

export default RegionBox;
