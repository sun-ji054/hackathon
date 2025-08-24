// src/components/StampsCheck.js
import { useEffect, useMemo } from 'react';
import { useCouponbookCouponsStore } from '../store/useCouponbookCouponsStore';
import { Star, Trash2 } from 'lucide-react';
import stampOrange from '../assets/icons/Stamp.png';
import stampGray from '../assets/icons/Empty.png';

export default function StampsCheck({ couponbookId, couponId, className = '', onClick }) {
    const fetchCoupons = useCouponbookCouponsStore((s) => s.fetchCoupons);
    const loading = useCouponbookCouponsStore((s) => s.loading);
    const error = useCouponbookCouponsStore((s) => s.error);
    const byId = useCouponbookCouponsStore((s) => s.couponsById);
    const order = useCouponbookCouponsStore((s) => s.order);

    // 쿠폰북 ID가 없으면 스토어가 own-couponbook으로 자동 조회
    useEffect(() => {
        fetchCoupons(couponbookId);
    }, [couponbookId, fetchCoupons]);

    // 쿠폰 선택: id 일치 → 첫 쿠폰
    const coupon = useMemo(() => {
        const idStr = couponId != null ? String(couponId) : '';
        if (idStr && byId[idStr]) return byId[idStr];
        const firstId = order?.[0];
        return firstId ? byId[firstId] : undefined;
    }, [couponId, byId, order]);

    const total = Number(coupon?.max_stamps ?? coupon?.reward_info?.amount ?? 0);
    const used = Number(coupon?.current_stamps ?? 0);
    const pct = total ? Math.min(100, Math.max(0, (used / total) * 100)) : 0;

    const name = coupon?.place?.name || (loading ? '불러오는 중…' : error ? `정보 없음 (${error})` : '정보 없음');
    const desc = coupon?.reward_info
        ? `${coupon.reward_info.amount ?? total}회 방문하면 ${coupon.reward_info.reward ?? ''}`.trim()
        : total
        ? `스탬프 ${total}개 채우면 보상`
        : '';
    const photo = coupon?.place?.image_url || 'https://picsum.photos/400/300';

    const handleCardClick = (e) => {
        if (typeof onClick === 'function') onClick(e);
    };
    const stop = (e) => e.stopPropagation();

    return (
        <div className="flex justify-center items-center bg-[#F2592A]">
            {/* 카드 전체를 클릭 가능한 영역으로 */}
            <div
                onClick={handleCardClick}
                className={`relative cursor-pointer bg-[#FCFAF7] rounded-3xl shadow-xl w-[320px] overflow-hidden mx-auto ${className}`}
                role="button"
                tabIndex={0}
            >
                {/* 가게 이미지 영역 */}
                <div className="relative z-10 h-[450px]">
                    <img src={photo} alt="store" className="w-full h-full object-cover rounded-3xl" />

                    {/* 우상단 버튼 (상위 클릭 전파 방지) */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button onClick={stop} className="bg-white/90 rounded-full p-2 shadow border border-[#F2592A]">
                            <Star className="w-5 h-5 text-[#F2592A]" />
                        </button>
                        <button onClick={stop} className="bg-white/90 rounded-full p-2 shadow border border-[#F2592A]">
                            <Trash2 className="w-5 h-5 text-[#F2592A]" />
                        </button>
                    </div>

                    {/* 가게명 + 설명 + 진행바 */}
                    <div className="absolute bottom-[30px] left-3 text-white">
                        <h2 className="px-3 font-bold text-[28px]">{name}</h2>
                        <p className="px-3 text-[16px] text-[#C5C5C5]">{desc}</p>

                        <div className="pl-3 pt-1">
                            <div className="flex items-center justify-between">
                                <div className="w-full h-[6px] bg-gray-200 rounded-full mr-2">
                                    <div className="h-[6px] bg-[#F2592A] rounded-full" style={{ width: `${pct}%` }} />
                                </div>
                                <span className="text-xs text-[#F2592A]">
                                    {used}/{total}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 스탬프 리스트 */}
                <div className="relative -mt-[14px] px-2 pb-2 z-0">
                    <div className="rounded-b-[20px] rounded-t-none border-2 border-dashed border-[#8B6A55] border-t-transparent p-5 bg-[#FCFAF7]">
                        <div className="grid grid-cols-5 gap-3 pt-2">
                            {Array.from({ length: total }).map((_, i) => (
                                <div key={i} className="w-12 h-12 mx-auto">
                                    <img
                                        src={i < used ? stampOrange : stampGray}
                                        alt={`stamp ${i + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
