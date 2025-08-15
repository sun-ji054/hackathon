import React from "react";
import InputBox from "./InputBox";
import {useInfoStore} from "../store";
import { FormStyle2 } from "./FormStyle";


function SignUpForm() {
  const {name, email, password, phoneNum, setName, setEmail, setPassword, setPhoneNum} = useInfoStore();


  return(
    <div>
          <p style={{marginLeft: "24px"}}>기본정보</p>
          <FormStyle2>
            <InputBox
            inputType={"text"} value={name} placeholder={"이름"} onchange={(e)=>setName(e.target.value)}>
            </InputBox>
            <InputBox inputType={"email"} value={email} placeholder={"이메일"} onchange={(e)=>setEmail(e.target.value)}>
            </InputBox>
            <InputBox inputType={"password"} value={password} placeholder={"비밀번호"} onchange={(e)=>setPassword(e.target.value)}>
            </InputBox>
            <InputBox inputType={"tel"} value={phoneNum} placeholder={"전화번호"} onchange={(e)=>setPhoneNum(e.target.value)}>
            </InputBox>
          </FormStyle2>
    </div>
  );
}

export default SignUpForm;