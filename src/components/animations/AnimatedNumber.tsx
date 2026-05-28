'use client';

import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

type AnimatedNumberProps = {
    value: number;
    start?: boolean;
};

export function AnimatedNumber({ value, start = true }: AnimatedNumberProps) {
    const count = useMotionValue(0);

    const display = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (!start) {
            return;
        }

        count.set(0);
        const controls = animate(count, value, {
            duration: 1.5,
            delay: 0.3,
        });

        return () => controls.stop();
    }, [count, start, value]);

    return <motion.span>{display}</motion.span>;
}
