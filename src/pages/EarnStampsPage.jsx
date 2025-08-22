import HomeBottomNav from '../components/HomeBottomNav';
import lineImg from '../assets/Line-35.png';
import Line from '../assets/icons/StampLine.png';

import CloseIcon from '../assets/icons/Close_LG.png';
import PreviousIcon from '../assets/icons/Arrow_Left_LG.png';
import ThumbsupIcon from '../assets/icons/Success.png';
import { useNavigate } from 'react-router-dom';
import AddStamps from '../components/AddStamps';

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
                    onClick={() => navigate('/couponbook')}
                />
            </div>

            {/* 상단 영역 */}
            <div className="px-5 pt-[67px]">
                <h1 className="text-[24px] font-bold leading-snug">스탬프 적립 성공!</h1>
                <p className="text-[16px] leading-snug">새로운 스탬프가 추가되었어요.</p>
            </div>

            {/* 쿠폰 */}
            <AddStamps />

            <div className="flex justify-center mt-7">
                <img src={ThumbsupIcon} alt="Success" className="w-[210px] h-[210px]" />
            </div>

            {/* 하단바 */}
            <HomeBottomNav />
        </div>
    );
}
