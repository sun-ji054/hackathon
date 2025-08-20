import React from "react";
import styled from "styled-components";
import backArrow from "../assets/icons/Back.png";
import { Link } from "react-router-dom";

const BackBox = styled.div`
  display: flex;
  margin: 20px 25px;
  gap: 10px;
`
const BackIcon = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
`
const BackText = styled.p`
  font-size: 16px;
  font-weight: 500;
  -webkit-text-fill-color: #8B6A55;
`

function SignUpBack(){
  return(
    <BackBox>
      <BackIcon src={backArrow} alt="뒤로"></BackIcon>
      <Link to={'/'}>
        <BackText>로그인으로 돌아가기</BackText>
      </Link>
    </BackBox>
  );
}

export default SignUpBack;