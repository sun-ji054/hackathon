import React from "react";
import InputBox from "./InputBox";
import {userInfoStore} from "../store/userInfoStore";
import { FormStyle3 } from "./FormStyle";


function SignUpForm() {
  const {username, email, password, phone, setUsername, setEmail, setPassword, setPhone} = userInfoStore();


  return(
    <div>
          <p style={{marginLeft: "24px"}}>기본정보</p>
          <FormStyle3>
            <InputBox
            inputType={"text"} value={username} placeholder={"이름"} onChange={(e)=>setUsername(e.target.value)}>
            </InputBox>
            <InputBox inputType={"email"} value={email} placeholder={"이메일"} onChange={(e)=>setEmail(e.target.value)}>
            </InputBox>
            <InputBox inputType={"password"} value={password} placeholder={"비밀번호"} onChange={(e)=>setPassword(e.target.value)}>
            </InputBox>
            <InputBox inputType={"tel"} value={phone} placeholder={"전화번호"} onChange={(e)=>setPhone(e.target.value)}>
            </InputBox>
          </FormStyle3>
    </div>
  );
}

export default SignUpForm;