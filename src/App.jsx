import { Routes, Route } from 'react-router-dom';
import MobileFrame from './components/MobileFrame';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MycouponbookPage from './pages/MycouponbookPage';

// 임시 페이지(파일 없을 때 에러 방지용)
const AiPage = () => <div className="p-4">AI 페이지 (TODO)</div>;
const StoresPage = () => <div className="p-4">GPS 지도 (TODO)</div>;
const MyPage = () => <div className="p-4">마이페이지 (TODO)</div>;
const Settings = () => <div className="p-4">설정 (TODO)</div>;
const Notifications = () => <div className="p-4">알림 (TODO)</div>;

export default function App() {
    return (
        <MobileFrame>
            <Routes>
                {/* 홈 */}
                <Route path="/" element={<HomePage />} />

                {/* 로그인 */}
                <Route path="/loginPage" element={<LoginPage />} />

                {/* 온보딩(수정 끝나면 사용) */}
                {/* <Route path="/onboard" element={<OnboardPage />} /> */}

                {/* 하단 네비 대상 페이지들 */}
                <Route path="/ai" element={<AiPage />} />
                <Route path="/stores" element={<StoresPage />} />
                <Route path="/couponbook" element={<MycouponbookPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notifications />} />

                {/* 기타 → 홈으로 */}
                <Route path="*" element={<HomePage />} />
            </Routes>
        </MobileFrame>
    );
}
