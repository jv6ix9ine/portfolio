'use client';
import { AbsoluteCenter, Container, HStack } from '@chakra-ui/react';
import Logo from './Logo';
import Menu from './Menu';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useT } from 'next-i18next/client';
import { ColorModeButton } from '../ui/color-mode';
import Navigation from './Navigation';
import { useLenis } from 'lenis/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import Download from './Download';

export default function Header() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');
    const [isScrolling, setIsScrolling] = useState(false);
    const { t } = useT('header');

    useLenis((lenis) => {
        setIsScrolling(Boolean(lenis.isScrolling));
        if (lenis.isScrolling) {
            const scrollValue = () => {
                if (lenis.direction === 1 && lenis.scroll > 50) {
                    return 'down';
                } else if (lenis.direction === -1 && lenis.scroll > 50) {
                    return 'up';
                } else {
                    return 'none';
                }
            };
            setScrollDirection(scrollValue());
        }
    });

    return (
        <motion.header
            style={{
                position: 'sticky',
                zIndex: 50,
                top: '0',
                display: 'flex',
                justifyContent: 'center',
            }}
            animate={{
                top: scrollDirection === 'down' ? '-4rem' : scrollDirection === 'up' ? '0.75rem' : undefined,
            }}
            transition={{
                duration: 0.2,
                ease: 'easeInOut',
                type: 'spring',
                damping: 20,
                stiffness: 300,
                delay: 0.1,
            }}
        >
            <motion.div
                style={{
                    backgroundColor: 'var(--chakra-colors-bg-subtle/40)',
                    backdropFilter: 'blur(5px)',
                    borderColor: 'var(--chakra-colors-border)',
                    width: '100%',
                }}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    borderRadius: scrollDirection === 'up' ? '1rem' : undefined,
                    borderWidth:  scrollDirection === 'up' ? '0.5px' : undefined,
                    width: scrollDirection === 'up' ? '95%' : undefined,
                }}
                transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <Container maxWidth='7xl'>
                    <HStack
                        height='16'
                        justifyContent='space-between'
                    >
                        <Logo height={10} width={10}/>

                        <AbsoluteCenter hideBelow={'lg'}>
                            <Navigation />
                        </AbsoluteCenter>

                        <HStack hideBelow={'lg'}>
                            <Download
                                isScrolling={isScrolling}
                                t={t}
                            />
                            <LanguageSwitcher />
                            <ColorModeButton />
                        </HStack>

                        <Menu />
                    </HStack>
                </Container>
            </motion.div>
        </motion.header>
    );
}
