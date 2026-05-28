import {
    Box,
    Container,
    Grid,
    Heading,
} from '@chakra-ui/react';
import ProjectCard from '@/components/projects/ProjectCard';

// const MotionImage = motion(Image);

const projects = [
    {
        title: 'Zonas Arqueológicas de México',
        description:
            'Es un catálogo de las zonas arqueológicas en México, incluyendo historia, ubicación y características principales. Cuando desarrolle este proyecto, puse a prueba mis habilidades para crear una experiencia de usuario única.',
        imageUrl: 'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779810064/Portfolio/zonas-light_tbmpm3.jpg',
        technologies: [
            {
                name: 'Next.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'Tailwind CSS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            },
        ],
        siteLink: 'https://archaeological-zones.vercel.app/home',
        caseStudyLink: '#',
    },
    {
        title: 'Wavespace',
        description:
            'Es una plataforma de streaming de música creada para que otras personas puedan compartir sus creaciones. De una etapa de mi vida influenciada por la música, nace un proyecto para conectar.',
        imageUrl: 'https://ipcdn-web.apple.com/assets/v2/web/d9a0fc6e-758f-4002-b201-074e5e2684dd',
        technologies: [
            {
                name: 'Next.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
            },
            {
                name: 'TypeScript ',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            },
            {
                name: '.NET',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
            },
            {
                name: 'C#',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
            },
        ],
        siteLink: 'https://archaeological-zones.vercel.app/home',
        caseStudyLink: '#',
    },
    {
        title: 'Astralis',
        description:
            'Es un video juego 2D que sigue las aventuras de una astronauta. El juego fue desarrollado con Unity y C#, y es un proyecto personal que me permitió explorar el desarrollo de juegos y la narrativa interactiva, sacándome de mi zona de confort.',
        imageUrl: 'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779813831/Portfolio/astralis2_ctcxi7.png',
        technologies: [
            {
                name: 'C#',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
            },
            {
                name: 'Unity',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg',
            },
        ],
        siteLink: 'https://youtu.be/Ea8i6_lvfvQ',
        caseStudyLink: '#',
    },
];

export default function Projects() {
    return (
        <Box as='section'>
            <Container
                maxWidth={'7xl'}
                py={16}
                spaceY={12}
            >
                <Heading
                    size={'4xl'}
                    textAlign={'center'}
                >
                    Proyectos
                </Heading>

                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={6}
                >
                    {/* <Card.Root
                        maxW='sm'
                        overflow='hidden'
                        style={{ borderRadius: '0.75rem' }}
                    >
                        <Box overflow='hidden'>
                            <Image
                                src='https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779810064/Portfolio/zonas-light_tbmpm3.jpg'
                                alt='Screenshot of Archeological Zones website'
                                _hover={{ transform: 'scale(1.05)' }}
                                transition='transform 0.2s ease-in-out'
                                aspectRatio={16 / 9}
                            />
                        </Box>

                        <Card.Body gap='2'>
                            <Card.Title>Zonas Arqueológicas de México</Card.Title>
                            <Card.Description fontFamily={'var(--font-google-sans)'}>
                                Es un catálogo de las zonas arqueológicas en México, incluyendo historia, ubicación
                                y características principales. Cuando desarrolle este proyecto, puse a prueba mis
                                habilidades para crear una experiencia de usuario única.
                            </Card.Description>

                            <AvatarGroup
                                gap='0'
                                spaceX='-3'
                                size='xs'
                            >
                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='Next.js' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='MongoDB' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='Node' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='Tailwind CSS' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' />
                                </Avatar.Root>
                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='TypeScript' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' />
                                </Avatar.Root>
                            </AvatarGroup>
                        </Card.Body>
                        <Card.Footer gap='2'>
                            <Button
                                asChild
                                colorPalette='shark'
                                // variant='ghost'
                            >
                                <Link
                                    href='https://archaeological-zones.vercel.app/home'
                                    target='_blank'
                                >
                                    Visitar sitio <LuExternalLink />
                                </Link>
                            </Button>
                            <Button
                                variant='ghost'
                                colorPalette='shark'
                            >
                                Case study <LuArrowUpRight />
                            </Button>
                        </Card.Footer>
                    </Card.Root>

                    <Card.Root
                        maxW='sm'
                        overflow='hidden'
                        style={{ borderRadius: '0.75rem' }}
                    >
                        <Box overflow='hidden'>
                            <Image
                                src='https://ipcdn-web.apple.com/assets/v2/web/d9a0fc6e-758f-4002-b201-074e5e2684dd'
                                alt='Screenshot of Archeological Zones website'
                                _hover={{ transform: 'scale(1.05)' }}
                                transition='transform 0.2s ease-in-out'
                                aspectRatio={16 / 9}
                            />
                        </Box>

                        <Card.Body gap='2'>
                            <Card.Title>Wavespace</Card.Title>
                            <Card.Description>
                                Es una plataforma de streaming de música creada para que otras personas puedan
                                compartir sus creaciones. De una etapa de mi vida influenciada por la música, nace
                                un proyecto para conectar.
                            </Card.Description>

                            <AvatarGroup
                                gap='0'
                                spaceX='-3'
                                size='xs'
                            >
                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='Next.js' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' />
                                </Avatar.Root>
                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='TypeScript' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='MongoDB' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='.NET' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='C#' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' />
                                </Avatar.Root>
                            </AvatarGroup>
                        </Card.Body>
                        <Card.Footer gap='2'>
                            <Button
                                asChild
                                colorPalette='shark'
                                // variant='ghost'
                            >
                                <Link
                                    href='https://archaeological-zones.vercel.app/home'
                                    target='_blank'
                                >
                                    Visitar sitio <LuExternalLink />
                                </Link>
                            </Button>
                            <Button
                                variant='ghost'
                                colorPalette='shark'
                            >
                                Case study <LuArrowUpRight />
                            </Button>
                        </Card.Footer>
                    </Card.Root>

                    <Card.Root
                        maxW='sm'
                        overflow='hidden'
                        style={{ borderRadius: '0.75rem' }}
                    >
                        <Box overflow='hidden'>
                            <Image
                                src='https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779813831/Portfolio/astralis2_ctcxi7.png'
                                alt='Screenshot of Astralis'
                                _hover={{ transform: 'scale(1.05)' }}
                                transition='transform 0.2s ease-in-out'
                                aspectRatio={16 / 9}
                            />
                        </Box>

                        <Card.Body gap='2'>
                            <Card.Title>Astralis</Card.Title>
                            <Card.Description>
                                Es un video juego 2D que sigue las aventuras de una astronauta. El juego fue
                                desarrollado con Unity y C#, y es un proyecto personal que me permitió explorar el
                                desarrollo de juegos y la narrativa interactiva, sacándome de mi zona de confort.
                            </Card.Description>

                            <AvatarGroup
                                gap='0'
                                spaceX='-3'
                                size='xs'
                            >
                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='C#' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' />
                                </Avatar.Root>

                                <Avatar.Root bgColor='white'>
                                    <Avatar.Fallback name='Unity' />
                                    <Avatar.Image src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg' />
                                </Avatar.Root>
                            </AvatarGroup>
                        </Card.Body>
                        <Card.Footer gap='2'>
                            <Button
                                asChild
                                colorPalette='shark'
                            >
                                <Link
                                    href='https://youtu.be/Ea8i6_lvfvQ'
                                    target='_blank'
                                >
                                    Ver gameplay <LuExternalLink />
                                </Link>
                            </Button>
                            <Button
                                variant='ghost'
                                colorPalette='shark'
                            >
                                Case study <LuArrowUpRight />
                            </Button>
                        </Card.Footer>
                    </Card.Root> */}

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            technologies={project.technologies}
                            siteLink={project.siteLink}
                            caseStudyLink={project.caseStudyLink}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
