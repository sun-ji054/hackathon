import React from "react";
import InputBox from "./InputBox";
import {userInfoStore} from "../store/userInfoStore";
import { FormStyle3, Subheading } from "./FormStyle";


function SignUpForm2() {
  const { email, password, setEmail, setPassword} = userInfoStore();


  return(
    <div>
          <Subheading>계정 정보</Subheading>
          <FormStyle3>
            <InputBox inputType={"email"} value={email} placeholder={"아이디/영문자, 숫자 가능(6~20자)"} onChange={(e)=>setEmail(e.target.value)}>
            </InputBox>
            <InputBox inputType={"password"} value={password} placeholder={"비밀번호/문자,숫자,특수문자 포함 8~20자"} onChange={(e)=>setPassword(e.target.value)}>
            </InputBox>
          </FormStyle3>
    </div>
  );
}

export default SignUpForm2;