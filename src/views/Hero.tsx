import { RotateWords } from '@/components/animations/RotateWords';
import {
    Button,
    Stack,
    Heading,
    Container,
    Text,
    ButtonGroup,
    Box,
    Flex,
} from '@chakra-ui/react';
import { getT } from 'next-i18next/server';
import { LuArrowDown } from 'react-icons/lu';

export default async function Hero({ lng }: { lng: string }) {
    const { t } = await getT('hero', { lng });

    return (
        <Container
            as='section'
            height={'calc(100vh - 4rem)'}
            position={'relative'}
            maxWidth={'7xl'}
            fontFamily={'var(--font-elms-sans)'}
            id='home'
            overflow={'hidden'}
        >
            <Flex
                height={'full'}
                direction={{ base: 'column', lg: 'row' }}
                gap={4}
            >
                <Stack
                    justifyContent={{ base: 'flex-start', md: 'center' }}
                    alignItems={{ base: 'center', lg: 'flex-start' }}
                    gap={4}
                    width={{ base: 'full' }}
                >
                    <Heading
                        as={'h1'}
                        size={'7xl'}
                        fontSize={{ base: '6xl', md: '7xl', lg: '100px' }}
                        fontWeight={'500'}
                        transition={'all 0.2s ease-in-out'}
                        color={'gray.fg'}
                        textWrap={'nowrap'}
                    >
                        Joaht Vera
                    </Heading>

                    <RotateWords
                        as='h2'
                        text={t('im')}
                        words={[
                            'Full Stack Developer',
                            'Software Engineer',
                            'Frontend Specialist',
                            'JavaScript Enthusiast',
                            'Tech Lead',
                        ]}
                        fontSize={{ base: '3xl', md: '4xl' }}
                        color={{ base: 'gray.500', _dark: 'gray.300' }}
                        fontWeight={'500'}
                        justifyContent={{ base: 'center', lg: 'flex-start' }}
                        gap={3.5}
                    />

                    <Text
                        maxWidth={{ base: 'full', md: 'md' }}
                        textAlign={{ base: 'center', md: 'left' }}
                        fontSize={'xl'}
                        color={'gray.500'}
                    >
                        {t('description')}
                    </Text>

                    <ButtonGroup
                        size={'lg'}
                        colorPalette={'gray'}
                    >
                        <Button
                            asChild
                            variant='outline'
                            rounded={'2xl'}
                        >
                            <a href='#projects'>
                                {t('learnMore')} <LuArrowDown />
                            </a>
                        </Button>

                        <Button
                            asChild
                            rounded={'2xl'}
                        >
                            <a href='#contact'>{t('contact')}</a>
                        </Button>
                    </ButtonGroup>
                </Stack>

                <Box
                    height={'full'}
                    width={{ base: 'full' }}
                    bgImage={'url(/hero4.png)'}
                    bgPos={{ base: 'center bottom' }}
                    bgRepeat={'no-repeat'}
                    bgSize={{base: 'contain'}}
                    filter={{ base: 'grayscale(100%)' }}
                ></Box>
            </Flex>
        </Container>
    );
}
