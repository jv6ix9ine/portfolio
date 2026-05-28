'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export default function SmoothScrolling() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            lerp: 0.08,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
