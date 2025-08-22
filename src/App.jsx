import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
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

import { useLocationStore } from './store/useLocationStore';
import ProfilePage from './pages/ProfilePage';

// 임시 페이지(파일 없을 때 에러 방지용)
const AiPage = () => <div className="p-4">AI 페이지 (TODO)</div>;

export default function App() {
    const fetchLocations = useLocationStore((state) => state.fetchLocations);
    useEffect(() => {
        fetchLocations();
    }, [fetchLocations]);

    return (
        <MobileFrame>
            <Routes>
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
                <Route path="/mapPage" element={<MapPage />} />
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
                    path="/profilePage"
                    element={
                        <MainLayout>
                            <ProfilePage />
                        </MainLayout>
                    }
                />
                <Route path="/mapStore" element={<MapStorePage />} />

                {/* 하단바 없는 페이지 */}

                {/* 로그인 */}
                <Route path="/" element={<LoginPage />} />
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
