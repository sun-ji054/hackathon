import HomeHeaderBar from '../components/HomeHeaderBar';
import HomeCard from '../components/HomeCard';
import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import CouponCard from '../components/CouponCard';
import SearchBar from '../components/SearchBar';
import WidthCoupon from '../components/WidthCoupon';
import CouponCarousel from '../components/CouponCarousel';
import { userInfoStore } from '../store/userInfoStore';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage() {
    const coupons = [
        {
            name: '한시십일분',
            description: '음료 10잔 마시면 1잔 무료',
            progress: 9,
            total: 10,
            expire: '4개월 후 만료',
            photo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
        },
        {
            name: '마루이치',
            description: '라멘 5그릇 시 식전주 서비스',
            progress: 2,
            total: 5,
            expire: '2개월 후 만료',
            photo: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=1200&auto=format&fit=crop',
        },
        {
            name: '마루이치',
            description: '라멘 5그릇 시 식전주 서비스',
            progress: 2,
            total: 5,
            expire: '2개월 후 만료',
            photo: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=1200&auto=format&fit=crop',
        },
        {
            name: '마루이치',
            description: '라멘 5그릇 시 식전주 서비스',
            progress: 2,
            total: 5,
            expire: '2개월 후 만료',
            photo: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=1200&auto=format&fit=crop',
        },
        {
            name: '마루이치',
            description: '라멘 5그릇 시 식전주 서비스',
            progress: 2,
            total: 5,
            expire: '2개월 후 만료',
            photo: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=1200&auto=format&fit=crop',
        },
    ];

    const {username} = userInfoStore();
    

    return (
        <div className="flex flex-col h-full">
            <HomeHeaderBar />

            {/* 본문 */}
            <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#FCF9F7] pt-[110px]">
                <section className="text-left space-y-1">
                    <h1 className="text-[24px] font-bold leading-snug ">반가워요, {username}님!</h1>
                    <p className="text-[16px] font-mediup leading-sung ">오늘도 새로운 스탬프를 모아보세요.</p>
                </section>

                <section className="flex justify-center gap-3 pt-[21px]">
                    <HomeCard to="/ai">AI 추천</HomeCard>
                    <HomeCard to="/mapPage">주변 탐색</HomeCard>
                    <HomeCard to="/couponbook">내 쿠폰북</HomeCard>
                </section>

                <div className="flex justify-center pt-[37px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 즐겨찾는 쿠폰 */}
                <h2 className="text-[20px] font-semibold leading-snug pt-[14px]">즐겨찾는 쿠폰</h2>

                {/* 쿠폰 카드 영역 */}
                <div className="pt-[12px]">
                    <CouponCarousel coupons={coupons} />
                </div>

                <div className="flex justify-center pt-[20px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 바로 검색하기 */}
                <h3 className="text-[20px] font-semibold leading-snug pt-[12px]">바로 검색하기</h3>
                <SearchBar />

                <div className="flex justify-center "></div>

                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* AI 추천 쿠폰 */}
                <h4 className="text-[20px] font-semibold leading-snug pt-[12px]">AI가 추천하는 오늘의 쿠폰</h4>
                <div className="flex justify-center ml-[2px]">

                    <WidthCoupon className="pb-20" />

                </div>
            </main>

            <HomeBottomNav />
        </div>
    );
}
