import { useEffect, useMemo, useState } from 'react';
import { useCouponbookCouponsStore } from '../store/useCouponbookCouponsStore';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import stampOrange from '../assets/icons/Stamp.png';
import stampGray from '../assets/icons/Empty.png';
import { api } from '../api/Api';
import couponStatsStore from '../store/couponStatsStore';

export default function StampsCheck({ couponId, className = '', onClick }) {
    const navigate = useNavigate();

    // ✅ 스토어에서 쿠폰북 ID를 가져오고 로딩 상태도 가져옵니다.
    const { stats, loading: statsLoading } = couponStatsStore();
    const couponbookId = stats?.id;

    // ✅ 단일 쿠폰 조회만 사용
    const fetchCoupon = useCouponbookCouponsStore((s) => s.fetchCoupon);
    const loading = useCouponbookCouponsStore((s) => s.loading);
    const error = useCouponbookCouponsStore((s) => s.error);
    const byId = useCouponbookCouponsStore((s) => s.couponsById);
    const order = useCouponbookCouponsStore((s) => s.order);

    // ✅ 즐겨찾기 상태를 관리하는 로컬 state
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteId, setFavoriteId] = useState(null);

    // ✅ couponId가 있을 때만 호출
    useEffect(() => {
        if (couponId) fetchCoupon(couponId);
    }, [couponId, fetchCoupon]);

    const coupon = useMemo(() => {
        const idStr = couponId != null ? String(couponId) : '';
        if (idStr && byId[idStr]) return byId[idStr];
        const firstId = order?.[0];
        return firstId ? byId[firstId] : undefined;
    }, [couponId, byId, order]);

    // ✅ coupon 객체가 업데이트될 때마다 즐겨찾기 상태를 동기화
    useEffect(() => {
        if (coupon?.favorite_id) {
            setIsFavorite(true);
            setFavoriteId(coupon.favorite_id);
        } else {
            setIsFavorite(false);
            setFavoriteId(null);
        }
    }, [coupon]);

    const total = Number(coupon?.max_stamps ?? coupon?.reward_info?.amount ?? 0);
    const used = Number(coupon?.current_stamps ?? 0);
    const pct = total ? Math.min(100, Math.max(0, (used / total) * 100)) : 0;

    const name = coupon?.place?.name || (loading ? '불러오는 중…' : error ? `정보 없음 (${error})` : '정보 없음');
    const desc = coupon?.reward_info
        ? ` ${coupon.reward_info.reward ?? ''}`.trim()
        : total
        ? `스탬프 ${total}개 채우면 보상`
        : '';
    const photo = coupon?.place?.image_url || 'https://picsum.photos/400/300';

    // ✅ 최종 쿠폰 ID (없으면 기본 내비 막음)
    const resolvedId = coupon?.id ?? (couponId != null ? Number(couponId) : null);

    const handleCardClick = (e) => {
        if (typeof onClick === 'function') return onClick(e, resolvedId);
        if (resolvedId) navigate('/usecoupon', { state: { couponId: resolvedId } });
    };

    const stop = (e) => e.stopPropagation();

    // ✅ 별 버튼 클릭 시 즐겨찾기 상태를 토글
    const handleFavoriteClick = async (e) => {
        e.stopPropagation();
        if (!couponbookId || !coupon?.id) {
            console.error('쿠폰북 ID 또는 쿠폰 ID를 찾을 수 없습니다.');
            return;
        }

        try {
            if (isFavorite) {
                // 즐겨찾기 해제: DELETE 요청 엔드포인트 수정
                await api.delete(`/couponbook/own-couponbook/favorites/${favoriteId}/`);
                setIsFavorite(false);
                setFavoriteId(null);
            } else {
                // 즐겨찾기 추가: POST 요청
                const { data } = await api.post(`/couponbook/couponbooks/${couponbookId}/favorites/`, {
                    coupon: coupon.id,
                });
                setIsFavorite(true);
                setFavoriteId(data.id);
            }
        } catch (e) {
            console.error('즐겨찾기 상태 변경 실패:', e.response?.data?.detail || e.message);
            alert('즐겨찾기 상태 변경에 실패했습니다.');
        }
    };

    // ✅ 쿠폰북과 쿠폰 데이터 로딩 중인지 확인
    const isDataLoading = statsLoading || loading;

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
                        {/* ✅ 로딩 중일 때 버튼 비활성화 및 스타일 변경 */}
                        <button
                            onClick={handleFavoriteClick}
                            disabled={isDataLoading}
                            className={`bg-white/90 rounded-full p-2 shadow border border-[#F2592A] transition-colors duration-200 ${
                                isDataLoading ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        >
                            <Star className={`w-5 h-5 ${isFavorite ? 'text-[#F2592A]' : 'text-gray-400'}`} />
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
