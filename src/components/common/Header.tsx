'use client';
import { AbsoluteCenter, Box, Button, Container, DownloadTrigger, HStack } from '@chakra-ui/react';
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
                style={{ position: 'sticky', top: 0, zIndex: 50 }}
                animate={{
                    padding: isSticky ? '0.75rem' : '0',
                }}
                transition={{ duration: 0.2, ease: 'easeInOut', type: 'spring', damping: 20, stiffness: 300 }}
            >
                <Box
                    
                    bgColor={'bg.subtle/40'}
                    backdropFilter='blur(5px)'
                    borderWidth={isSticky ? '0.5px' : undefined}
                    rounded={isSticky ? '3xl' : undefined}
                    px={4}
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
                                        variant={isSticky ? 'ghost' : 'outline'}
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
