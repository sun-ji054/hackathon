import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import SignUpForm2 from "../components/SignUpForm2";
import SignUpBack from "../components/SignUpBack";
import RegionBox from "../components/RegionBox";
import { FormNameStyle2, CenterStyle, SelectStyle, FormStyle3, Subheading, Subheading2 } from "../components/FormStyle";

import InputSubmit from "../components/InputSubmit";
import { signUp } from "../api/AuthApi";
import styled from "styled-components";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp();
      if(result){
        alert("회원가입 성공");
        navigate("/");
      } else {
        alert("회원가입 실패");
      }
    } catch (err) {
      console.error(err);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return(
    <>

      <div style={{backgroundColor:'#FCFAF7', height: '100%', overflowY: "auto" }}>
        <SignUpBack></SignUpBack>
        <FormNameStyle2>회원가입</FormNameStyle2>
        <form onSubmit={handleSignUp}>
          <SignUpForm></SignUpForm>
          <SignUpForm2></SignUpForm2>
          <Subheading2>자주 가는 지역 선택</Subheading2>
          <RegionBox SelectComponent={SelectStyle} FormComponent={FormStyle3}></RegionBox>
          <CenterStyle>
            <InputSubmit submitName={"가입하기"}></InputSubmit>
          </CenterStyle>
        </form>
      </div>
    </>
  );
}


export default SignUpPage;