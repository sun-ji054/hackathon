import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  width: 100%;
  height: 360px;
  border-bottom: 1px dashed #CFCFCF;
`
const SignUp = styled.p`
  display: inline-block;
  font: 14px;
  font-weight: light;
  -webkit-text-fill-color: #8B6A55;
  border-bottom: 1px solid #8B6A55;
`

function LoginPage(){
  return(
    <div style={{backgroundColor:'#FCFAF7', height: '100%'}}>
      <Logo></Logo>
      <LoginForm></LoginForm>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Link to='/signUpPage'>
        <SignUp>회원가입하기</SignUp>
      </Link>
      </div>
    </div>
  );
}

export default LoginPage;