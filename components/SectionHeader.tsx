import Reveal from './Reveal';

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
    return (
        <Reveal className="mx-auto max-w-2xl text-center">
            {eyebrow && (
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-700">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-display text-4xl leading-snug text-sky-900 sm:text-5xl">{title}</h2>
            {subtitle && <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">{subtitle}</p>}
        </Reveal>
    );
}
