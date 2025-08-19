import React from "react";
import { useMapStore } from "../store";
import x from "../assets/icons/X.png";
import box from "../assets/icons/box.png";
import { StoreInfoBox, PhotoStyle, TextBox, StoreName, Time, Benefit,X, BoxImg, Top, Box, BoxText } from "./KaKaoStoreStyle";


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
          <StoreName>{selectedStore.name}</StoreName>
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
