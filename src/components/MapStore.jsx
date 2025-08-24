import React, {useEffect} from "react";
import WidthCoupon from "./WidthCoupon";
import styled from "styled-components";
import { useCouponStore } from "../store/useCouponStore";

const StoreBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

function MapStore(){
  const { coupons, fetchCoupons, loading, error } = useCouponStore();

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!coupons || coupons.length === 0) return <p>쿠폰이 없습니다.</p>;

  return (
    <StoreBoxStyle>
      {coupons.map((coupon) => (
        <WidthCoupon key={coupon.id} coupon={coupon} />
      ))}
    </StoreBoxStyle>
  );
}

export default MapStore;