import React, {useEffect} from "react";
import WidthCoupon from "./WidthCoupon";
import styled from "styled-components";
import { useCurationStore } from "../store/useCurationStore";

const StoreBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

function CurationStore(){
  const { curation, fetchCuration, loading, error } = useCurationStore();

  useEffect(() => {
    fetchCuration();
  }, [fetchCuration]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!curation || curation.length === 0) return <p>쿠폰이 없습니다.</p>;

  return (
    <StoreBoxStyle>
      {curation.map((coupon) => (
        <WidthCoupon key={coupon.id} coupon={coupon} />
      ))}
    </StoreBoxStyle>
  );
}

export default CurationStore;