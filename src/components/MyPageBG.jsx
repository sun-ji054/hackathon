import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #FCFAF7;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  margin-top: 53px;
  border: 1px solid #DCDCDC;
  border-radius: 20px;
  background-color: white;
`

function MyPageBG({children}){
  return(
    <Background>
      <Box>
        {children}
      </Box>
    </Background>
  );
}

export default MyPageBG;