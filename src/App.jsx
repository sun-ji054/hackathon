import { Routes, Route } from 'react-router-dom';
import OnboardPage from "./pages/OnboardPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MobileFrame from './components/MobileFrame';
import HomePage from './pages/HomePage';
import MycouponbookPage from './pages/MycouponbookPage';
import MapPage from './pages/MapPage';
import MapStorePage from './pages/MapStorePage';

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
                <Route path="/home" element={<HomePage />} />

                {/* 온보딩(수정 끝나면 사용) */}
                <Route path="/" element={<OnboardPage />} />

                {/* 로그인 */}
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/signUpPage" element={<SignUpPage />} />

                {/* 하단 네비 대상 페이지들 */}
                <Route path="/ai" element={<AiPage />} />
                <Route path="/stores" element={<StoresPage />} />
                <Route path="/couponbook" element={<MycouponbookPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/mapPage" element={<MapPage />} />
                <Route path="/mapStorePage" element={<MapStorePage />} />

                {/* 기타 → 홈으로 */}
                <Route path="*" element={<HomePage />} />
            </Routes>
        </MobileFrame>
    );
}
