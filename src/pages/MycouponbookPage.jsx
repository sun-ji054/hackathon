import CouponbookHeaderBar from '../components/CouponbookHeaderBar';
import HomeBottomNav from '../components/HomeBottomNav';
import CouponCarousel from '../components/CouponCarousel';
import lineImg from '../assets/Line-35.png';
import CouponStats from '../components/CouponStats';
import SearchBar from '../components/SearchBar';
import MapSort from '../components/MapSort';
import WidthCoupon from '../components/WidthCoupon';

export default function MycouponbookPage() {
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
    ];

    return (
        <div className="flex flex-col h-full bg-[#FCF9F7]">
            <CouponbookHeaderBar />
            <main className="flex-1 overflow-y-auto px-4 py-4 pt-[40px]">
                {/* 내 쿠폰북 */}
                <section className="text-left space-y-1">
                    <h1 className="text-[24px] font-bold leading-snug">내 쿠폰북</h1>
                    <p className="text-[16px] font-mediup leading-sung ">저장한 모든 쿠폰들을 볼 수 있어요.</p>
                </section>

                <CouponStats className="mt-[21px]" />

                {/* 라인 이미지 */}
                <div className="flex justify-center pt-[20px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 즐겨찾는 쿠폰 */}
                <h2 className="text-[20px] font-semibold leading-snug pt-[23px]">즐겨찾기</h2>
                <p className="text-[16px] font-mediup leading-[30px] ">자주 가는 장소의 쿠폰들</p>
                {/* 쿠폰 카드 영역 */}
                <div className="pt-[23px]">
                    <CouponCarousel coupons={coupons} />
                </div>
                {/* 라인 이미지 */}
                <div className="flex justify-center pt-[20px]"></div>
                <img src={lineImg} alt="라인 이미지" className="w-full h-auto" />

                {/* 저장한 모든 쿠폰 */}
                <h3 className="text-[20px] font-semibold leading-snug pt-[23px] ">저장한 모든 쿠폰</h3>
                <SearchBar className="pt-[23px] " />
                <div className="ml-[17px] mt-[10px]">
                    <MapSort />
                </div>

                <div className="flex justify-center mt-[14px]">
                    <WidthCoupon className="pb-20" />
                </div>
            </main>
        </div>
    );
}
