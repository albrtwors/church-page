type PhotoPlaceholderProps = {
    className?: string;
    label?: string;
    iconClassName?: string;
};

export default function PhotoPlaceholder({
    className = '',
    label = 'Coloca aquí la fotografía',
    iconClassName = '',
}: PhotoPlaceholderProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-sky-300 bg-skywash text-center text-sky-400 ${className}`}
        >
            <svg
                className={`h-10 w-10 ${iconClassName}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21zM12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
            </svg>
            <span className="max-w-xs text-[10px] font-bold uppercase tracking-widest text-sky-500">
                {label}
            </span>
        </div>
    );
}
