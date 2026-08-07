import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function MisionVision() {
    return (
        <section id="nosotros" className="border-y border-sky-200/50 bg-skywash py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Quiénes somos"
                    title="Misión y Visión"
                    subtitle="Los pilares espirituales sobre los cuales edificamos cada familia de nuestra congregación."
                />

                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    <Reveal as="article" className="rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:p-10" delay={0.1}>
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-skywash font-display text-3xl leading-none text-sky-700">
                                M
                            </span>
                            <h3 className="font-display text-3xl text-sky-900">Nuestra Misión</h3>
                        </div>
                        <p className="mt-6 text-sm leading-relaxed text-slate-600">{lorem}</p>
                    </Reveal>

                    <Reveal as="article" className="rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:p-10" delay={0.2}>
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-skywash font-display text-3xl leading-none text-sky-700">
                                V
                            </span>
                            <h3 className="font-display text-3xl text-sky-900">Nuestra Visión</h3>
                        </div>
                        <p className="mt-6 text-sm leading-relaxed text-slate-600">{lorem}</p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
