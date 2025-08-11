import React from "react";
import InputBox from "./inputBox";
import InputSubmit from "./InputSubmit";
import useInfoStore from "../store";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const FormStyle = styled.form`
  display: flex;
  width: 50vw;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
`
const FormStyle2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function InputForm(){
  const { email, password, setEmail, setPassword } = useInfoStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("성공")
      alert('로그인 성공')
      // navigate('/home')
    } catch{
      console.log("실패")
    }
  } 

  return(
    <FormStyle2>
      <FormStyle onSubmit={handleLogin}>
        <p>로그인</p>
        <InputBox
          inputType={"email"} 
          value={email} 
          placeholder={"이메일"}
          onchange={(e) => setEmail(e.target.value)}>
        </InputBox>
        <InputBox 
          inputType={"password"} 
          value={password} 
          placeholder={"비밀번호"}
          onchange={(e) => setPassword(e.target.value)}>
        </InputBox>
        <InputSubmit submitName={"로그인"}></InputSubmit>
      </FormStyle>
    </FormStyle2>
  );
}

export default InputForm;