import BottomNav from "../HomeBottomNav";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      {/* 페이지 내용 */}
      <main className="flex-1 overflow-y-auto scrollbar-hide">{children}</main>
      <BottomNav />
    </div>
  );
}
