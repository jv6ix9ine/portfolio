import { Timeline, Text, Box, Container, Heading, Stack, AvatarGroup, Avatar } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { LuBriefcaseBusiness, LuGraduationCap } from 'react-icons/lu';

type ExperienceItem = {
    title: string;
    description: string;
    date: string;
};

type ExperienceData = {
    icon: ReactNode;
    header: {
        title: string;
        description: string;
    };
    items: ExperienceItem[];
    technologies?: { name: string; icon: string }[];
};

const experienceData: ExperienceData[] = [
    {
        icon: <LuBriefcaseBusiness />,
        header: {
            title: 'TiendaTec',
            description: 'Saltillo, Coahuila de Zaragoza. México.',
        },
        items: [
            {
                title: 'Líder de equipo | Desarrollador full-stack',
                description:
                    'Lideré tres proyectos enfocados en plataformas de análisis de datos y retail, participando en arquitectura de software, desarrollo de APIs, CI/CD, bases de datos e interfaces de usuario. Mi enfoque principal fue coordinar equipos y procesos para construir soluciones escalables, funcionales y alineadas con las necesidades del negocio, asegurando tanto la calidad técnica como el valor del producto final.',
                date: 'Sep. 2025 - Mayo 2026',
            },
            {
                title: 'Desarrollador front-end',
                description:
                    'Mi trabajo principal fue la migración y mantenimiento de aplicaciones web a la medida, construyendo interfaces modernas, funcionales y centradas en la experiencia del usuario.',
                date: 'Jun. 2025 - Sep. 2025',
            },
        ],
        technologies: [
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            },
            {
                name: 'PostgreSQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
            },
            {
                name: 'Microsoft SQL Server',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
            },
            {
                name: '.NET',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
            {
                name: 'Go',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
            },
        ],
    },
    {
        icon: <LuGraduationCap />,
        header: {
            title: 'Dapper Technologies',
            description: 'Cancun, Quintana Roo. México.',
        },
        items: [
            {
                title: 'Interno de CI/CD',
                description:
                    'Realicé prácticas profesionales en el área de Integración y Despliegue Continuo (CI/CD), participando en el mantenimiento, mejora continua y monitoreo de aplicaciones web y sistemas desarrollados con Angular.',
                date: 'Ene. 2025 - May. 2025',
            },
        ],
        technologies: [
            {
                name: 'Angular',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
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
                name: 'Firebase',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
        ],
    },
    {
        icon: <LuGraduationCap />,
        header: {
            title: 'DotNet Desarrollo de Sistemas',
            description: 'Cancun, Quintana Roo. México.',
        },
        items: [
            {
                title: 'Becario de desarrollo web',
                description:
                    'Contribuí en el desarrollo de una aplicación web interna construida con Next.js, utilizando Microsoft Azure como plataforma de servicios en la nube para su despliegue y administración. Adquirí experiencia práctica en el desarrollo de aplicaciones web modernas, así como en la implementación y gestión de soluciones en la nube, enfocándome en la creación de interfaces de usuario eficientes y funcionales.',
                date: 'Jun. 2023 - May. 2024',
            },
        ],
        technologies: [
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
            },
            {
                name: 'Microsoft Azure',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
            },
            {
                name: 'Azure DevOps',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
        ],
    },
        {
        icon: <LuBriefcaseBusiness />,
        header: {
            title: 'Dapper Technologies',
            description: 'Cancun, Quintana Roo. México.',
        },
            items: [
                {
                    title: 'Desarrollador full-stack',
                    description:
                        'Desarrollé aplicaciones web y soluciones de software a la medida para clientes de Dapper Technologies, utilizando tecnologías como Angular, Flutter y Express.js para crear productos funcionales, escalables y adaptados a las necesidades de cada proyecto.',
                    date: 'Dic. 2021 - May. 2022',
                },
        
            {
                title: 'Interno de CI/CD',
                description:
                    'Realicé prácticas profesionales participando en el mantenimiento, mejora continua y monitoreo de aplicaciones web y sistemas desarrollados con Angular.',
                date: 'Sep. 2021 - Dic. 2021',
            },
        ],
        technologies: [
            {
                name: 'Angular',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
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
                name: 'Firebase',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
            {
                name: 'Flutter',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
            }
        ],
    },
];

const ExperienceItem = (exp: ExperienceData) => {
    const { header, items, technologies, icon } = exp;
    return (
        <Timeline.Item>
            <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                    {icon}
                </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
                <Timeline.Title>
                    <Text
                        fontSize='lg'
                        fontWeight='bold'
                    >
                        {header.title}
                    </Text>
                </Timeline.Title>
                <Timeline.Description>{header.description}</Timeline.Description>

                {items.map((item, index) => (
                    <Stack key={index}>
                        <Timeline.Title>{item.title}</Timeline.Title>
                        <Timeline.Description>{item.date}</Timeline.Description>
                        <Text
                            textStyle='sm'
                            fontFamily='var(--font-google-sans)'
                        >
                            {item.description}
                        </Text>
                    </Stack>
                ))}
                {technologies && technologies.length > 0 && (
                    <AvatarGroup
                        gap='0'
                        spaceX='-1'
                        size='2xs'
                    >
                        {technologies.map((tech: { name: string; icon: string }) => (
                            <Avatar.Root
                                key={tech.name}
                                colorPalette='gray'
                                bgColor='bg.subtle'
                            >
                                <Avatar.Fallback name={tech.name} />
                                <Avatar.Image src={tech.icon} />
                            </Avatar.Root>
                        ))}
                    </AvatarGroup>
                )}
            </Timeline.Content>
        </Timeline.Item>
    );
};

const Experience = () => {
    return (
        <Box
            as='section'
            bgColor={'bg.subtle'}
            color={'gray.fg'}
        >
            <Container
                maxWidth={'7xl'}
                py={8}
            >
                <Heading
                    as='h2'
                    size='4xl'
                    mb={6}
                    textAlign={'center'}
                >
                    Trayectoria profesional
                </Heading>

                <Timeline.Root size={'xl'}>
                    {experienceData.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            {...exp}
                        />
                    ))}
                </Timeline.Root>
            </Container>
        </Box>
    );
};

export default Experience;
