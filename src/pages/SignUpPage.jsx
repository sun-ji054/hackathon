import React from "react";
import SignUpForm from "../components/SignUpForm";
import OnboardHeader from "../components/OnboardHeader";
import RegionBox from "../components/RegionBox";
import { FormStyle2 } from "../components/FormStyle";
import SignUpConsent from "../components/SignUpConsent";

function SignUpPage() {
  return(
    <div>
      <OnboardHeader></OnboardHeader>
      <FormStyle2>
        <SignUpForm></SignUpForm>
        <RegionBox></RegionBox>
        <SignUpConsent></SignUpConsent>
      </FormStyle2>
    </div>
  );
}


export default SignUpPage;