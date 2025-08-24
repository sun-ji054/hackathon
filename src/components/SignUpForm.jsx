import React from "react";
import InputBox from "./InputBox";
import {userInfoStore} from "../store/userInfoStore";
import { FormStyle3, Subheading } from "./FormStyle";


function SignUpForm() {
  const {username, phone, setUsername, setPhone} = userInfoStore();


  return(
    <div>
          <Subheading>기본 정보</Subheading>
          <FormStyle3>
            <InputBox
            inputType={"text"} value={username} placeholder={"이름"} onChange={(e)=>setUsername(e.target.value)}>
            </InputBox>
            <InputBox inputType={"tel"} value={phone} placeholder={"전화번호"} onChange={(e)=>setPhone(e.target.value)}>
            </InputBox>
          </FormStyle3>
    </div>
  );
}

export default SignUpForm;