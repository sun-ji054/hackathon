import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WidthCoupon from './WidthCoupon';
import { useCouponStore } from '../store/useCouponStore';
import { useLocationStore } from '../store/useLocationStore';

const StoreBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

function MapStore() {
    const navigate = useNavigate();
    const { coupons, fetchCoupons, error } = useCouponStore();
    const district = useLocationStore((state) => state.district);

    useEffect(() => {
        fetchCoupons();
    }, [fetchCoupons]);

    if (error) return <p>에러 발생: {error}</p>;

    const filteredCoupons = coupons.filter((coupon) => coupon.place?.address?.includes(district || ''));

    if (!filteredCoupons || filteredCoupons.length === 0) {
        return <p>쿠폰이 없습니다.</p>;
    }

    return (
        <StoreBoxStyle>
            {filteredCoupons.map((coupon) => (
                <WidthCoupon
                    key={coupon.id}
                    coupon={coupon}
                    onClick={() => navigate(`/coupondetails?couponId=${coupon.id}`)}
                />
            ))}
        </StoreBoxStyle>
    );
}

export default MapStore;
