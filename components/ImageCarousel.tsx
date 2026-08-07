'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import PhotoPlaceholder from './PhotoPlaceholder';

type ImageCarouselProps = {
    images: string[];
    alt?: string;
    label?: string;
    className?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
};

export default function ImageCarousel({
    images,
    alt = 'Imagen',
    label = 'Fotografía',
    className = '',
    autoPlay = false,
    autoPlayInterval = 4000,
}: ImageCarouselProps) {
    const slides = images.length > 0 ? images : [''];
    const count = slides.length;
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const showControls = count > 1;
    const showDots = count > 1 && count <= 10;

    const goTo = (index: number) => setCurrent((((index % count) + count) % count));

    useEffect(() => {
        if (!autoPlay || count < 2 || paused) return;
        timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % count), autoPlayInterval);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [autoPlay, autoPlayInterval, count, paused]);

    const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowRight') goTo(current + 1);
        if (event.key === 'ArrowLeft') goTo(current - 1);
    };

    return (
        <div
            className={`group relative select-none overflow-hidden rounded-2xl border border-sky-200/60 bg-skywash shadow-lg shadow-sky-900/10 ${className}`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative aspect-[16/10] w-full">
                {slides[current] ? (
                    <Image
                        src={slides[current]}
                        alt={`${alt} ${current + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                    />
                ) : (
                    <PhotoPlaceholder
                        className="h-full w-full rounded-none"
                        label={`${label} ${current + 1} de ${count}`}
                    />
                )}

                {showControls && (
                    <>
                        <button
                            type="button"
                            onClick={() => goTo(current - 1)}
                            aria-label="Imagen anterior"
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-sky-900 shadow-sm backdrop-blur transition-all hover:bg-white hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 opacity-80"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => goTo(current + 1)}
                            aria-label="Imagen siguiente"
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-sky-900 shadow-sm backdrop-blur transition-all hover:bg-white hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 opacity-80"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {showControls && (
                <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-2">
                    {showDots ? (
                        slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Ir a la imagen ${i + 1}`}
                                aria-current={i === current}
                                className={`pointer-events-auto h-2 rounded-full transition-all duration-300 ${
                                    i === current ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white'
                                }`}
                            />
                        ))
                    ) : (
                        <span className="rounded-full bg-sky-950/60 px-3 py-1 text-[10px] font-bold text-white backdrop-blur">
                            {current + 1} / {count}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
