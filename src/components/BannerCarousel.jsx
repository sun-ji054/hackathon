import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * items: 이미지 url 배열
 * interval: 자동 전환(ms)
 */
export default function BannerCarousel({ items = [], interval = 3000, className = '' }) {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);
    const count = items.length;
    const clamp = (i) => (i + count) % count;

    const scrollTo = useCallback((i, behavior = 'smooth') => {
        const el = trackRef.current;
        if (!el) return;
        const child = el.children[i];
        if (child) child.scrollIntoView({ behavior, inline: 'center', block: 'nearest' });
        setIndex(i);
    }, []);

    // 수동 스크롤 시 현재 index 동기화
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        const onScroll = () => {
            const i = Math.round(el.scrollLeft / el.clientWidth);
            if (i !== index) setIndex(i);
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, [index]);

    // 자동 전환 (호버/터치 시 일시정지)
    const [paused, setPaused] = useState(false);
    useEffect(() => {
        if (paused || count <= 1) return;
        const id = setInterval(() => {
            scrollTo(clamp(index + 1));
        }, interval);
        return () => clearInterval(id);
    }, [paused, index, count, interval, scrollTo]);

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
        >
            {/* 트랙 */}
            <div
                ref={trackRef}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth
                   rounded-2xl"
                style={{ scrollbarWidth: 'none' }} /* FF */
            >
                {items.map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0 snap-center px-1">
                        <div className="w-full overflow-hidden rounded-2xl">
                            {/* 비율 유지*/}
                            <div className="relative w-full aspect-[16/9] bg-zinc-200">
                                <img
                                    src={src}
                                    alt={`banner-${i + 1}`}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 좌/우 버튼 */}
            {count > 1 && (
                <>
                    <button
                        type="button"
                        onClick={() => scrollTo(clamp(index - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center
                       rounded-full bg-white/90 shadow border"
                        aria-label="이전 배너"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollTo(clamp(index + 1))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center
                       rounded-full bg-white/90 shadow border"
                        aria-label="다음 배너"
                    >
                        ›
                    </button>
                </>
            )}

            {/* 점 인디케이터 */}
            {count > 1 && (
                <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            aria-label={`배너 ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full border ${
                                i === index ? 'bg-zinc-900 border-zinc-900' : 'bg-white/80 border-zinc-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
