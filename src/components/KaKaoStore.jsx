import React from "react";
import styled from "styled-components";
import { useMapStore } from "../store";
import x from "../assets/icons/X.png";
import box from "../assets/icons/box.png";

const StoreInfoBox = styled.div`
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
const PhotoStyle = styled.img`
  width: 120px;
  height: 168px;
  border-radius: 20px 0 0 20px;
  object-fit: cover;
  `
/**가게 이름, 시간, 혜택 감싸는 div */
const TextBox = styled.div`
  display: flex;
  margin: 35px 0 0 17px;
  flex-direction: column;
  gap: 3px;
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
const X = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #8B6A55;
  border-radius: 50%;
  cursor: pointer;
`
const BoxImg = styled.img`
  display: block;
  height: auto;
  width: auto; 
  max-height: 24px; 
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #8B6A55;
  border-radius: 20px;
  padding: 0 8px;
`
const BoxText = styled.p`
  font-size: 13px;
  font-weight: 600;
  -webkit-text-fill-color: #8B6A55;
  margin: 0;
`
const Top = styled.div`
  display: flex;
  margin: 12px 0 0 70px;
  gap: 6px
`

function KaKaoStore() {
  const { selectedStore, clearSelectedStore } = useMapStore();
    /**백에서 가져온 데이터로 교체*/
  const photos = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
  ]

  if (!selectedStore) return null; // 선택된 가게 없으면 렌더링 안 함

  return (
    <StoreInfoBox>
      <PhotoStyle src={selectedStore.photo || photos} alt="가게img"></PhotoStyle>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Top>
        <Box>
          <BoxImg src={box} alt="box"></BoxImg>
          <BoxText>내 쿠폰북에 저장</BoxText>
        </Box>
        <X onClick={clearSelectedStore}>
          <img src={x} alt="닫기"></img>
        </X>
        </Top>
        <TextBox>
          <StoreName>도란도란곱창</StoreName>
          <Time>매일 15:00 - 02:00</Time>
          <Benefit>4회 방문하면 볶음밥 무료!</Benefit>
        </TextBox>
      </div>
    </StoreInfoBox>
  );
}

export default KaKaoStore;

// <p>{selectedStore.desc}</p>
// <p>위도: {selectedStore.position.lat}</p>
// <p>경도: {selectedStore.position.lng}</p>
//이런 식으로 데이터 넣으면 됨
