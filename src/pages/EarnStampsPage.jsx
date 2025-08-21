import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import Line from '../assets/icons/StampLine.png';

import CloseIcon from '../assets/icons/Close_LG.png';
import PreviousIcon from '../assets/icons/Arrow_Left_LG.png';
import { useNavigate } from 'react-router-dom';

export default function EarnStampsPage() {
    const navigate = useNavigate();
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
                    onClick={() => navigate('/home')}
                />
            </div>

            {/* 상단 영역 */}
            <div className="px-5 pt-[67px]">
                <h1 className="text-[24px] font-bold leading-snug">스탬프 적립 성공!</h1>
                <p className="text-[16px] leading-snug">새로운 스탬프가 추가되었어요.</p>
            </div>

            {/* 메인 영역 */}
            <main className="flex-1 overflow-y-auto px-4 py-4">
                <div className="bg-[#FCFAF7] rounded-3xl w-[311px] h-[151px] mx-auto mt-5 shadow-md p-5">
                    <div className="flex justify-end mt-[14px]"></div>
                </div>
            </main>

            {/* 하단바 */}
            <HomeBottomNav />
        </div>
    );
}
