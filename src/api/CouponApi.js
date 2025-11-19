// src/api/SaveCouponApi.js
import { api } from "./Api";
import { useOwnStore } from "../store/useOwnStore";

export const saveCoupon = async (couponbookId, couponTemplateId) => {
  if (!couponbookId) {
    console.error("쿠폰북 ID가 없습니다.");
    return null;
  }

  try {
    const response = await api.post(`/couponbook/couponbooks/${couponbookId}/coupons/`, {
      original_template: couponTemplateId,
    });
    console.log("쿠폰 저장 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("쿠폰 저장 실패:", error);
    return null;
  }
};
