import React from "react";
// import styled from "styled-components";
import OnboardBtn from "./OnboardBtn";

function OnboardHeader() {
  return(
    /**
     * @todo div style-components 만들어서 감싸기
     */
    <div>
      <p>Logo</p>
      <OnboardBtn btnName={'로그인'} page="loginPage"></OnboardBtn>
      <OnboardBtn btnName={'회원가입'} page="signUpPage"></OnboardBtn>
    </div>
  );
}

export default OnboardHeader;