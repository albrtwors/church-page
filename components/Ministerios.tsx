'use client';

import { useState } from 'react';
import type { Ministerio } from '@/data/ministerios';
import { ministerios } from '@/data/ministerios';
import ImageCarouselModal from './ImageCarouselModal';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const icons: Record<Ministerio['icon'], React.ReactNode> = {
    adoracion: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </>
    ),
    misiones: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z" />
        </>
    ),
    jovenes: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2.13a4 4 0 10-6 0" />
            <circle cx="12" cy="7" r="4" />
        </>
    ),
    servidores: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-9.5-8.5C.9 9.5 2.5 6 6 6c2 0 3.5 1 4.5 2.5L12 10l1.5-1.5C14.5 7 16 6 18 6c3.5 0 5.1 3.5 3.5 6.5C19 16.65 12 21 12 21z" />
        </>
    ),
    protocolo: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.9 5.9 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 19.9l1.2-6.5L2.5 8.8l6.6-.9L12 2z" />
        </>
    ),
    audiovisual: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.5-2.8v9.6L15 14M3 6h9a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </>
    ),
    sonido: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4h4l6 5V5l-6 5H3zM16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" />
        </>
    ),
    pastoral: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
        </>
    ),
    escuela: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a7.49 7.49 0 00-7.5 7.5 7.49 7.49 0 007.5 7.5 7.49 7.49 0 007.5-7.5V6.75a3.75 3.75 0 00-7.5 0v1.5a3.75 3.75 0 007.5 0" />
        </>
    ),
    evangelismo: (
        <>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h14v8H3zM17 11l4-2v6l-4-2" />
        </>
    ),
};

export default function Ministerios() {
    const [selected, setSelected] = useState<Ministerio | null>(null);

    return (
        <section id="ministerios" className="border-y border-sky-200/50 bg-skywash py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Sirviendo al Señor"
                    title="Ministerios"
                    subtitle="Cada ministerio tiene un lugar para ti. Encuentra el tuyo y crece en el servicio."
                />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {ministerios.map((ministerio, i) => (
                        <Reveal
                            as="article"
                            key={ministerio.nombre}
                            delay={i * 0.06}
                            onClick={() => setSelected(ministerio)}
                            onKeyDown={(event: React.KeyboardEvent) => {
                                if (event.key === 'Enter' || event.key === ' ') setSelected(ministerio);
                            }}
                            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-sky-200/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                            tabIndex={0}
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-skywash text-sky-700">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                >
                                    {icons[ministerio.icon]}
                                </svg>
                            </span>
                            <h3 className="mt-4 font-display text-2xl leading-snug text-sky-900">
                                {ministerio.nombre}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-500">
                                {ministerio.descripcion}
                            </p>

                            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-sky-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sky-900">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21zM12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </span>
                                <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-900">
                                    Ver {ministerio.imagenes.length} foto{ministerio.imagenes.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <ImageCarouselModal
                open={selected !== null}
                onClose={() => setSelected(null)}
                title={selected?.nombre}
                subtitle={selected ? `${selected.imagenes.length} foto${selected.imagenes.length !== 1 ? 's' : ''}` : undefined}
                images={selected?.imagenes ?? []}
                label={selected ? `Fotografía de ${selected.nombre}` : undefined}
            />
        </section>
    );
}
