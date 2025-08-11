import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OnboardBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: gray;
  font-size: 0.9rem;
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