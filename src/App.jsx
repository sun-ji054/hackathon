import { Routes, Route } from 'react-router-dom';
import MobileFrame from './components/MobileFrame';
import MainLayout from './components/Layouts/MainLayout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MycouponbookPage from './pages/MycouponbookPage';
import UseCouponPage from './pages/UseCouponPage';
import CouponDetailsPage from './pages/CouponDetailsPage';
import EarnStampsPage from './pages/EarnStampsPage';

// 임시 페이지(파일 없을 때 에러 방지용)
const AiPage = () => <div className="p-4">AI 페이지 (TODO)</div>;
const StoresPage = () => <div className="p-4">GPS 지도 (TODO)</div>;
const MyPage = () => <div className="p-4">마이페이지 (TODO)</div>;
// 온보딩 & 회원가입 페이지 (파일 없을 때 에러 방지용)
const OnboardPage = () => <div className="p-4">온보딩 페이지 (TODO)</div>;
const SignUpPage = () => <div className="p-4">회원가입 페이지 (TODO)</div>;

export default function App() {
    return (
        <MobileFrame>
            <Routes>
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
                    path="/stores"
                    element={
                        <MainLayout>
                            <StoresPage />
                        </MainLayout>
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

                {/* 하단바 없는 페이지 */}
                <Route path="/" element={<OnboardPage />} />
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
