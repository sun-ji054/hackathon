import React from "react";
import styled from "styled-components";

const InputBoxStyle = styled.input`
  display: inline-block;
  width: 370px;
  height: 53px;
  margin: 9px 0;
  padding-left: 10px;
  border: 1px solid #B8B8B8;
  border-radius: 14px;
`

function InputBox({inputType, placeholder, value, onChange}) {


  return(
    <InputBoxStyle
      type={inputType}
      placeholder={placeholder} 
      value={value}
      onChange={onChange}>

    </InputBoxStyle>
  );
}

export default InputBox;