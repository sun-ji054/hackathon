import React from "react";
import styled from "styled-components";
import arrow2 from '../assets/icons/Arrow2.png';

const OptStyle = styled.div`
  width: 303px;
  height: 24px;
  background-color: red;
`

function MyPageOpt(){
  return(
    <>
      <OptStyle>
        <p>프로필</p>
      </OptStyle>
      <img src={arrow2} alt="버튼"></img>
    </>
  );
}

export default MyPageOpt;