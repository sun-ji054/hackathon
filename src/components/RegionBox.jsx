import React from "react";
import { FormStyle } from "./FormStyle";

function RegionBox(){
  return(
    <FormStyle>
      <label for="region">자주 가는 지역 선택</label>
      <select name="시/도" id="region">
       <option value="시/도">시/도</option>
    
    </select>
  </FormStyle>
  );
}

export default RegionBox;