import React, { useEffect } from "react";
import WidthCoupon from "./WidthCoupon";
import styled from "styled-components";
import { useCouponStore } from "../store/useCouponStore";
import { useLocationStore } from "../store/useLocationStore";

const StoreBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

function MapStore() {
  const { coupons, fetchCoupons, loading, error } = useCouponStore();
  const district = useLocationStore((state) => state.district);

  useEffect(() => {
    fetchCoupons(); // 전체 쿠폰 가져오기
  }, [fetchCoupons]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  // ✅ district와 일치하는 쿠폰만 필터링
  const filteredCoupons = coupons.filter(
    (coupon) => coupon.place.address.includes(district)
  );

  if (!filteredCoupons || filteredCoupons.length === 0) return <p>쿠폰이 없습니다.</p>;

  return (
    <StoreBoxStyle>
      {filteredCoupons.map((coupon) => (
        <WidthCoupon key={coupon.id} coupon={coupon} />
      ))}
    </StoreBoxStyle>
  );
}

export default MapStore;
