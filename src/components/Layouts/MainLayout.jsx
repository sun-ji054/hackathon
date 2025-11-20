import BottomNav from '../HomeBottomNav';
import Chatbot from '../Chatbot';

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col h-full">
            {/* 페이지 내용 */}
            <main className="flex-1 overflow-y-auto scrollbar-hide">{children}</main>
            <BottomNav />
            <Chatbot />
        </div>
    );
}
