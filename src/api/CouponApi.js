// src/api/SaveCouponApi.js
import { api } from "./Api";
import { useOwnStore } from "../store/useOwnStore";

export const saveCoupon = async (couponTemplateId) => {
  const { own } = useOwnStore.getState(); // zustand state 직접 접근
  const couponbookId = own.id;

  if (!couponbookId) {
    console.error("쿠폰북 ID가 없습니다. 먼저 fetchOwn을 호출하세요.");
    return null;
  }

  try {
    const response = await api.post(`/couponbook/couponbooks/${couponbookId}/coupons/`, {
      original_template: couponTemplateId, // 전시중인 쿠폰 id
    });
    console.log("쿠폰 저장 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("쿠폰 저장 실패:", error);
    return null;
  }
};
