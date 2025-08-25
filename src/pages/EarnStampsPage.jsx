import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import HomeBottomNav from '../components/HomeBottomNav';
import CloseIcon from '../assets/icons/Close_LG.png';
import PreviousIcon from '../assets/icons/Arrow_Left_LG.png';
import ThumbsupIcon from '../assets/icons/Success.png';

import AddStamps from '../components/AddStamps';
import { useCouponbookCouponsStore } from '../store/useCouponbookCouponsStore';

export default function EarnStampsPage() {
    const navigate = useNavigate();
    const { state, search } = useLocation();

    // 임시로 추가할 스탬프 개수 상태 (기본값 1로 설정)
    const [stampsToAdd] = useState(1);

    const couponId =
        state?.couponId ??
        (() => {
            const p = new URLSearchParams(search);
            const v = p.get('couponId');
            return v ? Number(v) : undefined;
        })();

    const fetchCoupons = useCouponbookCouponsStore((s) => s.fetchCoupons);
    const byId = useCouponbookCouponsStore((s) => s.couponsById);
    const order = useCouponbookCouponsStore((s) => s.order);

    useEffect(() => {
        if (couponId) {
            fetchCoupons(couponId);
        } else {
            fetchCoupons();
        }
    }, [couponId, fetchCoupons]);

    const coupon = useMemo(() => {
        const idStr = couponId != null ? String(couponId) : '';
        if (idStr && byId[idStr]) return byId[idStr];
        const first = order?.[0];
        return first ? byId[first] : undefined;
    }, [couponId, byId, order]);

    const total = Number(coupon?.max_stamps ?? coupon?.reward_info?.amount ?? 0) || 0;
    const used = Number(coupon?.current_stamps ?? 0) || 0;

    return (
        <div className="flex flex-col h-screen bg-[#F2592A] text-white">
            <div className="flex justify-between items-center px-4 pt-4 ">
                <img
                    src={PreviousIcon}
                    alt="previous"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => navigate('/coupondetails')}
                />
                <img
                    src={CloseIcon}
                    alt="close"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => navigate('/couponbook')}
                />
            </div>

            <div className="px-5 pt-[67px]">
                <h1 className="text-[24px] font-bold leading-snug">스탬프 적립 성공!</h1>
                <p className="text-[16px] leading-snug">새로운 스탬프가 추가되었어요.</p>
            </div>

            <AddStamps total={total} used={used} stampsToAdd={stampsToAdd} className="mt-4" />

            <div className="flex justify-center mt-7">
                <img src={ThumbsupIcon} alt="Success" className="w-[210px] h-[210px]" />
            </div>

            <HomeBottomNav />
        </div>
    );
}
