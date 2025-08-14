import React from "react";
import {useInfoStore} from "../store";
import { FormStyle } from "./FormStyle";

function SignUpConsent(){
  const {agree, setAgree} = useInfoStore();

  return(
    <FormStyle>
      <h3>개인정보활용 동의서</h3>
      <p>약관내용</p>
      <input 
        type="checkbox"
        checked={agree}
        onChange={setAgree}>
      </input>
      <label>동의합니다</label>
    </FormStyle>
  );
}

export default SignUpConsent;