import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OnboardBtn from "./OnboardBtn";

const OnboardHeaderStyle = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #dfdfdf;
  padding: 0 20px;
`
const Logo = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 35px;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  font-size: medium;
  font-weight: 900;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
`


function OnboardHeader() {
  return(
    <OnboardHeaderStyle>
      <Logo><Link to="/">logo</Link></Logo>
      <ButtonGroup>
        <OnboardBtn btnName={'로그인'} page="loginPage"></OnboardBtn>
        <OnboardBtn btnName={'회원가입'} page="signUpPage"></OnboardBtn>
      </ButtonGroup>
    </OnboardHeaderStyle>
  );
}

export default OnboardHeader;