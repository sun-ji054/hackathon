import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OnboardBtn from "./OnboardBtn";

const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
`

function OnboardHeader() {
  return(
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <Link
                    to="/"
                    className="inline-flex items-center justify-center w-16 h-10 border rounded-lg font-semibold"
                >
                    logo
                </Link>
      <ButtonGroup>
        <OnboardBtn btnName={'로그인'} page="loginPage"></OnboardBtn>
        <OnboardBtn btnName={'회원가입'} page="signUpPage"></OnboardBtn>
      </ButtonGroup>
      </div>
    </header>
  );
}

export default OnboardHeader;

// const OnboardHeaderStyle = styled.header`
//   display: flex;
//   align-items: center;
//   padding: 0 1rem;
//   background-color: blue;
// `
// const Logo = styled.p`
//   font-size: xx-large;
//   line-height: 1;
//   margin: 0;
// `
