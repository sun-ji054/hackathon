import React from "react";
import InputBox from "./InputBox";
import InputSubmit from "./InputSubmit";
import {userInfoStore} from "../store/userInfoStore";
import { FormStyle2,FormNameStyle } from "./FormStyle";
import { useNavigate } from "react-router-dom"
import {login} from "../api/AuthApi";

function LoginForm(){
  const { identifier, password, setIdentifier , setPassword } = userInfoStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login();
    if (response) {
      alert("로그인 성공");
      navigate("/home");
    } else {
      alert("로그인 실패");
    }
  };

  return(
    <>
    <FormNameStyle>로그인</FormNameStyle>
    <FormStyle2 onSubmit={handleLogin}>
        <InputBox
          inputType={"text"} 
          value={identifier} 
          placeholder={"아이디나 닉네임을 입력하세요"}
          onChange={(e) => setIdentifier(e.target.value)}>
        </InputBox>
        <InputBox 
          inputType={"password"} 
          value={password} 
          placeholder={"비밀번호를 입력하세요"}
          onChange={(e) => setPassword(e.target.value)}>
        </InputBox>
        <InputSubmit submitName={"로그인"}></InputSubmit>
    </FormStyle2>
    </>
  );
}

export default LoginForm;