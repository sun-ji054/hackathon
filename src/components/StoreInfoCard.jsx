import { useEffect } from 'react';
import { useCouponbookCouponsStore } from '../store/useCouponbookCouponsStore';
import mapIcon from '../assets/icons/Place.png';
import clockIcon from '../assets/icons/Time.png';
import phoneIcon from '../assets/icons/Call.png';

function hhmm(t) {
    if (!t) return '-';
    const m = String(t).match(/^(\d{1,2}):(\d{2})/);
    return m ? `${m[1].padStart(2, '0')}:${m[2]}` : String(t);
}

export default function StoreInfoCard({ couponbookId, couponId, className = '' }) {
    const fetchCoupons = useCouponbookCouponsStore((s) => s.fetchCoupons);
    const loading = useCouponbookCouponsStore((s) => s.loading);
    const error = useCouponbookCouponsStore((s) => s.error);

    const place = useCouponbookCouponsStore((s) => {
        const id = String(couponId ?? '');
        const byId = s.couponsById?.[id];
        if (byId?.place) return byId.place;

        const all = (s.order || []).map((k) => s.couponsById?.[k]).filter(Boolean);

        const viaUrl = all.find((c) => c.coupon_url && c.coupon_url.endsWith(`/coupons/${id}/`));
        if (viaUrl?.place) return viaUrl.place;

        const viaPlace = all.find((c) => String(c?.place?.id) === id);
        if (viaPlace?.place) return viaPlace.place;

        const first = all[0];
        return first?.place;
    });

    useEffect(() => {
        fetchCoupons(couponbookId ? Number(couponbookId) : undefined);
    }, [couponbookId, fetchCoupons]);

    const address = place?.address ?? (loading ? '불러오는 중…' : '정보 없음');
    const opens = hhmm(place?.opens_at);
    const closes = hhmm(place?.closes_at);
    const lastOrder = hhmm(place?.last_order);
    const tel = place?.tel ?? '-';

    return (
        <div className={`bg-[#F2592A] flex items-center justify-center p-4 ${className}`}>
            <div className="bg-[#FCFAF7] rounded-2xl w-[362px] h-[191px] p-5 flex flex-col justify-between shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-[18px] font-bold text-black">매장 정보</h2>
                </div>

                <div className="mt-1 space-y-1 text-gray-700 text-[15px]">
                    {/* 위치 */}
                    <div className="flex items-start gap-[10px]">
                        <img src={mapIcon} alt="map" className="w-5 h-5 mt-1" />
                        <div>
                            <p className="font-semibold text-[#8B6A55]">위치</p>
                            <p className="text-[#595959] text-sm">
                                {address}
                                {error && !place ? ` (${error})` : ''}
                            </p>
                        </div>
                    </div>

                    {/* 영업시간 */}
                    <div className="flex items-start gap-[10px]">
                        <img src={clockIcon} alt="clock" className="w-5 h-5 mt-1" />
                        <div>
                            <p className="font-semibold text-[#8B6A55] mt-0 leading-5">영업시간</p>
                            <p className="text-[#595959] text-sm">
                                {opens} - {closes} / {lastOrder} 라스트오더
                            </p>
                        </div>
                    </div>

                    {/* 연락처 */}
                    <div className="flex items-start gap-[10px]">
                        <img src={phoneIcon} alt="phone" className="w-5 h-5 mt-1" />
                        <div>
                            <p className="font-semibold text-[#8B6A55] mt-0 leading-5">연락처</p>
                            <p className="text-[#595959] text-sm">
                                {tel !== '-' ? (
                                    <a href={`tel:${tel}`} className="underline">
                                        {tel}
                                    </a>
                                ) : (
                                    '-'
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
