import { useMemo } from 'react';
import stampOrange from '../assets/icons/Stamp.png';
import stampGray from '../assets/icons/Empty.png';

export default function AddStamps({
    total = 10,
    used = 9,
    className = '',
    glow = true, // 마지막 스탬프 글로우 그림자
    animate = true, // 마지막 스탬프 애니메이션
}) {
    const lastFilledIndex = useMemo(() => (used > 0 ? Math.min(used - 1, total - 1) : -1), [used, total]);

    return (
        <div
            className={`bg-[#FCFAF7] rounded-3xl w-[311px] h-[151px] mx-auto mt-5 shadow-md p-5 relative ${className}`}
        >
            {/* 내부 점선 라운드 보더 */}
            <div className="pointer-events-none absolute inset-[10px] rounded-2xl border-2 border-dashed border-[#8B6A55]" />

            {/* 스탬프 그리드 */}
            <div className="relative z-10 grid grid-cols-5 gap-x-3 gap-y-3 w-full h-full">
                {Array.from({ length: total }).map((_, i) => {
                    const filled = i < used;
                    const isLast = i === lastFilledIndex && filled;

                    return (
                        <div
                            key={`${i}-${isLast ? used : 'static'}`} // used 변경 시 마지막만 리마운트 → 애니 재생
                            className={[
                                'relative w-[44px] h-[44px] mx-auto flex items-center justify-center',
                                glow && isLast ? 'shadow-[0_10px_24px_rgba(242,89,42,0.35)] rounded-full' : '',
                            ].join(' ')}
                        >
                            {/* 확장되는 링 효과 */}
                            {animate && isLast && (
                                <span className="absolute inset-0 rounded-full bg-[#F2592A]/25 animate-ping" />
                            )}

                            {/* 스탬프 이미지 (팝 애니메이션) */}
                            <img
                                src={filled ? stampOrange : stampGray}
                                alt={filled ? `stamp ${i + 1} filled` : `stamp ${i + 1} empty`}
                                className="w-full h-full object-contain"
                                style={
                                    animate && isLast
                                        ? { animation: 'stamp-pop 420ms cubic-bezier(.2,.9,.3,1) both' }
                                        : undefined
                                }
                                draggable={false}
                            />
                        </div>
                    );
                })}
            </div>

            {/* 키프레임 */}
            <style>{`
        @keyframes stamp-pop {
          0%   { transform: scale(0.4) rotate(-10deg); opacity: 0; }
          60%  { transform: scale(1.12) rotate(2deg);  opacity: 1; }
          85%  { transform: scale(0.96) rotate(0deg); }
          100% { transform: scale(1); }
        }
      `}</style>
        </div>
    );
}
