import React from "react";
import InputBox from "./inputBox";
import useInfoStore from "../store";

function InputForm(){
  const { email, password, setEmail, setPassword } = useInfoStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("성공")
    } catch{
      console.log("실패")
    }
  } 

  return(
    <form onSubmit={handleLogin}>
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
    </form>
  );
}

export default InputForm;