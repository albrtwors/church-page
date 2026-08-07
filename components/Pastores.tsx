import type { Pastor } from '@/data/pastores';
import { pastores } from '@/data/pastores';
import PhotoPlaceholder from './PhotoPlaceholder';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const badgeStyles: Record<Pastor['tone'], string> = {
    principal: 'bg-sky-700 text-white',
    adjunto: 'bg-sky-100 text-sky-800 border border-sky-200',
    sede: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
    pastora: 'bg-white text-sky-700 border-2 border-sky-300',
};

export default function Pastores() {
    return (
        <section id="pastores" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Liderazgo"
                    title="Pastores"
                    subtitle="Conoce a las parejas y personas que guían nuestra iglesia con amor y dedicación."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {pastores.map((pastor, i) => (
                        <Reveal
                            as="article"
                            key={pastor.nombres}
                            delay={i * 0.08}
                            className="flex flex-col overflow-hidden rounded-3xl border border-sky-200/60 bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <PhotoPlaceholder
                                className="aspect-[4/3] w-full rounded-none border-0 border-b-2"
                                label="Fotografía"
                            />
                            <div className="flex flex-1 flex-col p-6">
                                <span
                                    className={`self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${badgeStyles[pastor.tone]}`}
                                >
                                    {pastor.rol}
                                </span>
                                <h3 className="mt-4 font-display text-2xl leading-snug text-sky-900">
                                    {pastor.nombres}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {pastor.descripcion}
                                </p>
                            </div>
                        </Reveal>
                    ))}

                    {/* <Reveal as="article" delay={pastores.length * 0.08} className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-sky-300 bg-white/60 p-8 text-center">
                        <p className="font-display text-3xl leading-snug text-sky-800">
                            Tu lugar en el equipo
                        </p>
                        <p className="mt-3 text-sm text-slate-500">
                            Espacio reservado para más siervos del Señor.
                        </p>
                    </Reveal> */}
                </div>
            </div>
        </section>
    );
}
