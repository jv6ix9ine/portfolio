import {
    Box,
    ButtonGroup,
    Container,
    Heading,
    IconButton,
    Stack,
    Steps,
    Text,
    Image,
    HStack,
} from '@chakra-ui/react';
import {
    LuAppWindow,
    LuBrain,
    LuCheck,
    LuChevronLeft,
    LuChevronRight,
    LuCode,
    LuTrendingUp,
} from 'react-icons/lu';
import NextImage from 'next/image';
import HighlightNumber from '@/components/common/HighlightNumber';

export default function HowIWork() {
    return (
        <Box
            as='section'
            bgColor={'bg.muted'}
            color={'gray.fg'}
            height={'100vh'}
        >
            <Container
                maxWidth={'7xl'}
                py={16}
                spaceY={8}
            >
                <Heading
                    size={'4xl'}
                    textAlign={'center'}
                >
                    Como trabajo
                </Heading>

                <Steps.Root
                    defaultStep={0}
                    count={steps.length}
                    colorPalette={'gray'}
                    size='lg'
                    variant='subtle'
                >
                    <Steps.List>
                        {steps.map((step, index) => (
                            <Steps.Item
                                key={index}
                                index={index}
                                title={step.title}
                            >
                                <Steps.Indicator>
                                    <Steps.Status
                                        incomplete={step.icon}
                                        complete={<LuCheck />}
                                    />
                                </Steps.Indicator>
                                {/* <Steps.Title>Paso {index + 1}</Steps.Title> */}
                                <Steps.Separator />
                            </Steps.Item>
                        ))}
                    </Steps.List>

                    <Box position={'relative'} width={'full'} height={'300px'}>
                        {steps.map((step, index) => (
                            <Steps.Content
                                key={index}
                                index={index}
                                position='absolute'
                                inset='0'
                                _open={{
                                    animationName: 'fade-in, scale-in',
                                    animationDuration: '300ms',
                                }}
                                _closed={{
                                    animationName: 'fade-out, scale-out',
                                    animationDuration: '120ms',
                                }}
                            >
                                <Stack gap={6}>
                                    <Stack alignItems={'center'}>
                                        <HighlightNumber value={index + 1} />
                                        <Text fontSize={'4xl'}>{step.title}</Text>
                                    </Stack>
                                    <Text
                                        fontSize={'xl'}
                                        textAlign={'center'}
                                        fontFamily={'var(--font-google-sans)'}
                                    >
                                        {step.description}
                                    </Text>
                                </Stack>
                            </Steps.Content>
                        ))}
                    </Box>

                    <Steps.CompletedContent>
                        {/* Has completado todos los pasos. ¡Gracias por revisar mi proceso de trabajo! */}
                    </Steps.CompletedContent>

                    <ButtonGroup
                        size={'2xl'}
                        variant='surface'
                        gap={12}
                        width={'full'}
                        justifyContent={'center'}
                        mt={12}
                    >
                        <Steps.PrevTrigger asChild>
                            <IconButton rounded={'2xl'}>
                                <LuChevronLeft />
                            </IconButton>
                        </Steps.PrevTrigger>
                        <Steps.NextTrigger asChild>
                            <IconButton rounded={'2xl'}>
                                <LuChevronRight />
                            </IconButton>
                        </Steps.NextTrigger>
                    </ButtonGroup>
                </Steps.Root>
            </Container>
        </Box>
    );
}

const steps = [
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
