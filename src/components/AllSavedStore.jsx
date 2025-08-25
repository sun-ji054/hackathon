import React, { useEffect } from "react";
import WidthCoupon2 from "./WidthCoupon2";
import styled from "styled-components";
import { useAllSavedStore } from "../store/useAllSavedStore";

const StoreBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

function AllSavedStore() {
  const { coupons, fetchAllSaved, error, loading } = useAllSavedStore();

  useEffect(() => {
    fetchAllSaved(); // 전체 쿠폰 가져오기
  }, [fetchAllSaved]);

  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <StoreBoxStyle>
      {coupons.length === 0 ? (
        <p>저장된 쿠폰이 없습니다.</p>
      ) : (
        coupons.map((coupon) => (
          <WidthCoupon2 key={coupon.id} coupon={coupon} />
        ))
      )}
    </StoreBoxStyle>
  );
}

export default AllSavedStore;
