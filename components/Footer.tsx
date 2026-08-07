import Reveal from './Reveal';

const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#pastores', label: 'Pastores' },
    { href: '#ministerios', label: 'Ministerios' },
    { href: '#horarios', label: 'Horarios' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
    return (
        <footer className="bg-sky-950 py-12 text-sky-100">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 md:grid-cols-3">
                    <Reveal>
                        <p className="font-display text-3xl text-white">El Salvador</p>
                        <p className="mt-2 text-sm leading-relaxed text-sky-300">
                            Iglesia Comunidad Cristiana para la Familia. Un hogar de fe,
                            esperanza y amor en Turmero.
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                            Navegación
                        </p>
                        <ul className="mt-4 space-y-2">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-sky-200 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                            Contáctanos
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-sky-200">
                            <li>Turmero, Estado Aragua · La Julia</li>
                            <li>Antes del retorno de Las Banderas</li>
                            <li>info@iglesiaelsalvador.org</li>
                        </ul>
                    </Reveal>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-sky-900 pt-6 text-xs text-sky-400 sm:flex-row">
                    <p>© {new Date().getFullYear()} Iglesia Comunidad Cristiana para la Familia &quot;El Salvador&quot;.</p>
                    <p>RIF: J-00000000-0</p>
                </div>
            </div>
        </footer>
    );
}
