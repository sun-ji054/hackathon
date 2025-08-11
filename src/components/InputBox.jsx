import React from "react";
import styled from "styled-components";

const InputBoxStyle = styled.input`
  display: flex;
  margin: 1rem ;
  
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