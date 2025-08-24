import React from "react";
import styled from "styled-components";

export const StoreInfoBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 100px;
  width: 380px;
  height: 168px; //auto로 할 지 고민
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 1px 6px #00000040;
  z-index: 100;
`
//사진 사이즈 cover가 좋을지 widthcoupon과 비교해서 고민 필요
export const PhotoStyle = styled.img`
  width: 120px;
  height: 168px;
  border-radius: 20px 0 0 20px;
  object-fit: cover;
  `
/**가게 이름, 시간, 혜택 감싸는 div */
export const TextBox = styled.div`
  display: flex;
  margin: 35px 0 0 17px;
  flex-direction: column;
  gap: 3px;
`
export const StoreName =styled.p`
display: inline-block;
  width: auto;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
`
export const Time = styled.p`
  -webkit-text-fill-color: #6F6F6F;
  font-size: 14px;
  font-weight: 400;
`
export const Benefit = styled.p`
  -webkit-text-fill-color: #F2592A;
  font-size: 14px;
  font-weight: 600;
`
export const X = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #8B6A55;
  border-radius: 50%;
  cursor: pointer;
`
export const BoxImg = styled.img`
  display: block;
  height: auto;
  width: auto; 
  max-height: 24px; 
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #8B6A55;
  border-radius: 20px;
  padding: 0 8px;
`
export const BoxText = styled.p`
  font-size: 13px;
  font-weight: 600;
  -webkit-text-fill-color: #8B6A55;
  margin: 0;
`
export const Top = styled.div`
  display: flex;
  margin: 12px 0 0 70px;
  gap: 6px
`