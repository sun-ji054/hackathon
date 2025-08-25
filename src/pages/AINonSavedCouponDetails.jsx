import { useEffect, useMemo } from 'react';
import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import StoreInfoCard from '../components/StoreInfoCard';
import CloseIcon from '../assets/icons/Close_LG.png';
import NonSavedStampsCheck from '../components/StampsCheck';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAICouponStore } from '../store/useAICouponStore';

export default function AINonCouponDetailsPage() {
    const navigate = useNavigate();
    const { state, search } = useLocation();

    const fetchCoupon = useAICouponStore((s) => s.fetchCoupon);
    const byId = useAICouponStore((s) => s.couponsById);
    const order = useAICouponStore((s) => s.order);

    const couponId =
        state?.couponId ??
        (() => {
            const p = new URLSearchParams(search);
            const v = p.get('couponId');
            return v ? Number(v) : null;
        })() ??
        null;

    useEffect(() => {
        if (couponId) {
            fetchCoupon(couponId);
        }
    }, [couponId, fetchCoupon]);

    const coupon = useMemo(() => {
        const idStr = couponId != null ? String(couponId) : '';
        if (idStr && byId[idStr]) return byId[idStr];
        const first = order?.[0];
        return first ? byId[first] : undefined;
    }, [couponId, byId, order]);

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
                <p className="text-[16px] font-medium leading-snug">맘에 드는 쿠폰을 저장해보세요.</p>

                <NonSavedStampsCheck couponId={couponId} className="mt-[28px] mb-[60px]" />

                <StoreInfoCard couponId={couponId} />
            </main>

            <img src={lineImg} alt="line" className=" w-full" />
            <HomeBottomNav />
        </div>
    );
}
