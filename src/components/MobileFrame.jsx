export default function MobileFrame({ children, className = '' }) {
    return (
        <div className="min-h-screen grid place-items-center bg-zinc-100">
            <div
                className={`relative w-full max-w-[430px] h-[100dvh] min-h-[100svh] bg-white overflow-hidden sm:rounded-3xl sm:shadow-2xl ${className}`}
                style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
                {children}
            </div>
        </div>
    );
}
