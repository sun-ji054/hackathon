import React, { useEffect } from 'react';
import { useMapStore } from '../store/useMapStore';
import { saveCoupon } from '../api/CouponApi'; // 저장 API
import couponStatsStore from '../store/couponStatsStore'; // ✅ 쿠폰북 ID 가져오기
import x from '../assets/icons/X.png';
import box from '../assets/icons/Box.png';

import {
    StoreInfoBox,
    PhotoStyle,
    TextBox,
    StoreName,
    Time,
    Benefit,
    X,
    BoxImg,
    Top,
    Box,
    BoxText,
} from './KaKaoStoreStyle';
import { useNavigate } from 'react-router-dom';

function KaKaoStore() {
    const navigate = useNavigate(); // ✅ useNavigate 훅을 컴포넌트 내에서 선언
    const { selectedStore, clearSelectedStore } = useMapStore();
    const { stats, fetchStats } = couponStatsStore(); // ✅ 내 쿠폰북 정보 가져오기

    // ✅ 쿠폰북 ID가 없으면 불러오기
    useEffect(() => {
        if (!stats?.id) {
            fetchStats();
        }
    }, [stats?.id, fetchStats]);

    if (!selectedStore) return null; // 선택된 가게 없으면 렌더링 안 함

    const place = selectedStore.place;

    // 저장 버튼 클릭
    const handleSave = async (e) => {
        e.stopPropagation(); //  이벤트 버블링 방지

        // 수정됨: 쿠폰북 ID와 템플릿 ID(selectedStore.id)를 모두 전달
        const saved = await saveCoupon(stats?.id, selectedStore.id);

        if (saved) {
            alert('쿠폰이 내 쿠폰북에 저장되었습니다!');
        } else {
            alert('쿠폰 저장에 실패했습니다.');
        }
    };

    // 상세 페이지 이동 클릭 핸들러
    const handleStoreClick = () => {
        //  coupon.id 대신 selectedStore.id를 사용
        if (selectedStore.id) {
            navigate(`/ainewcoupondetails?couponId=${selectedStore.id}`);
        }
    };

    return (
        //  전체 박스에 클릭 핸들러 연결
        <StoreInfoBox onClick={handleStoreClick}>
            <PhotoStyle src={place.image_url} alt={place.name}></PhotoStyle>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Top>
                    <Box onClick={handleSave}>
                        {' '}
                        {/* 저장 실행 */}
                        <BoxImg src={box} alt="box"></BoxImg>
                        <BoxText>내 쿠폰북에 저장</BoxText>
                    </Box>
                    <X onClick={clearSelectedStore}>
                        <img src={x} alt="닫기"></img>
                    </X>
                </Top>
                <TextBox>
                    <StoreName>{place.name}</StoreName>
                    <Time>
                        매일 {place.opens_at} - {place.closes_at}
                    </Time>
                    <Benefit>{selectedStore.reward_info.reward}</Benefit>
                </TextBox>
            </div>
        </StoreInfoBox>
    );
}

export default KaKaoStore;
