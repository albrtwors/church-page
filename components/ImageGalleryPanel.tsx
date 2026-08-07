'use client';

import { AnimatePresence, motion } from 'motion/react';
import ImageCarousel from './ImageCarousel';
import Reveal from './Reveal';

type ImageGalleryPanelProps = {
    title: string;
    subtitle?: string;
    images: string[];
    alt?: string;
    label?: string;
};

export default function ImageGalleryPanel({ title, subtitle, images, alt, label }: ImageGalleryPanelProps) {
    return (
        <Reveal className="mx-auto mt-14 max-w-4xl">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Galería</p>
                    <h3 className="mt-1 font-display text-3xl leading-snug text-sky-900">{title}</h3>
                    {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
                </div>
                <span className="rounded-full border border-sky-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-700">
                    {images.length} foto{images.length !== 1 ? 's' : ''}
                </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                >
                    <ImageCarousel images={images} alt={alt} label={label} />
                </motion.div>
            </AnimatePresence>
        </Reveal>
    );
}
