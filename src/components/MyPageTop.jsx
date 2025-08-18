import React from "react";
import styled from "styled-components";

const TopStyle = styled.div`
  width: 346px;
  background-color: white;
  border: 1px solid #CFCFCF;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
`

function MyPageTop(){
  return(
    <TopStyle>
      <p>안녕하세요</p>
    </TopStyle>
  );
}

export default MyPageTop;