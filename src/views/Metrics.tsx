'use client';

import { AnimatedNumber } from '@/components/common/AnimatedNumber';
import { Box, Container, Grid, Stack, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export default function Metrics() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node || hasEntered) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const isVisible = entries.some((entry) => entry.isIntersecting);
                if (isVisible) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [hasEntered]);

    return (
        <Box
            as='section'
            bgColor={'shark.subtle'}
            color={'shark.fg'}
            ref={sectionRef}
        >
            <Container
                maxWidth={'7xl'}
                py={8}
                spaceY={6}
            >
                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                    bgColor={'shark.subtle'}
                    fontFamily={'var(--font-google-sans)'}
                    justifyContent={'center'}
                    textAlign={'center'}
                >
                    <Stack
                        padding={8}
                        justifyContent={'center'}
                    >
                        <Text fontSize={'7xl'}>
                            +
                            <AnimatedNumber
                                value={5}
                                start={hasEntered}
                            />
                        </Text>
                        <Text>Años de experiencia</Text>
                    </Stack>

                    <Stack
                        padding={8}
                        justifyContent={'center'}
                        borderLeftWidth={{ base: 0, md: 1 }}
                        borderTopWidth={{ base: 1, md: 0 }}
                    >
                        <Text fontSize={'7xl'}>
                            +
                            <AnimatedNumber
                                value={20}
                                start={hasEntered}
                            />
                        </Text>
                        <Text>Proyectos completados</Text>
                    </Stack>

                    <Stack
                        padding={8}
                        justifyContent={'center'}
                        borderLeftWidth={{ base: 0, lg: 1 }}
                        borderTopWidth={{ base: 1, lg: 0 }}
                    >
                        <Text fontSize={'7xl'}>
                            +
                            <AnimatedNumber
                                value={2000}
                                start={hasEntered}
                            />
                        </Text>
                        <Text>Usuarios impactados</Text>
                    </Stack>

                    <Stack
                        padding={8}
                        justifyContent={'center'}
                        borderLeftWidth={1}
                        borderTopWidth={{ base: 1, lg: 0 }}
                    >
                        <Text fontSize={'7xl'}>
                            +
                            <AnimatedNumber
                                value={4}
                                start={hasEntered}
                            />
                        </Text>
                        <Text>Desarrolladores coordinados</Text>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    );
}
