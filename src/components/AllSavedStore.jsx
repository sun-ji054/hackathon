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
        fetchAllSaved(); // 전체 쿠폰 가져오기
    }, [fetchAllSaved]);

    if (loading) return <p>불러오는 중...</p>;
    if (error) return <p>에러 발생: {error}</p>;

    return (
        <StoreBoxStyle>
            {allSaved.map((coupon) => (
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
