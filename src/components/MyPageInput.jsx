import React from "react";
import styled from "styled-components";

const InputBoxStyle = styled.input`
  display: inline-block;
  width: 86%;
  height: 50px;
  margin: 1px 0;
  padding-left: 10px;
  border: 1px solid #DCDCDC;
  border-radius: 14px;
`

function MyPageInput({inputType, placeholder, value, onChange}) {


  return(
    <InputBoxStyle
      type={inputType}
      placeholder={placeholder} 
      value={value}
      onChange={onChange}>

    </InputBoxStyle>
  );
}

export default MyPageInput;