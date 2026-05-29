'use client';
import { AbsoluteCenter, Box, Button, Container, DownloadTrigger, HStack } from '@chakra-ui/react';
import Logo from './Logo';
import Menu from './Menu';
import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useT } from 'next-i18next/client';
import { ColorModeButton } from '../ui/color-mode';
import Navigation from './Navigation';
import { useLenis } from 'lenis/react';

const data = 'The quick brown fox jumps over the lazy dog';

export default function Header() {
    const sentinelRef = useRef<HTMLDivElement>(null);
    // const [isSticky, setIsSticky] = useState(false);
    // const [scrollY, setScrollY] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollStopTimerRef = useRef<number | null>(null);
    const { t } = useT('header');

    useLenis((lenis) => {
        // setScrollY(lenis.scroll);
        setIsScrolling(Boolean(lenis.isScrolling));

        if (scrollStopTimerRef.current) {
            window.clearTimeout(scrollStopTimerRef.current);
        }

        scrollStopTimerRef.current = window.setTimeout(() => {
            setIsScrolling(false);
        }, 120);
    });

    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //         setIsSticky(!entry.isIntersecting);
    //     });

    //     if (sentinelRef.current) {
    //         observer.observe(sentinelRef.current);
    //     }

    //     return () => observer.disconnect();
    // }, []);

    useEffect(() => {
        return () => {
            if (scrollStopTimerRef.current) {
                window.clearTimeout(scrollStopTimerRef.current);
            }
        };
    }, []);

    // useEffect(() => {
    //     console.log('Sticky:', isSticky);
    //     // console.log('ScrollY:', scrollY);
    //     console.log('Is Scrolling:', isScrolling);
    //  }, [isSticky, isScrolling]);

    return (
        <Fragment>
            <div ref={sentinelRef} />
            <motion.header
                style={{ position: 'sticky', top: 0, zIndex: 50 }}
                // data-scroll-y={scrollY}
                // data-scrolling={isScrolling}
                animate={{
                    top: isScrolling ? '0.75rem' : '0',
                    width: isScrolling ? '95%' : '100%',
                    margin: isScrolling ? '0 auto' : '0',
                }}
                transition={{ duration: 0.2, ease: 'easeInOut', type: 'spring', damping: 20, stiffness: 300 }}
            >
                <Box
                    bgColor={'bg.subtle/40'}
                    backdropFilter='blur(5px)'
                    borderWidth={isScrolling ? '0.5px' : undefined}
                    rounded={isScrolling ? '3xl' : undefined}
                    px={4}
                    marginX={isScrolling ? 4 : undefined}
                    position='relative'
                >
                    <Container maxWidth='7xl'>
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
                                        variant={isScrolling ? 'ghost' : 'outline'}
                                        rounded={'2xl'}
                                        colorPalette={'gray'}
                                        transition={'all 0.2 easeInOut'}
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
