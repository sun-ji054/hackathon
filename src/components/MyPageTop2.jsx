import React from "react";
import styled from "styled-components";

const TopStyle = styled.div`
  display: flex;
  width: 380px;
  background-color: white;
  border: 1px solid #CFCFCF;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
`
const Title = styled.p`
  margin: 17px 0 17px 17px;
  font-size: 20px;
  font-weight: bold;
`
function MyPageTop2(){
  return(
    <TopStyle>
      <Title>기본 설정</Title>
    </TopStyle>
  );
}

export default MyPageTop2;