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
    margin-bottom: 60px;
`;

function AllSavedStore() {
    const navigate = useNavigate();

    const { own, fetchOwn } = useOwnStore();
    // ✅ allSaved 대신 coupons 변수를 사용하도록 수정
    const { coupons, fetchAllSaved, error, loading } = useAllSavedStore();

    useEffect(() => {
        if (own?.id) {
            fetchAllSaved();
        }
    }, [own?.id, fetchAllSaved]);

    if (loading) {
        return <p>불러오는 중...</p>;
    }

    if (error) {
        return <p>에러 발생: {error}</p>;
    }

    if (!own?.id) {
        return <p>내 쿠폰북 정보를 불러오고 있습니다.</p>;
    }

    // ✅ coupons 변수가 비어있는지 확인
    if (coupons.length === 0) {
        return <p>쿠폰이 없습니다.</p>;
    }

    return (
        <StoreBoxStyle>
            {coupons.map((coupon) => (
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
