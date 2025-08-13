import { Link } from 'react-router-dom';

export default function HomeCard({ to, children }) {
    return (
        <Link
            to={to}
            className="block rounded-2xl border bg-zinc-100 text-zinc-800 shadow-sm
                 px-4 py-10 md:py-12 hover:bg-zinc-200 transition-colors"
        >
            <div className="text-center text-[18px] leading-relaxed font-medium">{children}</div>
        </Link>
    );
}
