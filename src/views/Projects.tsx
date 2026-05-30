import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import ProjectCard from '@/components/projects/ProjectCard';
import { getT } from 'next-i18next/server';

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    technologies: { name: string; icon: string }[];
    siteLink: string;
    caseStudyLink: string;
};

export default async function Projects({ lng }: { lng: string }) {
    const { t } = await getT('projects', { lng });
    const projects = t('items', { returnObjects: true }) as Project[];

    return (
        <Box
            as='section'
            id='projects'
        >
            <Container
                maxWidth={'7xl'}
                py={16}
                spaceY={12}
            >
                <Heading
                    size={'4xl'}
                    textAlign={'center'}
                >
                    {t('title')}
                </Heading>

                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={6}
                >
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
