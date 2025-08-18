import React from "react";
import styled from "styled-components";
import arrow2 from '../assets/icons/Arrow2.png';

const OptStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  background-color: white;
  margin: 5px 0 3px 25px;
  cursor: pointer;
  padding-right: 30px;
`
const Img = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
`

function MyPageOpt({text}){
  return(
    <>
      <OptStyle>
        <p>{text}</p>
        <Img>
          <img src={arrow2} alt="버튼"></img>
        </Img>
      </OptStyle>
    </>
  );
}

export default MyPageOpt;