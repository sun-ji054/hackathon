import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import { Link } from "react-router-dom";
import loginTopImg from "../assets/icons/LoginTopImg.png";

const Logo = styled.img`
  width: 100%;
  height: auto;
`
const SignUp = styled.p`
  display: inline-block;
  font: 14px;
  font-weight: light;
  -webkit-text-fill-color: #8B6A55;
  border-bottom: 1px solid #8B6A55;
  margin-bottom: 30px;
`

function LoginPage(){
  
  return(
    <div style={{backgroundColor:'#FCFAF7', height: '100vh', overflowY:'auto'}}>
      <Logo src={loginTopImg} alt="로고" />
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