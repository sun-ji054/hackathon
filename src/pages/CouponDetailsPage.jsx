import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import StoreInfoCard from '../components/StoreInfoCard';
import CloseIcon from '../assets/icons/Close_LG.png';

import { useNavigate } from 'react-router-dom';

export default function CouponDetailsPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-[#F2592A] text-white">
            <div className="flex justify-end px-4 pt-4">
                <img
                    src={CloseIcon}
                    alt="close"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => navigate('/couponbook')}
                />
            </div>
            <div className="flex flex-col h-full bg-[#F2592A] text-white">
                {/* 상단 영역 */}
                <div className="px-4 pt-[53px]">
                    <h1 className="text-[24px] font-bold leading-snug">쿠폰 상세보기</h1>
                    <p className="text-[16px] font-medium leading-snug">스탬프 현황을 볼 수 있어요.</p>
                </div>

                {/* 메인 스크롤 영역 */}
                <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4">{/* TODO: 상세 쿠폰 내용 */}</main>

                <StoreInfoCard />

                {/* 라인 이미지 */}

                {/* 하단바 */}
                <HomeBottomNav />
            </div>
        </div>
    );
}
