import Reveal from './Reveal';
import PhotoPlaceholder from './PhotoPlaceholder';

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />

            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2">
                <div className="text-center md:text-left">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-sky-700 backdrop-blur">
                            Turmero · Estado Aragua
                        </span>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="mt-6 font-display text-5xl leading-tight text-sky-900 sm:text-6xl lg:text-7xl">
                            Iglesia Comunidad Cristiana
                            <span className="block text-sky-500">para la Familia &quot;El Salvador&quot;</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-6 max-w-md text-lg  leading-relaxed text-slate-600 md:mx-0">
                            En donde se reúne la gente más feliz del mundo!
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <blockquote className="mt-10 rounded-2xl border border-sky-200/60 bg-white/70 p-6 shadow-sm backdrop-blur">
                            <p className="font-display text-2xl leading-snug text-sky-800 sm:text-3xl">
                                &ldquo;¡Mirad cuán bueno y cuán delicioso es Habitar los hermanos juntos en armonía!.&rdquo;
                            </p>
                            <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                                <span className="h-px w-8 bg-sky-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">
                                    Salmo 133:3 · RVR1960
                                </span>
                            </div>
                        </blockquote>
                    </Reveal>
                </div>

                <Reveal delay={0.15} y={40}>
                    <PhotoPlaceholder
                        className="aspect-[4/3] w-full rounded-3xl"
                        label="Fotografía de la iglesia"
                    />
                </Reveal>
            </div>
        </section>
    );
}
