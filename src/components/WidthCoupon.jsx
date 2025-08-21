import React from "react";
import styled from "styled-components";

const StoreStyle = styled.div`
  display: flex;
  width: 368px;
  height: 131px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 1px 6px #00000040;
  cursor: pointer;
`
const PhotoStyle = styled.img`
  width: 120px;
  height: 131px;
  border-radius: 20px 0 0 20px;
`
/**가게 이름, 시간, 혜택 감싸는 div */
const TextBox = styled.div`
  display: flex;
  margin: 14px 0 0 15px;
  flex-direction: column;
  gap: 3px; /**행간 조절, 원래는 line-height 써야하는데 그러면 margin까지 계산해야함 */
`
const StoreName =styled.p`
 display: flex;
  width: auto;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
`
const Time = styled.p`
  -webkit-text-fill-color: #6F6F6F;
  font-size: 14px;
  font-weight: 400;
`
const Benefit = styled.p`
  -webkit-text-fill-color: #F2592A;
  font-size: 14px;
  font-weight: 600;
`
const Num = styled.p`
  font-size: 12px;
  -webkit-text-fill-color: #8B6A55;
  margin: 17px 0 0 153px;
  `
function WidthCoupon({coupon}){
  if (!coupon) return null;

  const { place, reward_info, first_n_persons } = coupon;

  return(
    <div>
      <StoreStyle>
        <PhotoStyle src={place.img_url} alt="가게img"></PhotoStyle>
        <TextBox>
          <StoreName>{place.name}</StoreName>
          <Time>{place.opens_at} - {place.closes_at}</Time>
          <Benefit>{reward_info.amount}회 방문하면{" "}
            {reward_info.reward} </Benefit>
          <Num>선착순 {first_n_persons}명</Num>
        </TextBox>
      </StoreStyle>
    </div>
  );
}

export default WidthCoupon;