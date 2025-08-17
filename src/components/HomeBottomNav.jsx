import { NavLink } from 'react-router-dom';

import aiIcon from '../assets/icons/Ai.png';
import locationIcon from '../assets/icons/Map.png';
import homeIcon from '../assets/icons/Home.png';
import couponIcon from '../assets/icons/Coupon.png';
import mypageIcon from '../assets/icons/User.png';

// 각 페이지로 넘어갈때 주황색으로 활성화
import aiIconActive from '../assets/icons/Main_ai.png';
import locationIconActive from '../assets/icons/Main_map.png';
import homeIconActive from '../assets/icons/Main_home.png';
import couponIconActive from '../assets/icons/Main_coupon.png';
import mypageIconActive from '../assets/icons/Main_user.png';

export default function BottomNav() {
    const menus = [
        { to: '/ai', label: 'AI 추천', icon: aiIcon, activeIcon: aiIconActive },
        { to: '/mapPage', label: '주변 탐색', icon: locationIcon, activeIcon: locationIconActive },
        { to: '/home', label: '홈', icon: homeIcon, activeIcon: homeIconActive },
        { to: '/couponbook', label: '내 쿠폰북', icon: couponIcon, activeIcon: couponIconActive },
        { to: '/mypage', label: '마이페이지', icon: mypageIcon, activeIcon: mypageIconActive },
    ];

    return (
        <nav
            className="justify-centerh-[56px] px-[20px] bg-white border-t flex justify-between items-center px-5"
            style={{
                width: '430px',
                height: '76px',
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: '20px',
                paddingRight: '20px',
                gap: '10px',
                zIndex: '100'
            }}
        >
            {menus.map((menu) => (
                <NavLink key={menu.to} to={menu.to} className="flex flex-col items-center justify-center">
                    {({ isActive }) => (
                        <>
                            <img
                                src={isActive ? menu.activeIcon : menu.icon}
                                alt={menu.label}
                                className="w-6 h-6 mb-1"
                            />
                            <span
                                style={{
                                    color: isActive ? '#F2592A' : '#8B6A55',
                                    fontSize: '14px',
                                }}
                            >
                                {menu.label}
                            </span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
}
