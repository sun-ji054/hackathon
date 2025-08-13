import React from "react";
import LoginForm from "../components/LoginForm";
import OnboardHeader from "../components/OnboardHeader";

function LoginPage(){
  return(
    <div>
      <OnboardHeader></OnboardHeader>
      <LoginForm></LoginForm>
      <p>블라블라블라</p>
    </div>
  );
}

export default LoginPage;