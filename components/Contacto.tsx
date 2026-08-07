'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const CHURCH_EMAIL = 'info@iglesiaelsalvador.org';

export default function Contacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Consulta desde la web · ${nombre}`);
        const body = encodeURIComponent(`Nombre: ${nombre}\nCorreo de contacto: ${email}\n\n${mensaje}`);
        window.location.href = `mailto:${CHURCH_EMAIL}?subject=${subject}&body=${body}`;
        setEnviado(true);
    };

    const inputClass =
        'w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-200';

    return (
        <section id="contacto" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow="Escríbenos"
                    title="Envíanos tu Consulta"
                    subtitle="¿Tienes una pregunta o quieres saber más sobre nosotros? Estaremos encantados de responderte."
                />

                <Reveal className="mx-auto mt-14 max-w-xl rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="nombre" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sky-700">
                                Nombre
                            </label>
                            <input
                                id="nombre"
                                type="text"
                                required
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Tu nombre"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sky-700">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tucorreo@ejemplo.com"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label htmlFor="mensaje" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sky-700">
                                Mensaje
                            </label>
                            <textarea
                                id="mensaje"
                                required
                                rows={5}
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                placeholder="Escribe tu consulta aquí..."
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-br from-sky-600 to-sky-800 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-opacity hover:opacity-90"
                        >
                            Enviar consulta
                        </button>
                    </form>

                    <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
                        {enviado
                            ? 'Se abrirá tu aplicación de correo para completar el envío.'
                            : `También puedes escribirnos directamente a ${CHURCH_EMAIL}`}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
