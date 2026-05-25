'use client';
import { AbsoluteCenter, Box, Button, Container, DownloadTrigger, HStack, Link } from '@chakra-ui/react';
import Logo from './Logo';
import Menu from './Menu';
import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useT } from 'next-i18next/client';
import { ColorModeButton } from '../ui/color-mode';
import Navigation from './Navigation';

const data = 'The quick brown fox jumps over the lazy dog';

export default function Header() {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const { t } = useT('header');

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsSticky(!entry.isIntersecting);
        });

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Fragment>
            <div ref={sentinelRef} />
            <motion.header
                style={{ position: 'sticky', top: 0, zIndex: 50, fontFamily: 'var(--font-google-sans)' }}
                animate={{
                    padding: isSticky ? '0.75rem' : '0',
                }}
                transition={{ duration: 0.2, ease: 'easeInOut', type: 'spring', damping: 20, stiffness: 300 }}
            >
                <Box
                    colorPalette={'shark'}
                    bgColor={'colorPalette.bg/40'}
                    backdropFilter='blur(5px)'
                    // border={isSticky ? '1px solid var(--chakra-colors-shark-200)' : 'none'}
                    borderWidth={isSticky ? '1px' : 'none'}
                    borderColor={'colorPalette.border'}
                    rounded={isSticky ? '3xl' : 'none'}
                    px={4}
                    position='relative'
                >
                    <Container maxWidth='7xl' >
                        <HStack
                            height='16'
                            justifyContent='space-between'
                        >
                            <Logo />

                            <AbsoluteCenter hideBelow={'md'}>
                                <Navigation />
                            </AbsoluteCenter>

                            <HStack hideBelow={'md'}>
                                <DownloadTrigger
                                    data={data}
                                    fileName='sample.txt'
                                    mimeType='text/plain'
                                    asChild
                                >
                                    <Button
                                        variant='outline'
                                        rounded={'2xl'}
                                    >
                                        {t('download')}
                                    </Button>
                                </DownloadTrigger>

                                <ColorModeButton />
                            </HStack>

                            <Menu />
                        </HStack>
                    </Container>
                </Box>
            </motion.header>
        </Fragment>
    );
}
