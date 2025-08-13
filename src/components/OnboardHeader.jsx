import React from "react";
import styled from "styled-components";
import OnboardBtn from "./OnboardBtn";

const OnboardHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: blue;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
`
const Logo = styled.p`
  font-size: xx-large;
  line-height: 1;
  margin: 0;
`

function OnboardHeader() {
  return(
    <OnboardHeaderStyle>
      <Logo>Logo</Logo>
      <ButtonGroup>
        <OnboardBtn btnName={'로그인'} page="loginPage"></OnboardBtn>
        <OnboardBtn btnName={'회원가입'} page="signUpPage"></OnboardBtn>
      </ButtonGroup>
    </OnboardHeaderStyle>
  );
}

export default OnboardHeader;
