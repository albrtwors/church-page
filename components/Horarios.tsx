'use client';

import { useState } from 'react';
import { horarios } from '@/data/horarios';
import ImageGalleryPanel from './ImageGalleryPanel';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Horarios() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = horarios[selectedIndex];

    return (
        <section id="horarios" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Nuestras reuniones"
                    title="Horarios de Actividades"
                    subtitle="Un espacio para cada etapa de la vida. Te esperamos con los brazos abiertos."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {horarios.map((horario, i) => {
                        const isSelected = i === selectedIndex;
                        return (
                            <Reveal
                                as="article"
                                key={horario.titulo}
                                delay={i * 0.1}
                                onClick={() => setSelectedIndex(i)}
                                onKeyDown={(event: React.KeyboardEvent) => {
                                    if (event.key === 'Enter' || event.key === ' ') setSelectedIndex(i);
                                }}
                                aria-current={isSelected}
                                tabIndex={0}
                                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                                    isSelected
                                        ? `border-2 ring-2 ring-offset-2 ring-offset-cloud ${
                                              horario.destacado ? 'border-white ring-sky-300/70' : 'border-sky-500 ring-sky-400/50'
                                          }`
                                        : horario.destacado
                                          ? 'border border-transparent'
                                          : 'border border-sky-200/60 hover:border-sky-300'
                                } ${
                                    horario.destacado
                                        ? 'bg-gradient-to-br from-sky-600 to-sky-900 text-white'
                                        : 'bg-white text-slate-700'
                                }`}
                            >
                                {horario.destacado && (
                                    <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-sky-100">
                                        Principal
                                    </span>
                                )}

                                {isSelected && (
                                    <span
                                        className={`absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-md ${
                                            horario.destacado ? 'bg-white text-sky-800' : 'bg-sky-600 text-white'
                                        }`}
                                    >
                                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21zM12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                        Mostrando fotos
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
                            </Reveal>
                        );
                    })}
                </div>

                <ImageGalleryPanel
                    title={`Fotos de ${selected.titulo}`}
                    subtitle={`${selected.dia} · haz clic en otro culto para ver sus fotos.`}
                    images={selected.imagenes}
                    alt={selected.titulo}
                    label={`Fotografía de ${selected.titulo}`}
                />
            </div>
        </section>
    );
}
