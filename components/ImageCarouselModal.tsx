'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ImageCarousel from './ImageCarousel';

type ImageCarouselModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    images: string[];
    alt?: string;
    label?: string;
};

export default function ImageCarouselModal({
    open,
    onClose,
    title,
    subtitle,
    images,
    alt,
    label,
}: ImageCarouselModalProps) {
    useEffect(() => {
        if (!open) return;
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-sky-950/70 p-4 backdrop-blur-sm sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="w-full max-w-3xl"
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-3 flex items-center justify-between gap-4">
                            <div>
                                {title && (
                                    <h3 className="font-display text-2xl leading-snug text-white drop-shadow-sm sm:text-3xl">
                                        {title}
                                    </h3>
                                )}
                                {subtitle && (
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-sky-200">
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Cerrar galería"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ImageCarousel images={images} alt={alt} label={label} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
