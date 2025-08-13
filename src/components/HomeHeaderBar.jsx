import { Link } from 'react-router-dom';

export default function HomeHeaderBar() {
    return (
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
            <div className="flex items-center justify-between px-4 py-3">
                {/* logo */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center w-16 h-10 border rounded-lg font-semibold"
                >
                    logo
                </Link>

                {/* icons */}
                <div className="flex items-center gap-3 text-zinc-700">
                    <Link to="/notifications" aria-label="알림" className="p-2 rounded-full hover:bg-zinc-100">
                        {/* bell */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 3a6 6 0 0 0-6 6v2.5c0 .6-.24 1.17-.66 1.59L4 16h16l-1.34-2.91c-.42-.42-.66-.99-.66-1.59V9a6 6 0 0 0-6-6Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path d="M9.5 18a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </Link>
                    <Link to="/settings" aria-label="설정" className="p-2 rounded-full hover:bg-zinc-100">
                        {/* gear */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M19.5 12a7.5 7.5 0 0 0-.12-1.31l1.92-1.49-2-3.46-2.33.75A7.55 7.55 0 0 0 15 4.6l-.38-2.45H9.38L9 4.6a7.55 7.55 0 0 0-1.97.89l-2.33-.75-2 3.46 1.92 1.49A7.5 7.5 0 0 0 4.5 12c0 .45.04.89.12 1.31l-1.92 1.49 2 3.46 2.33-.75c.61.4 1.27.71 1.97.89l.38 2.45h5.24l.38-2.45c.7-.18 1.36-.49 1.97-.89l2.33.75 2-3.46-1.92-1.49c.08-.42.12-.86.12-1.31Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="px-4 pb-2 text-right text-xs text-zinc-500">
                <Link to="/mypage" className="hover:underline">
                    마이페이지 &gt;
                </Link>
            </div>
        </header>
    );
}
