'use client';
import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { Box, Container, Grid, Stack, Text } from '@chakra-ui/react';
import { useT } from 'next-i18next/client';
import { useEffect, useRef, useState } from 'react';

export default function Metrics({ lng }: { lng: string }) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [hasEntered, setHasEntered] = useState(false);
    const { t } = useT('metrics', { lng });

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
            bgColor={'bg.muted'}
            color={'gray.fg'}
            ref={sectionRef}
            id='metrics'
        >
            <Container
                maxWidth={'7xl'}
                py={8}
                spaceY={6}
            >
                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
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
                        <Text>{t('yearsExperience')}</Text>
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
                        <Text>{t('projectsCompleted')}</Text>
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
                                value={4000}
                                start={hasEntered}
                            />
                        </Text>
                        <Text>{t('usersImpacted')}</Text>
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
                                value={4}
                                start={hasEntered}
                            />
                        </Text>
                        <Text>{t('coordinatedDevelopers')}</Text>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    );
}
