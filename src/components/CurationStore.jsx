import React, { useEffect } from 'react';
import WidthCoupon from './WidthCoupon';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCurationStore } from '../store/useCurationStore';
import { useAllSavedStore } from '../store/useAllSavedStore';
import { useOwnStore } from '../store/useOwnStore'; // ✅ useOwnStore 추가

const StoreBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

function CurationStore() {
    const navigate = useNavigate();
    const { curation, fetchCuration, loading, error } = useCurationStore();
    const { allSaved, fetchAllSaved, loading: allSavedLoading } = useAllSavedStore(); // ✅ allSaved loading 상태 가져오기
    const { own, fetchOwn } = useOwnStore(); // ✅ own 상태와 fetch 함수 가져오기

    // ✅ 쿠폰북 ID를 먼저 가져옵니다.
    useEffect(() => {
        fetchOwn();
    }, [fetchOwn]);

    // ✅ 쿠폰북 ID가 준비된 후에 큐레이션 및 저장된 쿠폰 목록을 가져옵니다.
    useEffect(() => {
        if (own?.id) {
            fetchCuration();
            fetchAllSaved();
        }
    }, [own?.id, fetchCuration, fetchAllSaved]);

    if (loading || allSavedLoading) return <p>로딩중...</p>; // ✅ 두 스토어의 로딩 상태를 모두 확인
    if (error) return <p>에러 발생: {error}</p>;
    if (!curation || curation.length === 0) return <p>쿠폰이 없습니다.</p>;

    // ✅ allSaved가 null이거나 빈 배열일 경우에 대한 처리 추가
    const allSavedCoupons = allSaved || [];
    if (allSavedCoupons.length === 0 && !allSavedLoading) {
        // 로딩 중이 아니고, allSaved가 비어있을 때 메시지 표시
        return <p>저장된 쿠폰이 없습니다.</p>;
    }

    const allSavedIds = new Set(allSavedCoupons.map((coupon) => coupon.id));

    return (
        <StoreBoxStyle>
            {curation.map((coupon) => {
                const isSaved = allSavedIds.has(coupon.id);
                const navigationPath = isSaved
                    ? `/aicoupondetails?couponId=${coupon.id}`
                    : `/ainewcoupondetails?couponId=${coupon.id}`;

                return <WidthCoupon key={coupon.id} coupon={coupon} onClick={() => navigate(navigationPath)} />;
            })}
        </StoreBoxStyle>
    );
}

export default CurationStore;
