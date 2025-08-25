import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WidthCoupon from './WidthCoupon';
import styled from 'styled-components';
import { useCouponStore } from '../store/useCouponStore';
import { useLocationStore } from '../store/useLocationStore';

const StoreBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

function MapStore() {
    const navigate = useNavigate(); // ✅ useNavigate 훅 선언
    const { coupons, fetchCoupons, error } = useCouponStore();
    const district = useLocationStore((state) => state.district);

    useEffect(() => {
        fetchCoupons(); // 전체 쿠폰 가져오기
    }, [fetchCoupons]);

    if (error) return <p>에러 발생: {error}</p>;

    // ✅ district와 일치하는 쿠폰만 필터링
    const filteredCoupons = coupons.filter((coupon) => coupon.place.address.includes(district));

    if (!filteredCoupons || filteredCoupons.length === 0) return <p>쿠폰이 없습니다.</p>;

    return (
        <StoreBoxStyle>
            {filteredCoupons.map((coupon) => (
                // ✅ 각 WidthCoupon에 클릭 핸들러를 prop으로 전달
                <WidthCoupon
                    key={coupon.id}
                    coupon={coupon}
                    onClick={() => {
                        // 클릭 시 쿠폰 상세 페이지로 이동
                        navigate(`/coupondetails?couponId=${coupon.id}`);
                    }}
                />
            ))}
        </StoreBoxStyle>
    );
}

export default MapStore;
