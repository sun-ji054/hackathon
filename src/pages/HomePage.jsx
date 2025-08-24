import HomeHeaderBar from '../components/HomeHeaderBar';
import HomeCard from '../components/HomeCard';
import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import SearchBar from '../components/SearchBar';
import WidthCoupon from '../components/WidthCoupon';
import CouponCarousel from '../components/CouponCarousel';
import { userInfoStore } from '../store/userInfoStore';
import CurationStore from '../components/CurationStore';

import couponStatsStore from '../store/couponStatsStore';
import favoriteCouponsStore from '../store/favoriteCouponsStore';

import { useEffect } from 'react';

export default function HomePage() {
    const { username } = userInfoStore();

    // 내 쿠폰북 ID 확보
    const { stats, fetchStats } = couponStatsStore();

    // 즐겨찾기 목록
    const { items: favoriteCoupons, loading: favLoading, error: favError, fetchFavorites } = favoriteCouponsStore();

    // 쿠폰북 ID 없으면 가져오기
    useEffect(() => {
        if (!stats?.id) fetchStats();
    }, [stats?.id, fetchStats]);

    // 쿠폰북 ID 생기면 즐겨찾기 조회
    useEffect(() => {
        if (stats?.id) fetchFavorites(stats.id);
    }, [stats?.id, fetchFavorites]);

    return (
        <div className="flex flex-col h-full">
            <HomeHeaderBar />

            {/* 본문 */}
            <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#FCF9F7] pt-[110px]">
                <section className="text-left space-y-1">
                    <h1 className="text-[24px] font-bold leading-snug ">반가워요, {username || '익명'}님!</h1>
                    <p className="text-[16px] font-mediup leading-sung ">오늘도 새로운 스탬프를 모아보세요.</p>
                </section>

                <section className="flex justify-center gap-3 pt-[21px]">
                    <HomeCard to="/ai">AI 추천</HomeCard>
                    <HomeCard to="/mapPage">주변 탐색</HomeCard>
                    <HomeCard to="/couponbook">내 쿠폰북</HomeCard>
                </section>

                <div className="flex justify-center pt-[37px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                <h2 className="text-[20px] font-semibold leading-snug pt-[14px]">즐겨찾는 쿠폰</h2>
                <div className="pt-[12px]">
                    {favLoading ? (
                        <p>불러오는 중...</p>
                    ) : favError ? (
                        <p className="text-red-500">{favError}</p>
                    ) : favoriteCoupons.length === 0 ? (
                        <p className="text-[#8B6A55]">즐겨찾기한 쿠폰이 없습니다.</p>
                    ) : (
                        <CouponCarousel coupons={favoriteCoupons} />
                    )}
                </div>

                <div className="flex justify-center pt-[20px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 바로 검색하기 */}
                <h3 className="text-[20px] font-semibold leading-snug pt-[12px]">바로 검색하기</h3>
                <SearchBar />

                <div className="flex justify-center "></div>

                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* AI 추천 쿠폰*/}
                <h4 className="text-[20px] font-semibold leading-snug pt-[12px]">AI가 추천하는 오늘의 쿠폰</h4>

                <div style={{ flex: 1, overflowY: 'auto', height: '495px' }}>
                    <CurationStore />
                </div>
            </main>

            <HomeBottomNav />
        </div>
    );
}
