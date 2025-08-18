// src/components/HomeCard.jsx
import { Link } from 'react-router-dom';
import AiIcon from '../assets/icons/Ai_white.png';
import MapIcon from '../assets/icons/Map_white.png';
import CouponIcon from '../assets/icons/Coupon_white.png';

export default function HomeCard({ to, children }) {
    // 버튼별 아이콘 경로 매핑
    const iconMap = {
        'AI 추천': AiIcon,
        '주변 탐색': MapIcon,
        '내 쿠폰북': CouponIcon,
    };

    return (
        <Link
            to={to}
            className="flex flex-col items-center justify-center gap-2
                 w-[106px] h-[102px] rounded-full bg-[#F2592A] text-white
                 shadow-md hover:opacity-90 transition"
        >
            <img src={iconMap[children]} alt={children} />
            <span className="text-sm font-medium">{children}</span>
        </Link>
    );
}
