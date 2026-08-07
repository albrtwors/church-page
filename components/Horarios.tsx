'use client';

import { useState } from 'react';
import type { Horario } from '@/data/horarios';
import { horarios } from '@/data/horarios';
import ImageCarouselModal from './ImageCarouselModal';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Horarios() {
    const [selected, setSelected] = useState<Horario | null>(null);

    return (
        <section id="horarios" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Nuestras reuniones"
                    title="Horarios de Actividades"
                    subtitle="Un espacio para cada etapa de la vida. Te esperamos con los brazos abiertos."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {horarios.map((horario, i) => (
                        <Reveal
                            as="article"
                            key={horario.titulo}
                            delay={i * 0.1}
                            onClick={() => setSelected(horario)}
                            onKeyDown={(event: React.KeyboardEvent) => {
                                if (event.key === 'Enter' || event.key === ' ') setSelected(horario);
                            }}
                            tabIndex={0}
                            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                                horario.destacado
                                    ? 'bg-gradient-to-br from-sky-600 to-sky-900 text-white'
                                    : 'border border-sky-200/60 bg-white text-slate-700'
                            }`}
                        >
                            {horario.destacado && (
                                <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-sky-100">
                                    Principal
                                </span>
                            )}

                            <span
                                className={`text-[10px] font-bold uppercase tracking-widest ${
                                    horario.destacado ? 'text-sky-200' : 'text-sky-600'
                                }`}
                            >
                                {horario.dia}
                            </span>
                            <h3
                                className={`mt-2 font-display text-3xl leading-snug ${
                                    horario.destacado ? 'text-white' : 'text-sky-900'
                                }`}
                            >
                                {horario.titulo}
                            </h3>

                            <div className="mt-6">
                                <p
                                    className={`text-4xl font-light tracking-tight ${
                                        horario.destacado ? 'text-sky-200' : 'text-sky-700'
                                    }`}
                                >
                                    {horario.hora}
                                </p>
                                <p
                                    className={`text-xs font-semibold uppercase tracking-wider ${
                                        horario.destacado ? 'text-sky-300' : 'text-slate-400'
                                    }`}
                                >
                                    hasta las {horario.fin}
                                </p>
                            </div>

                            <p
                                className={`mt-6 text-sm leading-relaxed ${
                                    horario.destacado ? 'text-sky-100' : 'text-slate-500'
                                }`}
                            >
                                {horario.descripcion}
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
                                    Ver {horario.imagenes.length} foto{horario.imagenes.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <ImageCarouselModal
                open={selected !== null}
                onClose={() => setSelected(null)}
                title={selected?.titulo}
                subtitle={selected ? `${selected.dia} · ${selected.imagenes.length} foto${selected.imagenes.length !== 1 ? 's' : ''}` : undefined}
                images={selected?.imagenes ?? []}
                label={selected ? `Fotografía de ${selected.titulo}` : undefined}
            />
        </section>
    );
}
