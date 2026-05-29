'use client';
import {
    Badge,
    Box,
    Button,
    Container,
    Field,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { LuCode, LuLayers3, LuRocket, LuSend } from 'react-icons/lu';

export default function Contact() {
    return (
        <Box
            as='section'
            bg='bg.subtle'
            color='gray.fg'
            py={{ base: 14, md: 24 }}
        >
            <Container maxWidth='7xl'>
                <Stack gap={{ base: 8, md: 12 }}>
                    <Stack
                        gap={3}
                        maxW='2xl'
                    >
                        <Heading size={{ base: '3xl', md: '5xl' }}>Hablemos de tu próximo proyecto</Heading>
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color='fg.muted'
                            fontFamily='var(--font-google-sans)'
                        >
                            Cuéntame qué necesitas y te respondo con una propuesta clara, viable y enfocada en
                            resultados.
                        </Text>
                    </Stack>

                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        gap={{ base: 8, lg: 12 }}
                        alignItems='start'
                    >
                        <Box
                            bg='bg'
                            borderWidth={1}
                            rounded='2xl'
                            p={{ base: 6, md: 8 }}
                        >
                            <Stack gap={6}>
                                <Stack gap={2}>
                                    <Heading
                                        size='xl'
                                        fontWeight='semi-bold'
                                    >
                                        Escríbeme
                                    </Heading>
                                    <Text
                                        color='fg.muted'
                                        fontFamily='var(--font-google-sans)'
                                    >
                                        Respondo consultas sobre desarrollo web, interfaces, arquitectura y
                                        productos digitales.
                                    </Text>
                                </Stack>

                                <Stack
                                    gap={4}
                                    as='form'
                                >
                                    <SimpleGrid
                                        columns={{ base: 1, md: 2 }}
                                        gap={4}
                                    >
                                        <Field.Root required>
                                            <Field.Label>Nombre</Field.Label>
                                            <Input
                                                placeholder='Tu nombre'
                                                rounded='xl'
                                            />
                                        </Field.Root>
                                        <Field.Root required>
                                            <Field.Label>Email</Field.Label>
                                            <Input
                                                placeholder='tu@email.com'
                                                type='email'
                                                rounded='xl'
                                            />
                                        </Field.Root>
                                    </SimpleGrid>

                                    <Field.Root required>
                                        <Field.Label>Asunto</Field.Label>
                                        <Input
                                            placeholder='¿En qué puedo ayudarte?'
                                            rounded='xl'
                                        />
                                    </Field.Root>

                                    <Field.Root required>
                                        <Field.Label>Mensaje</Field.Label>
                                        <Textarea
                                            placeholder='Cuéntame sobre tu proyecto, objetivos, tiempos y cualquier detalle importante.'
                                            minH='180px'
                                            rounded='xl'
                                            resize='vertical'
                                        />
                                    </Field.Root>

                                    <HStack
                                        justify='space-between'
                                        align='center'
                                        flexWrap='wrap'
                                        gap={3}
                                        mt={4}
                                    >
                                        <Text
                                            fontSize='sm'
                                            color='fg.muted'
                                            fontFamily='var(--font-google-sans)'
                                        >
                                            Normalmente respondo en menos de 48 horas.
                                        </Text>

                                        <Button
                                            type='submit'
                                            rounded='2xl'
                                            colorPalette='gray'
                                            size='md'
                                        >
                                            Enviar mensaje
                                            <LuSend />
                                        </Button>
                                    </HStack>
                                </Stack>
                            </Stack>
                        </Box>

                        <Stack gap={4}>
                            <Stack gap={2}>
                                <Heading size='xl'>Servicios</Heading>
                                <Text
                                    color='fg.muted'
                                    fontFamily='var(--font-google-sans)'
                                >
                                    Tres frentes de trabajo para construir experiencias sólidas, rápidas y
                                    escalables.
                                </Text>
                            </Stack>

                            <Stack gap={4} height='full' >
                                {services.map((service) => (
                                    <Box
                                        key={service.title}
                                        bg='bg'
                                        borderWidth={1}
                                        rounded='2xl'
                                        p={4}
                                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                        transition='all 0.2s ease'
                                    >
                                        <HStack
                                            align='start'
                                            gap={4}
                                        >
                                            <IconButton
                                                rounded='xl'
                                                variant='surface'
                                                userSelect='none'
                                            >
                                                <Icon as={service.icon} />
                                            </IconButton>

                                            <Stack gap={2}>
                                                <Heading size='md'>{service.title}</Heading>
                                                <Text
                                                    color='fg.muted'
                                                    fontFamily='var(--font-google-sans)'
                                                >
                                                    {service.description}
                                                </Text>
                                                <HStack
                                                    gap={2}
                                                    // color='gray.fg'
                                                    // fontSize='sm'
                                                    // fontWeight='medium'
                                                >
                                                    {/* <Text>{service.tag}</Text>
                                                        <LuArrowRight size={14} /> */}
                                                    {service.tag.split(',').map((tag) => {
                                                        const value =
                                                            tag.trim().charAt(0).toUpperCase() +
                                                            tag.trim().slice(1);

                                                        return (
                                                            <Badge
                                                                key={tag}
                                                                variant={'surface'}
                                                                size='md'
                                                                // colorPalette={pickPalette(tag.trim())}
                                                            >
                                                                {value}
                                                            </Badge>
                                                        );
                                                    })}
                                                </HStack>
                                            </Stack>
                                        </HStack>
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}

const services = [
    {
        title: 'Desarrollo Frontend',
        description: 'Interfaces modernas, accesibles y optimizadas para convertir mejor y cargar más rápido.',
        tag: 'UI, performance, accesibilidad',
        icon: LuCode,
    },
    {
        title: 'Arquitectura y Backend',
        description: 'APIs, integración de servicios, estructuras escalables y decisiones técnicas sólidas.',
        tag: 'APIs, data, escalabilidad',
        icon: LuLayers3,
    },
    {
        title: 'Producto y Lanzamiento',
        description: 'Acompañamiento para convertir una idea en un producto listo para crecer y evolucionar.',
        tag: 'MVP, iteración, crecimiento',
        icon: LuRocket,
    },
];
