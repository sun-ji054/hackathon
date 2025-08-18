import { Routes, Route } from 'react-router-dom';
import OnboardPage from './pages/OnboardPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MobileFrame from './components/MobileFrame';
import HomePage from './pages/HomePage';
import MycouponbookPage from './pages/MycouponbookPage';
import MapPage from './pages/MapPage';
import MapStorePage from './pages/MapStorePage';
import MainLayout from './components/Layouts/MainLayout';
import UseCouponPage from './pages/UseCouponPage';
import CouponDetailsPage from './pages/CouponDetailsPage';
import EarnStampsPage from './pages/EarnStampsPage';
import MyPage from './pages/MyPage';

// 임시 페이지(파일 없을 때 에러 방지용)
const AiPage = () => <div className="p-4">AI 페이지 (TODO)</div>;
const StoresPage = () => <div className="p-4">GPS 지도 (TODO)</div>;
const MyPageTemp = () => <div className="p-4">마이페이지 (TODO)</div>;

export default function App() {
    return (
        <MobileFrame>
            <Routes>
                <Route path="/" element={<OnboardPage />} />
                {/* 홈 */}
                <Route path="/home" element={<HomePage />} />

                {/* 하단바 포함 페이지 */}
                <Route
                    path="/home"
                    element={
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/ai"
                    element={
                        <MainLayout>
                            <AiPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/mapPage"
                    element={

                            <MapPage />

                    }
                />
                <Route
                    path="/couponbook"
                    element={
                        <MainLayout>
                            <MycouponbookPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/mypage"
                    element={
                        <MainLayout>
                            <MyPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/usecoupon"
                    element={
                        <MainLayout>
                            <UseCouponPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/coupondetails"
                    element={
                        <MainLayout>
                            <CouponDetailsPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/stamps"
                    element={
                        <MainLayout>
                            <EarnStampsPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/mapStore"
                    element={
                        
                            <MapStorePage />
                        
                    }
                />

                {/* 하단바 없는 페이지 */}
                <Route path="/" element={<OnboardPage />} />

                {/* 로그인 */}
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/signUpPage" element={<SignUpPage />} />

                {/* 기타 → 홈 */}
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    }
                />
            </Routes>
        </MobileFrame>
    );
}
