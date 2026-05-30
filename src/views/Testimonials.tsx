import {
    Card,
    Stack,
    HStack,
    Box,
    Avatar,
    Marquee,
    Heading,
    Blockquote,
    Float,
    Container,
    HoverCard,
    Portal,
} from '@chakra-ui/react';

export const colorPalette = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

export const pickPalette = (name: string) => {
    const index = name.charCodeAt(0) % colorPalette.length;
    return colorPalette[index];
};

export default function Testimonials() {
    return (
        <Box
            as='section'
            bgColor={'bg.muted'}
            color={'gray.fg'}
            py={8}
            overflowX='hidden'
        >
            <Container
                maxWidth={'7xl'}
                mb={6}
            >
                <Heading
                    as='h2'
                    size='4xl'
                    mb={6}
                    textAlign={'center'}
                >
                    Personas con las que he trabajado 👨‍💻
                </Heading>
            </Container>

            <Marquee.Root
                pauseOnInteraction
                colorPalette={'gray'}
                height={'full'}
                py={8}
                css={{
                    '--marquee-edge-color': 'colors.bg.muted',
                    '--marquee-edge-size': '30%',
                }}
            >
                <Marquee.Edge side='start' />
                <Marquee.Viewport>
                    <Marquee.Content>
                        {testimonials.map((item, i) => (
                            <Marquee.Item
                                key={i}
                                px='1rem'
                            >
                                <TestimonialCard item={item} />
                            </Marquee.Item>
                        ))}
                    </Marquee.Content>
                </Marquee.Viewport>
                <Marquee.Edge side='end' />
            </Marquee.Root>
        </Box>
    );
}

const TestimonialCard = ({ item }: { item: Testimonial }) => {
    return (
        <HoverCard.Root
            size='sm'
            disabled={item.content.length <= 200}
        >
            <HoverCard.Trigger asChild>
                <Card.Root
                    maxW='md'
                    h='full'
                    borderRadius='2xl'
                >
                    <Card.Body>
                        <Stack
                            gap='3'
                            height={'full'}
                        >
                            <Card.Description
                                color='fg.muted'
                                textStyle='md'
                                fontFamily='var(--font-google-sans)'
                                as={'div'}
                                height={'full'}
                            >
                                <Blockquote.Root variant={'plain'}>
                                    <Float
                                        placement='top-start'
                                        offsetY='2'
                                    >
                                        <Blockquote.Icon />
                                    </Float>
                                    <Blockquote.Content lineClamp={4}>{item.content}</Blockquote.Content>
                                </Blockquote.Root>
                            </Card.Description>

                            <HStack
                                gap='3'
                                mt='1'
                            >
                                <Avatar.Root
                                    size='sm'
                                    // colorPalette={pickPalette(item.name)}
                                >
                                    {item.avatar ? <Avatar.Image src={item.avatar} /> : item.avatar}
                                    <Avatar.Fallback name={item.name} />
                                </Avatar.Root>
                                <Box textStyle='sm'>
                                    <Box
                                        fontWeight='medium'
                                        color='fg'
                                    >
                                        {item.name}
                                    </Box>
                                    <Box color='fg.muted'>{item.role}</Box>
                                </Box>
                            </HStack>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </HoverCard.Trigger>
            <Portal>
                <HoverCard.Positioner>
                    <HoverCard.Content>
                        <HoverCard.Arrow />
                        <Box
                            borderRadius='md'
                            maxW='xs'
                        >
                            <Heading
                                as='h3'
                                size='sm'
                                mb='2'
                            >
                                {item.name}
                            </Heading>
                            <Box
                                color='fg.muted'
                                textStyle='sm'
                                fontFamily='var(--font-google-sans)'
                            >
                                {item.content}
                            </Box>
                        </Box>
                    </HoverCard.Content>
                </HoverCard.Positioner>
            </Portal>
        </HoverCard.Root>
    );
};

interface Testimonial {
    name: string;
    role: string;
    avatar: string | null;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Cesar Oviedo',
        role: 'Desarrollador Backend',
        avatar: 'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779999752/Portfolio/cesar_dejeui.png',
        content:
            'Un perfil integral que equilibra la perfección técnica/estética con una ética laboral impecable y una gran cohesión de grupo.',
    },
    {
        name: 'Gilberto Martínez',
        role: 'Desarrollador Web Senior',
        avatar: null,
        content:
            'Demostró una gran capacidad de adaptación y aprendizaje de nuevas tecnologías. Se caracteriza por su iniciativa, disposición para proponer mejoras y enfoque en la aplicación de buenas prácticas de desarrollo.',
    },
    {
        name: 'Daniel Rodríguez',
        role: 'Desarrollador Full-Stack',
        avatar: 'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1780004568/Portfolio/perfil_-_Daniel_Rodriguez_Guerrero_u0znhy.png',
        content:
            'En lo técnico, cuenta con una gran habilidad para UI/UX, buena lógica de programación, manejo eficiente de recursos y una sólida comprensión de bases de datos. En cuanto a habilidades blandas, destaca por su capacidad para el manejo de personal, liderazgo, comunicación efectiva y disposición para coordinar equipos de trabajo.',
    },
    {
        name: 'Oscar Zavala',
        role: 'Soporte Técnico',
        avatar: null,
        content: 'Excelente, muy limpio y ordenado. Tiene una excelente forma de manejar código.',
    },
    {
        name: 'Anahí Solís',
        role: 'RRHH',
        avatar: null,
        content:
            'Considero que Joaht Vera realizó un buen trabajo como desarrollador, mostrando responsabilidad, iniciativa y buenas habilidades técnicas.',
    },
];
