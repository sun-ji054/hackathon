import React from "react";
import WidthCoupon from "./WidthCoupon";
import styled from "styled-components";

const StoreBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

function MapStore(){
  return(
    <StoreBoxStyle>
      <WidthCoupon></WidthCoupon>
      <WidthCoupon></WidthCoupon>
      <WidthCoupon></WidthCoupon>
      <WidthCoupon></WidthCoupon>
      <WidthCoupon></WidthCoupon>
      <WidthCoupon></WidthCoupon>
    </StoreBoxStyle>
  );
}

export default MapStore;