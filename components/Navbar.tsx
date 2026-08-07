'use client';

import { useState } from 'react';

const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#pastores', label: 'Pastores' },
    { href: '#ministerios', label: 'Ministerios' },
    { href: '#horarios', label: 'Horarios' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/50 bg-white/55 shadow-lg shadow-sky-900/5 backdrop-blur-xl backdrop-saturate-150">
            <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
                <a href="#inicio" className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-sky-800 text-white shadow-md shadow-sky-800/20">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14 4v11.17A3 3 0 1 1 12 19V4h2z" />
                        </svg>
                    </span>
                    <span className="leading-tight">
                        <span className="block font-display text-2xl text-sky-900">El Salvador</span>
                        <span className="block text-[9px] font-bold uppercase tracking-widest text-sky-600">
                            Comunidad Cristiana para la Familia
                        </span>
                    </span>
                </a>

                <ul className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-slate-600 lg:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="rounded-full px-3 py-2 transition-all hover:bg-white/60 hover:text-sky-700"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/50 text-sky-700 backdrop-blur lg:hidden"
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {open && (
                <div className="border-t border-white/40 bg-white/70 backdrop-blur-xl lg:hidden">
                    <ul className="flex flex-col px-6 py-4">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block border-b border-white/40 py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-sky-700"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
