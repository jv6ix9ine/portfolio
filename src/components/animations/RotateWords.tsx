'use client';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'motion/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useEffect, useState } from 'react';

type RotateWordsProps = {
    text?: string;
    words?: string[];
} & ComponentPropsWithoutRef<typeof Box>;

export function RotateWords({
    text = 'Rotate',
    words = ['Word 1', 'Word 2', 'Word 3'],
    ...boxProps
}: RotateWordsProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!words.length) {
            return;
        }

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <Box
            width={'fit-content'}
            display={'flex'}
            gap={3}
            {...boxProps}
        >
            {text}{' '}
            <AnimatePresence mode='wait'>
                <motion.p
                    key={words[index]}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.3 }}
                >
                    {words[index]}
                </motion.p>
            </AnimatePresence>
        </Box>
    );
}
