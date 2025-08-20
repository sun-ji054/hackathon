import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import OnboardHeader from "../components/OnboardHeader";
import RegionBox from "../components/RegionBox";
import { FormNameStyle,CenterStyle, SelectStyle, FormStyle3 } from "../components/FormStyle";
import SignUpConsent from "../components/SignUpConsent";
import InputSubmit from "../components/InputSubmit";
import { signUp } from "../api/AuthApi";

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
      <OnboardHeader></OnboardHeader>
      <div style={{height:"640px", overflowY: "auto" }}>
        <FormNameStyle>회원가입</FormNameStyle>
        <form onSubmit={handleSignUp}>
          <SignUpForm></SignUpForm>
          <p style={{marginLeft: "24px", marginBottom: "7px"}}>자주 가는 지역 선택</p>
          <RegionBox SelectComponent={SelectStyle} FormComponent={FormStyle3}></RegionBox>
          <SignUpConsent></SignUpConsent>
          <CenterStyle>
            <InputSubmit submitName={"회원가입"}></InputSubmit>
          </CenterStyle>
        </form>
      </div>
    </>
  );
}


export default SignUpPage;