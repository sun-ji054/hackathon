import { useEffect } from 'react';
import CouponbookHeaderBar from '../components/CouponbookHeaderBar';
import CouponCarousel from '../components/CouponCarousel';
import lineImg from '../assets/Line-35.png';
import CouponStats from '../components/CouponStats';
import SaveSearch from '../components/SaveSearch';
import MapSort from '../components/MapSort';
import AllSavedStore from '../components/AllSavedStore';
import SaveSort from '../components/SaveSort';

// 스토어들
import couponStatsStore from '../store/couponStatsStore';
import favoriteCouponsStore from '../store/favoriteCouponsStore';

export default function MycouponbookPage() {

    const { stats, fetchStats } = couponStatsStore();
    const { items: favoriteCoupons, loading: favLoading, error: favError, fetchFavorites } = favoriteCouponsStore();


    useEffect(() => {
        if (!stats?.id) fetchStats();
    }, [stats?.id, fetchStats]);


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
                    <p className="text-[16px] font-mediup leading-sung ">
                        저장한 모든 쿠폰들을 볼 수 있어요.
                    </p>
                </section>

                <CouponStats className="mt-[21px]" />

                <div className="flex justify-center pt-[20px]" />
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                <h2 className="text-[20px] font-semibold leading-snug pt-[23px]">즐겨찾기</h2>
                <p className="text-[16px] font-mediup leading-[30px] ">
                    자주 가는 장소의 쿠폰들
                </p>

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

                <div className="flex justify-center pt-[20px]" />
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                <h3 className="text-[20px] font-semibold leading-snug pt-[23px] ">
                    저장한 모든 쿠폰
                </h3>
                <SaveSearch className="pt-[23px]" />
                <div className="ml-[17px] mt-[10px]">
                    <SaveSort />
                </div>

                <div
                    style={{
                        flex: 1,
                        overflowY: 'scroll',
                        height: '495px',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE, Edge
                    }}
                    className="no-scrollbar"
                >
                    <AllSavedStore />
                </div>
            </main>
        </div>
    );
}
