'use client';
import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'motion/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useEffect, useState } from 'react';

type RotateWordsProps = {
    text?: string;
    words?: string[];
} & ComponentPropsWithoutRef<typeof Flex>;

export function RotateWords({ text = '', words = ['Word 1', 'Word 2', 'Word 3'], ...boxProps }: RotateWordsProps) {
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
        <Flex
            width={'fit-content'}
            gap={4}
            wrap={'wrap'}
            {...boxProps}
        >
            {text && <span>{text}</span>}
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
        </Flex>
    );
}
