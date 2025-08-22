import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0 25px 26px;
`

function MyPageTitle({title}){
  return(
    <Text>{title}</Text>
  );
}

export default MyPageTitle;