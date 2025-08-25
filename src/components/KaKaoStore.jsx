import React from "react";
import { useMapStore } from "../store/useMapStore";
import { saveCoupon } from "../api/CouponApi"; // 저장 API
import x from "../assets/icons/X.png";
import box from "../assets/icons/Box.png";
import { 
  StoreInfoBox, PhotoStyle, TextBox, StoreName, Time, Benefit,
  X, BoxImg, Top, Box, BoxText 
} from "./KaKaoStoreStyle";

function KaKaoStore() {
  const { selectedStore, clearSelectedStore } = useMapStore();

  if (!selectedStore) return null; // 선택된 가게 없으면 렌더링 안 함

  const place = selectedStore.place;

  // 저장 버튼 클릭
  const handleSave = async () => {
    const saved = await saveCoupon(selectedStore.id); // ← 전시중인 쿠폰 id
    if (saved) {
      alert("쿠폰이 내 쿠폰북에 저장되었습니다!");
    }
  };

  return (
    <StoreInfoBox>
      <PhotoStyle src={place.image_url} alt={place.name}></PhotoStyle>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Top>
          <Box onClick={handleSave}> {/* 저장 실행 */}
            <BoxImg src={box} alt="box"></BoxImg>
            <BoxText>내 쿠폰북에 저장</BoxText>
          </Box>
          <X onClick={clearSelectedStore}>
            <img src={x} alt="닫기"></img>
          </X>
        </Top>
        <TextBox>
          <StoreName>{place.name}</StoreName>
          <Time>매일 {place.opens_at} - {place.closes_at}</Time>
          <Benefit>{selectedStore.reward_info.reward}</Benefit>
        </TextBox>
      </div>
    </StoreInfoBox>
  );
}

export default KaKaoStore;
