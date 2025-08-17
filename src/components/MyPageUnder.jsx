import React from "react";
import styled from "styled-components";

const UnderStyle = styled.div`
  width: 346px;
  background-color: white;
  border: 1px solid #CFCFCF;
  border-top: 1px dotted #CFCFCF;
  border-radius: 0 0 20px 20px;
`

function MyPageUnder({children}){
  return(
      <UnderStyle>
        {children}
      </UnderStyle>
  );
}

export default MyPageUnder;