import BannerCarousel from '../components/BannerCarousel';

export default function MycouponbookPage() {
    const banners = [
        'https://images.unsplash.com/photo-1521017432531-fbd92d1cf4bd?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
    ];

    return (
        <div className="flex flex-col h-full text-zinc-900">
            {/* 상단 헤더 */}
            {/* <HeaderBar /> */}

            <main className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
                {/* 배너 카드 */}
                <section className="rounded-2xl border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between pb-2">
                        <h2 className="text-[18px] font-semibold">
                            자주 가는 단골집의
                            <br />
                            스탬프 현황을 구경하세요!
                        </h2>
                        <span aria-hidden>🏆</span>
                    </div>
                    <BannerCarousel items={banners} interval={3000} />
                </section>

                {/* 아래 쿠폰 리스트, 필터 등은 기존대로 */}
            </main>

            {/* <BottomNav /> */}
        </div>
    );
}
