import React from "react";
import styled from "styled-components";

const SubmitStyle = styled.input`
  display: inline-block;
  width: 370px;
  height: 53px;
  border-radius: 11px;
  background-color: #F2592A;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bolder;
  -webkit-text-fill-color: white;
  cursor: pointer;
`

function InputSubmit({submitName}){
  return(
    <SubmitStyle type="submit" value={submitName}></SubmitStyle>
  );
}

export default InputSubmit;