import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import OnboardHeader from "../components/OnboardHeader";
import RegionBox from "../components/RegionBox";
import { FormNameStyle,CenterStyle, SelectStyle, FormStyle2 } from "../components/FormStyle";
import SignUpConsent from "../components/SignUpConsent";
import InputSubmit from "../components/InputSubmit";

function SignUpPage() {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("성공")
      alert('회원가입 성공')
      navigate('/loginPage')
    } catch{
      console.log("실패")
    }
  } 

  return(
    <>
      <OnboardHeader></OnboardHeader>
      <div style={{height:"640px", overflowY: "auto" }}>
        <FormNameStyle>회원가입</FormNameStyle>
        <div onSubmit={handleLogin}>
          <SignUpForm></SignUpForm>
          <p style={{marginLeft: "24px", marginBottom: "7px"}}>자주 가는 지역 선택</p>
          <RegionBox SelectComponent={SelectStyle} FormComponent={FormStyle2}></RegionBox>
          <SignUpConsent></SignUpConsent>
          <CenterStyle>
            <InputSubmit submitName={"회원가입"}></InputSubmit>
          </CenterStyle>
        </div>
      </div>
    </>
  );
}


export default SignUpPage;