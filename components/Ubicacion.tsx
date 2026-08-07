import PhotoPlaceholder from './PhotoPlaceholder';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const servicios = [
    'Culto Dominical y reuniones de oración',
    'Espacio cómodo para toda la familia',
    'Acceso por la calle de servicio',
];

export default function Ubicacion() {
    return (
        <section id="ubicacion" className="border-y border-sky-200/50 bg-skywash py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Visítanos"
                    title="Ubicación"
                    subtitle="Estamos a un paso de tu hogar. Ven y conócenos."
                />

                <Reveal className="mt-14 grid overflow-hidden rounded-3xl border border-sky-200/60 bg-white shadow-sm md:grid-cols-2">
                    <div className="flex flex-col justify-center p-8 sm:p-12">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-skywash text-sky-700">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.6}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21s-7-4.35-9.5-8.5C.9 9.5 2.5 6 6 6c2 0 3.5 1 4.5 2.5L12 10l1.5-1.5C14.5 7 16 6 18 6c3.5 0 5.1 3.5 3.5 6.5C19 16.65 12 21 12 21z"
                                />
                                <circle cx="12" cy="10" r="2.5" />
                            </svg>
                        </span>

                        <h3 className="mt-5 font-display text-3xl text-sky-900">Dónde estamos</h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            Turmero, Estado Aragua. Sector La Julia, antes del retorno de Las
                            Banderas, por la calle de servicio.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {servicios.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                                    <svg
                                        className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-sky-200/60 md:border-l md:border-t-0">
                        <PhotoPlaceholder
                            className="h-full min-h-72 w-full"
                            label="Mapa de ubicación (incrustar Google Maps)"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
