import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 6px 26px;
`

function MyPageSubtitle({subtitle}){
  return(
    <Text>{subtitle}</Text>
  );
}

export default MyPageSubtitle;