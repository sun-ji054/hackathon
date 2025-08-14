import React from "react";
import styled from "styled-components";

const SubmitStyle = styled.input`
  display: inline-block;
  width: 370px;
  height: 55px;
  margin: 9px 0;
  border: 1px solid #969696;
  border-radius: 10px;
  background-color: #DFDFDF;
  margin-top: 40px;
`

function InputSubmit({submitName}){
  return(
    <SubmitStyle type="submit" value={submitName}></SubmitStyle>
  );
}

export default InputSubmit;