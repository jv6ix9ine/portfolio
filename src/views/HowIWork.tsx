'use client';
import { Box, Button, Container, HStack, Stack, Text, Heading } from '@chakra-ui/react';
import { LuAppWindow, LuBrain, LuCode, LuTrendingUp } from 'react-icons/lu';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLenis } from 'lenis/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import HighlightNumber from '@/components/common/HighlightNumber';

type StepItem = {
    title: string;
    description: string;
    icon: ReactNode;
};

const MotionBox = motion.create(Box);

type ProcessCardProps = {
    index: number;
    step: StepItem;
    isActive: boolean;
    onReady: (node: HTMLDivElement | null) => void;
};

function ProcessCard({ index, step, isActive, onReady }: ProcessCardProps) {
    const localRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: localRef,
        offset: ['start 85%', 'center 50%'],
    });

    const x = useTransform(scrollYProgress, [0, 1], [40, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

    return (
        <MotionBox
            ref={(node: HTMLDivElement | null) => {
                localRef.current = node;
                onReady(node);
            }}
            style={{ x, opacity, scale }}
            borderWidth={1}
            bg='bg.subtle'
            rounded='2xl'
            p={{ base: 6, md: 8 }}
            boxShadow={isActive ? 'xs' : undefined}
        >
            <Stack gap={4}>
                <HStack
                    justify='space-between'
                    align='center'
                >
                    <HighlightNumber value={index + 1} />
                </HStack>

                <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight='bold'
                >
                    {step.title}
                </Text>

                <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    fontFamily='var(--font-google-sans)'
                    color='gray.fg'
                >
                    {step.description}
                </Text>
            </Stack>
        </MotionBox>
    );
}

export default function HowIWork() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [activeStep, setActiveStep] = useState(0);
    const lenis = useLenis();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 15%', 'end 50%'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 28,
    });

    const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (value) => {
            const next = Math.max(0, Math.min(steps.length - 1, Math.round(value * (steps.length - 1))));
            setActiveStep(next);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const handleStepClick = (index: number) => {
        const target = cardRefs.current[index];
        if (!target) {
            return;
        }

        lenis?.scrollTo(target, { offset: -140, duration: 1.1 });
    };

    return (
        <Box
            as='section'
            bgColor='bg.muted'
            color='gray.fg'
            ref={sectionRef}
        >
            <Container
                maxWidth='7xl'
                py={{ base: 14, md: 24 }}
            >
                <Stack gap={{ base: 10, md: 14 }}>
                    <Heading
                        size={{ base: '3xl', md: '4xl' }}
                        textAlign='center'
                    >
                        Como trabajo 💻
                    </Heading>

                    <HStack
                        align='start'
                        gap={{ base: 8, lg: 14 }}
                        flexDir={{ base: 'column', lg: 'row' }}
                    >
                        <Box
                            position={{ base: 'relative', lg: 'sticky' }}
                            top={{ lg: 28 }}
                            w={{ base: 'full', lg: '300px' }}
                        >
                            <HStack
                                align='start'
                                gap={4}
                            >
                                <Box
                                    w='2px'
                                    h='220px'
                                    rounded='full'
                                    position='relative'
                                    overflow='hidden'
                                >
                                    <MotionBox
                                        position='absolute'
                                        left='0'
                                        top='0'
                                        w='full'
                                        bg='gray.fg'
                                        style={{ height: progressHeight }}
                                    />
                                </Box>

                                <Stack
                                    align='stretch'
                                    gap={2}
                                    flex='1'
                                >
                                    {steps.map((step, index) => (
                                        <Button
                                            key={step.title}
                                            onClick={() => handleStepClick(index)}
                                            justifyContent='flex-start'
                                            colorPalette={'gray'}
                                            bgColor={activeStep === index ? 'gray.fg' : undefined}
                                            variant={activeStep === index ? 'solid' : 'outline'}
                                            rounded='xl'
                                            size='lg'
                                        >
                                            {step.icon}
                                            {step.title}
                                        </Button>
                                    ))}
                                </Stack>
                            </HStack>
                        </Box>

                        <Stack
                            flex='1'
                            gap={6}
                        >
                            {steps.map((step, index) => (
                                <ProcessCard
                                    key={step.title}
                                    index={index}
                                    step={step}
                                    isActive={activeStep === index}
                                    onReady={(node) => {
                                        cardRefs.current[index] = node;
                                    }}
                                />
                            ))}
                        </Stack>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
}

const steps: StepItem[] = [
    {
        title: 'Entender el problema',
        description:
            'Antes de escribir código, identifico los objetivos de negocio, las restricciones técnicas y las necesidades reales de los usuarios.',
        icon: <LuBrain />,
    },
    {
        title: 'Diseñar la solución',
        description:
            'Defino una arquitectura escalable, priorizando mantenibilidad, rendimiento y capacidad de evolución a largo plazo.',
        icon: <LuAppWindow />,
    },
    {
        title: 'Construir con calidad',
        description:
            'Implemento soluciones modernas con estándares claros, código limpio y foco en la experiencia del usuario.',
        icon: <LuCode />,
    },
    {
        title: 'Medir y mejorar',
        description:
            'Analizo resultados, identifico oportunidades de optimización y evoluciono el producto de forma continua.',
        icon: <LuTrendingUp />,
    },
];
