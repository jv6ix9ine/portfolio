import { experienceData } from '@/components/experience/data';
import ExperienceItem from '@/components/experience/ExperienceItem';
import { Timeline, Box, Container, Heading } from '@chakra-ui/react';
import { getT } from 'next-i18next/server';

export default async function Experience({ lng }: { lng: string }) {
    const { t } = await getT('experience', { lng });
    
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
                    {t('title')}
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

