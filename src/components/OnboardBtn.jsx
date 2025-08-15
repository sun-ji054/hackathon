import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OnboardBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #969696;
  padding: 7px 16px;
  margin-left: 10px;
  background-color: #DFDFDF;
  font-size: small;
`


function OnboardBtn({btnName, page}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${page}`)
  }

  return (
    <OnboardBtnStyle onClick={handleClick}>
      {btnName}
    </OnboardBtnStyle>
  );
}

export default OnboardBtn;