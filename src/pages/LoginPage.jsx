import React from "react";
import LoginForm from "../components/LoginForm";
import OnboardHeader from "../components/OnboardHeader";

function LoginPage(){
  return(
    <div>
      <OnboardHeader></OnboardHeader>
      <LoginForm></LoginForm>
    </div>
  );
}

export default LoginPage;