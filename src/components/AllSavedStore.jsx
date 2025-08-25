import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAllSavedStore } from '../store/useAllSavedStore';
import { useOwnStore } from '../store/useOwnStore';
import WidthCoupon from './WidthCoupon';

const StoreBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

function AllSavedStore() {
    const navigate = useNavigate();
    const { allSaved, fetchAllSaved, loading, error } = useAllSavedStore();
    const { own, fetchOwn } = useOwnStore();

    useEffect(() => {
        // `own` 데이터가 있을 때만 `fetchAllSaved`를 호출하도록 수정합니다.
        // `MycouponbookPage`에서 `fetchOwn`을 호출하므로, `AllSavedStore`에서는 `own`이 유효한지 확인만 합니다.
        if (own?.id) {
            fetchAllSaved();
        }
    }, [own, fetchAllSaved]);

    if (loading) {
        return <p>불러오는 중...</p>;
    }

    if (error) {
        return <p>에러 발생: {error}</p>;
    }

    // ✅ allSaved가 null이거나 undefined일 경우, 빈 배열을 반환합니다.
    const couponsToRender = allSaved || [];

    // 만약 `own` 데이터가 없으면, 쿠폰이 없다는 메시지를 띄웁니다.
    if (!own?.id) {
        return <p>내 쿠폰북 정보를 불러오고 있습니다.</p>;
    }

    if (couponsToRender.length === 0) {
        return <p>쿠폰이 없습니다.</p>;
    }

    return (
        <StoreBoxStyle>
            {couponsToRender.map((coupon) => (
                <WidthCoupon
                    key={coupon.id}
                    coupon={coupon}
                    onClick={() => navigate(`/coupondetails?couponId=${coupon.id}`)}
                />
            ))}
        </StoreBoxStyle>
    );
}

export default AllSavedStore;
