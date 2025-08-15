import BottomNav from '../HomeBottomNav';

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            {/* 페이지 내용 */}
            <main className="flex-1 overflow-y-auto">{children}</main>
            <BottomNav />
        </div>
    );
}
