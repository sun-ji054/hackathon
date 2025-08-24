import React, { useEffect } from "react";
import styled from "styled-components";
import { useAllSavedStore } from "../store/useAllSavedStore";
import { useOwnStore } from "../store/useOwnStore";
import WidthCoupon from "./WidthCoupon";

const StoreBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

function AllSavedStore() {
  const { allSaved, fetchAllSaved, loading, error } = useAllSavedStore();
  const { own, fetchOwn } = useOwnStore();

  useEffect(() => {
    if (!own?.id) {
      fetchOwn();
    } else {
      fetchAllSaved();
    }
  }, [own?.id, fetchOwn, fetchAllSaved]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!allSaved || allSaved.length === 0) return <p>쿠폰이 없습니다.</p>;

  return (
    <StoreBoxStyle>
      {allSaved.map((coupon) => (
        <WidthCoupon key={coupon.id} coupon={coupon} />
      ))}
    </StoreBoxStyle>
  );
}

export default AllSavedStore;
