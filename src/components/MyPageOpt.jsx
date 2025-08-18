import React from "react";
import styled from "styled-components";
import arrow2 from '../assets/icons/Arrow2.png';

const OptStyle = styled.div`
  display: flex;
  align-items: center;
  width: 303px;
  height: 24px;
  background-color: white;
  margin: 7px 0 3px 25px;
`
const Img = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-left: 238px;
`

function MyPageOpt(){
  return(
    <>
      <OptStyle>
        <p>프로필</p>
        <Img>
          <img src={arrow2} alt="버튼"></img>
        </Img>
      </OptStyle>
    </>
  );
}

export default MyPageOpt;