import React from "react";
import styled from "styled-components";

const SubmitStyle = styled.input`
  display: inline-block;
  width: 190px;
  height: 48px;
  border-radius: 8px;
  background-color: #8B6A55;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 600;
  -webkit-text-fill-color: white;
`

function MyPageSubmit({submitName}){
  return(
    <SubmitStyle type="submit" value={submitName}></SubmitStyle>
  );
}

export default MyPageSubmit;