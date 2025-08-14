import React from "react";
import styled from "styled-components";

const InputBoxStyle = styled.input`
  display: inline-block;
  width: 370px;
  height: 55px;
  margin: 9px 0;
  padding-left: 10px;
  border: 1px dotted black;
`

function InputBox({inputType, placeholder, value, onchange}) {


  return(
    <InputBoxStyle
      type={inputType}
      placeholder={placeholder} 
      value={value}
      onChange={onchange}>

    </InputBoxStyle>
  );
}

export default InputBox;