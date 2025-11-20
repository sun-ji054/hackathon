import { Link } from 'react-router-dom';
import AiIcon from '../assets/icons/Ai_white.png';
import MapIcon from '../assets/icons/Map_white.png';
import CouponIcon from '../assets/icons/Coupon_white.png';

export default function HomeCard({ to, onClick, children }) {
    const iconMap = {
        'AI 추천': AiIcon,
        'AI 챗봇': AiIcon,
        '주변 탐색': MapIcon,
        '내 쿠폰북': CouponIcon,
    };

    const content = (
        <>
            <img src={iconMap[children]} alt={children} />
            <span className="text-sm font-medium">{children}</span>
        </>
    );

    const className = "flex flex-col items-center justify-center gap-2 w-[106px] h-[102px] rounded-full bg-[#F2592A] text-white shadow-md hover:opacity-90 transition cursor-pointer";

    if (to) {
        return (
            <Link to={to} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <div onClick={onClick} className={className}>
            {content}
        </div>
    );
}
