import React from "react";
import InputBox from "./InputBox";
import InputSubmit from "./InputSubmit";
import {useInfoStore} from "../store";
import { FormStyle2, FormNameStyle } from "./FormStyle";
import { useNavigate } from "react-router-dom"

function LoginForm(){
  const { email, password, setEmail, setPassword } = useInfoStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("성공")
      alert('로그인 성공')
      navigate('/home')
    } catch{
      console.log("실패")
    }
  } 

  return(
    <>
    <FormNameStyle>로그인</FormNameStyle>
    <FormStyle2 onSubmit={handleLogin}>
        <InputBox
          inputType={"email"} 
          value={email} 
          placeholder={"아이디나 닉네임을 입력하세요"}
          onchange={(e) => setEmail(e.target.value)}>
        </InputBox>
        <InputBox 
          inputType={"password"} 
          value={password} 
          placeholder={"비밀번호를 입력하세요"}
          onchange={(e) => setPassword(e.target.value)}>
        </InputBox>
        <InputSubmit submitName={"로그인"}></InputSubmit>
    </FormStyle2>
    </>
  );
}

export default LoginForm;