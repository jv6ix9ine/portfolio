import TestimonialItems, { Testimonial } from '@/components/testimonials/TestimonialItems';
import {
    Box,
    Container,
    Heading,
    Marquee,
} from '@chakra-ui/react';
import { getT } from 'next-i18next/server';

export default async function Testimonials({ lng }: { lng: string }) {
    const { t } = await getT('testimonials', { lng });

    const testimonials = t('items', { returnObjects: true }) as Testimonial[];

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
                    {t('title')}
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
                        {/* {testimonials.map((item, i) => (
                            <Marquee.Item
                                key={item.name + i}
                                px='1rem'
                            >
                                <TestimonialCard item={item} />
                            </Marquee.Item>
                        ))} */}
                        <TestimonialItems testimonials={testimonials} />
                    </Marquee.Content>
                </Marquee.Viewport>
                <Marquee.Edge side='end' />
            </Marquee.Root>
        </Box>
    );
}


// const testimonials: Testimonial[] = [
//     {
//         name: 'Cesar Oviedo',
//         role: 'Desarrollador Backend',
//         avatar: null,
//         content:
//             'Un perfil integral que equilibra la perfección técnica/estética con una ética laboral impecable y una gran cohesión de grupo.',
//     },
//     {
//         name: 'Gilberto Martínez',
//         role: 'Desarrollador Web Senior',
//         avatar: null,
//         content:
//             'Demostró una gran capacidad de adaptación y aprendizaje de nuevas tecnologías. Se caracteriza por su iniciativa, disposición para proponer mejoras y enfoque en la aplicación de buenas prácticas de desarrollo.',
//     },
//     {
//         name: 'Daniel Rodríguez',
//         role: 'Desarrollador Full-Stack',
//         avatar: null,
//         content:
//             'En lo técnico, cuenta con una gran habilidad para UI/UX, buena lógica de programación, manejo eficiente de recursos y una sólida comprensión de bases de datos. En cuanto a habilidades blandas, destaca por su capacidad para el manejo de personal, liderazgo, comunicación efectiva y disposición para coordinar equipos de trabajo.',
//     },
//     {
//         name: 'Oscar Zavala',
//         role: 'Soporte Técnico',
//         avatar: null,
//         content: 'Excelente, muy limpio y ordenado. Tiene una excelente forma de manejar código.',
//     },
//     {
//         name: 'Anahí Solís',
//         role: 'RRHH',
//         avatar: null,
//         content:
//             'Considero que Joaht Vera realizó un buen trabajo como desarrollador, mostrando responsabilidad, iniciativa y buenas habilidades técnicas.',
//     },
// ];
