import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import StoreInfoCard from '../components/StoreInfoCard';
import CloseIcon from '../assets/icons/Close_LG.png';
import StampsCheck from '../components/StampsCheck';
import { useNavigate, useLocation } from 'react-router-dom';
import couponStatsStore from '../store/couponStatsStore';
import { useEffect } from 'react';

export default function CouponDetailsPage() {
    const navigate = useNavigate();
    const { state, search } = useLocation();

    // ✅ stats 상태와 isReady 상태를 가져옵니다.
    const { stats, isReady, fetchStats } = couponStatsStore();

    // ✅ 페이지 진입 시 쿠폰북 상태를 가져옵니다.
    useEffect(() => {
        if (!stats?.id) {
            fetchStats();
        }
    }, [stats?.id, fetchStats]);

    const couponId =
        state?.couponId ??
        (() => {
            const p = new URLSearchParams(search);
            const v = p.get('couponId');
            return v ? Number(v) : null;
        })() ??
        null;

    return (
        <div className="flex flex-col h-full bg-[#F2592A] text-white ">
            <div className="flex justify-end px-4 pt-4">
                <img
                    src={CloseIcon}
                    alt="close"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => navigate('/couponbook')}
                />
            </div>

            <main className="flex-1 overflow-y-auto px-4 pb-[90px]">
                <h1 className="text-[24px] font-bold leading-snug mt-[53px]">쿠폰 상세보기</h1>
                <p className="text-[16px] font-medium leading-snug">스탬프 현황을 볼 수 있어요.</p>

                {/* ✅ isReady 상태가 true일 때만 StampsCheck를 렌더링합니다. */}
                {isReady && couponId && (
                    <StampsCheck
                        couponId={couponId}
                        className="mt-[28px] mb-[60px]"
                        onClick={(e, id) => id && navigate('/usecoupon', { state: { couponId: id } })}
                    />
                )}

                {/* ✅ isReady가 false이면 로딩 메시지를 표시합니다. */}
                {(!isReady || !couponId) && (
                    <p className="text-center mt-[100px] text-gray-700">정보를 불러오는 중입니다...</p>
                )}

                <StoreInfoCard couponId={couponId} />
            </main>

            <img src={lineImg} alt="line" className=" w-full" />
            <HomeBottomNav />
        </div>
    );
}
