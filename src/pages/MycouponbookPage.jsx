import { useEffect } from 'react';
import CouponbookHeaderBar from '../components/CouponbookHeaderBar';
import HomeBottomNav from '../components/HomeBottomNav';
import CouponCarousel from '../components/CouponCarousel';
import lineImg from '../assets/Line-35.png';
import CouponStats from '../components/CouponStats';
import SearchBar from '../components/SearchBar';
import MapSort from '../components/MapSort';
import WidthCoupon from '../components/WidthCoupon';

// 스토어들
import couponStatsStore from '../store/couponStatsStore';
import favoriteCouponsStore from '../store/favoriteCouponsStore';

export default function MycouponbookPage() {
    // 내 쿠폰북 ID(=stats.id) 확보
    const { stats, fetchStats } = couponStatsStore();
    // 즐겨찾기 목록
    const { items: favoriteCoupons, loading: favLoading, error: favError, fetchFavorites } = favoriteCouponsStore();

    // 쿠폰북 ID 없으면 한 번 가져오기 (이미 다른 곳에서 가져오고 있으면 중복 호출돼도 문제 없음)
    useEffect(() => {
        if (!stats?.id) fetchStats();
    }, [stats?.id, fetchStats]);

    // 쿠폰북 ID가 생기면 즐겨찾기 조회
    useEffect(() => {
        if (stats?.id) fetchFavorites(stats.id);
    }, [stats?.id, fetchFavorites]);

    return (
        <div className="flex flex-col h-full bg-[#FCF9F7]">
            <CouponbookHeaderBar />
            <main className="flex-1 overflow-y-auto px-4 py-4 pt-[40px]">
                {/* 내 쿠폰북 */}
                <section className="text-left space-y-1">
                    <h1 className="text-[24px] font-bold leading-snug">내 쿠폰북</h1>
                    <p className="text-[16px] font-mediup leading-sung ">저장한 모든 쿠폰들을 볼 수 있어요.</p>
                </section>

                <CouponStats className="mt-[21px]" />

                {/* 라인 */}
                <div className="flex justify-center pt-[20px]" />
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 즐겨찾는 쿠폰 */}
                <h2 className="text-[20px] font-semibold leading-snug pt-[23px]">즐겨찾기</h2>
                <p className="text-[16px] font-mediup leading-[30px] ">자주 가는 장소의 쿠폰들</p>

                <div className="pt-[23px]">
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

                {/* 라인 */}
                <div className="flex justify-center pt-[20px]" />
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 저장한 모든 쿠폰 (기존 그대로) */}
                <h3 className="text-[20px] font-semibold leading-snug pt-[23px] ">저장한 모든 쿠폰</h3>
                <SearchBar className="pt-[23px] " />
                <div className="ml-[17px] mt-[10px]">
                    <MapSort />
                </div>

                <div className="flex justify-center mt-[14px]">
                    <WidthCoupon className="pb-20" />
                </div>
            </main>
            <HomeBottomNav />
        </div>
    );
}
