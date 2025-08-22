import { useEffect } from 'react';
import lineImg from '../assets/icons/Line 36.png';
import couponStatsStore from '../store/couponStatsStore';

export default function CouponStats({ className = '' }) {
    const { stats, fetchStats, loading } = couponStatsStore();

    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    if (loading) return <p>Loading...</p>;
    return (
        <div
            className={`bg-white rounded-xl shadow-sm flex justify-between items-center mx-auto ${className}`}
            style={{ width: '360px', height: '90px' }}
        >
            <div className="flex-1 text-center relative">
                <p className="text-[#F2592A] font-bold text-2xl">{stats.favorite_coupons}</p>
                <p className="text-[#8B6A55] text-[16px]">즐겨찾기</p>
                <img
                    src={lineImg}
                    alt="divider"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[60%]"
                />
            </div>

            <div className="flex-1 text-center relative">
                <p className="text-[#F2592A] font-bold text-2xl">{stats.coupon_counts}</p>
                <p className="text-[#8B6A55] text-[16px]">저장한 쿠폰</p>
                <img
                    src={lineImg}
                    alt="divider"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[60%]"
                />
            </div>

            <div className="flex-1 text-center">
                <p className="text-[#F2592A] font-bold text-2xl">{stats.stamp_counts}</p>
                <p className="text-[#8B6A55] text-[16px]">스탬프</p>
            </div>
        </div>
    );
}
