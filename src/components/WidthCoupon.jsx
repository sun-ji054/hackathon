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
  width: 153px;
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
function WidthCoupon(){
  /**백에서 가져온 데이터로 교체*/
  const photos = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
  ]

  return(
    <div>
      <StoreStyle>
        <PhotoStyle src={photos} alt="가게img"></PhotoStyle>
        <TextBox>
          <StoreName>샤로스톤</StoreName>
          <Time>매일 15:00 - 02:00</Time>
          <Benefit>4회 방문하면 음료 1개 무료! </Benefit>
          <Num>선착순 50명</Num>
        </TextBox>
      </StoreStyle>
    </div>
  );
}

export default WidthCoupon;