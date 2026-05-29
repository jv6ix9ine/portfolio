'use client';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'motion/react';

const MotionText = motion.create(Text);

export default function HighlightNumber({value}: {value: string | number}) {
    return (
        <Flex
            overflow={'hidden'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <MotionText
                fontSize={'200px'}
                fontWeight={'bold'}
                lineHeight={'1'}
                background={
                    'linear-gradient(135deg, var(--chakra-colors-gray-900), var(--chakra-colors-gray-400), var(--chakra-colors-gray-700))'
                }
                backgroundSize={'300% 300%'}
                backgroundClip={'text'}
                color={'transparent'}
                userSelect={'none'}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    opacity: {
                        duration: 0.5,
                    },
                    scale: {
                        duration: 0.5,
                        ease: 'easeOut',
                    },
                    backgroundPosition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                }}
            >
                {value}
            </MotionText>
        </Flex>
    );
}
