import HomeHeaderBar from '../components/HomeHeaderBar';
import HomeCard from '../components/HomeCard';
import HomeBottomNav from '../components/HomeBottomNav';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="flex flex-col h-full">
            <HomeHeaderBar />

            {/* 본문 */}
            <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                <section className="text-left space-y-1">
                    <h1 className="text-[20px] font-semibold leading-snug">
                        000님 안녕하세요!
                        <br />
                        오늘은 어디를 가볼까요?
                    </h1>
                </section>

                <section className="space-y-4">
                    <HomeCard to="/couponbook">
                        내 쿠폰북
                        <br />
                        간단히 보여주기
                    </HomeCard>
                    <HomeCard to="/stores">
                        GPS 기반
                        <br />
                        가게 지도
                    </HomeCard>
                    <HomeCard to="/ai">AI 큐레이션</HomeCard>
                </section>
            </main>

            <HomeBottomNav />
        </div>
    );
}
