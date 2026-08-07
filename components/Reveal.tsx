'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useCallback, useState } from 'react';
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
    'aria-current'?: React.AriaAttributes['aria-current'];
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
    y = 24,
    as = 'div',
    onClick,
    onKeyDown,
    tabIndex,
    'aria-current': ariaCurrent,
}: RevealProps) {
    const [inView, setInView] = useState(false);
    const reduceMotion = useReducedMotion();
    const visible = reduceMotion || inView;

    const ref = useCallback((node: HTMLElement | null) => {
        if (!node) return;
        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                }
            },
            { rootMargin: '-40px 0px', threshold: 0.1 },
        );
        observer.observe(node);
    }, []);

    const Component = MotionTags[as];

    return (
        <Component
            ref={ref}
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            aria-current={ariaCurrent}
            className={className}
            initial={false}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : y }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Component>
    );
}
