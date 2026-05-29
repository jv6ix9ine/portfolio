'use client';

import { Lenis as ReactLenis } from 'lenis/react';
import { type ReactNode } from 'react';

type SmoothScrollingProps = {
    children: ReactNode;
};

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
    return (
        <ReactLenis
            root
            options={{
                duration: 2,
                lerp: 0.08,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
            }}
        >
            {children}
        </ReactLenis>
    );
}
