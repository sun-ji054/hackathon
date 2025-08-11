import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OnboardBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: gray;
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