import { experienceData } from '@/components/experience/data';
import ExperienceItem from '@/components/experience/ExperienceItem';
import { Timeline, Box, Container, Heading } from '@chakra-ui/react';

const Experience = () => {
    return (
        <Box
            as='section'
            bgColor={'bg.subtle'}
            color={'gray.fg'}
            id='experience'
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
