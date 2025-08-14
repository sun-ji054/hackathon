import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import OnboardHeader from "../components/OnboardHeader";
import RegionBox from "../components/RegionBox";
import { FormStyle2 } from "../components/FormStyle";
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
    <div>
      <OnboardHeader></OnboardHeader>
      <FormStyle2 onSubmit={handleLogin}>
        <SignUpForm></SignUpForm>
        <RegionBox></RegionBox>
        <SignUpConsent></SignUpConsent>
        <InputSubmit submitName={"회원가입"}></InputSubmit>
      </FormStyle2>
    </div>
  );
}


export default SignUpPage;