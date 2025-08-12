import React from "react";
import InputBox from "./InputBox";
import useInfoStore from "../store";
import { useNavigate } from "react-router-dom";


function SignUpInfo() {
  const {name, email, password, phoneNum, setName, setEmail, setPassword, setPhoneNum} = useInfoStore();
  const navigate = useNavigate();

  return(
    <div>
      <div>
        <p>기본정보</p>
        <InputForm>
          <InputBox
            inputType={"text"} value={"name"} placeholder={"이름"} onchange={(e)=>setName(e.target.value)}>
          </InputBox>
          <InputBox inputType={"email"} value={"email"} placeholder={"이메일"} onchange={(e)=>setEmail(e.target.value)}>
          </InputBox>
          <InputBox inputType={"password"} value={"password"} placeholder={"비밀번호"} onchange={(e)=>setPassword(e.target.value)}>
          </InputBox>
          <InputBox inputType={"tel"} value={"phoneNum"} placeholder={"전화번호"} onchange={(e)=>setPhoneNum(e.target.value)}>
          </InputBox>
        </InputForm>
      </div>
    </div>
  );
}

export default SignUpInfo;