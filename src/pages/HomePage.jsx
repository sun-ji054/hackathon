import HomeHeaderBar from '../components/HomeHeaderBar';
import HomeCard from '../components/HomeCard';
import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line 35.png';
import CouponCard from '../components/CouponCard';
import SearchBar from '../components/SearchBar';
import WidthCoupon from '../components/WidthCoupon';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="flex flex-col h-full">
            <HomeHeaderBar />

            {/* 본문 */}
            <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#FCF9F7] pt-[110px]">
                <section className="text-left space-y-1">
                    <h1 className="text-[24px] font-bold leading-snug ">반가워요, 홍길동 님!</h1>
                    <p className="text-[16px] font-mediup leading-sung ">오늘도 새로운 스탬프를 모아보세요.</p>
                </section>

                <section className="flex justify-center gap-3 pt-[21px]">
                    <HomeCard to="/ai">AI 추천</HomeCard>
                    <HomeCard to="/stores">주변 탐색</HomeCard>
                    <HomeCard to="/couponbook">내 쿠폰북</HomeCard>
                </section>

                <div className="flex justify-center pt-[37px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 즐겨찾는 쿠폰 */}
                <h2 className="text-[20px] font-semibold leading-snug pt-[14px]">즐겨찾는 쿠폰</h2>

                {/* 쿠폰 카드 영역 */}
                <div className="flex justify-center pt-[12px]">
                    <CouponCard />
                </div>
                <div className="flex justify-center "></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 바로 검색하기 */}
                <h3 className="text-[20px] font-semibold leading-snug pt-[12px]">바로 검색하기</h3>
                <SearchBar />

                <div className="flex justify-center "></div>

                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* AI 추천 쿠폰 */}
                <h4 className="text-[20px] font-semibold leading-snug pt-[12px]">AI가 추천하는 오늘의 쿠폰</h4>
                <div className="flex justify-center ml-[2px]">
                    <WidthCoupon />
                </div>
            </main>

            <HomeBottomNav />
        </div>
    );
}
