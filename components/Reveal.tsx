'use client';

import { motion } from 'motion/react';
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent, ReactNode } from 'react';

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    as?: 'div' | 'section' | 'article' | 'li';
    onClick?: (event: ReactMouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: ReactKeyboardEvent<HTMLElement>) => void;
    tabIndex?: number;
};

const MotionTags = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    li: motion.li,
} as const;

export default function Reveal({
    children,
    className,
    delay = 0,
    y = 28,
    as = 'div',
    onClick,
    onKeyDown,
    tabIndex,
}: RevealProps) {
    const Component = MotionTags[as];

    return (
        <Component
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Component>
    );
}
