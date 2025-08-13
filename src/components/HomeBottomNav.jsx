import { NavLink } from 'react-router-dom';

const items = [
    { to: '/ai', label: 'AI' },
    { to: '/stores', label: 'GPS 지도' },
    { to: '/', label: '홈' },
    { to: '/couponbook', label: '내 쿠폰북' },
    { to: '/mypage', label: '마이페이지' },
];

export default function HomeBottomNav() {
    return (
        <nav
            className="sticky bottom-0 z-20 bg-white/95 backdrop-blur border-t
                    pb-[max(10px,env(safe-area-inset-bottom))]"
        >
            <ul className="flex justify-around items-center gap-2 px-2 py-2">
                {items.map((it) => (
                    <li key={it.to}>
                        <NavLink
                            to={it.to}
                            className={({ isActive }) =>
                                `inline-flex flex-col items-center justify-center
                 w-[72px] h-[56px] rounded-full
                 ${isActive ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`
                            }
                        >
                            <span className="text-sm">{it.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
