import { RotateWords } from '@/components/animations/RotateWords';
import { Button, Stack, Heading, Container, Text, Image, ButtonGroup } from '@chakra-ui/react';
import { getT } from 'next-i18next/server';
import { LuArrowDown } from 'react-icons/lu';

export default async function Hero({ lng }: { lng: string }) {
    const {} = await getT('', { lng });

    return (
        <Container
            as='section'
            height={'calc(100vh - 4rem)'}
            position={'relative'}
            maxWidth={'7xl'}
            fontFamily={'var(--font-elms-sans)'}
        >
            <Stack
                justifyContent={{ base: 'flex-start', md: 'center' }}
                alignItems={{ base: 'center', md: 'flex-start' }}
                height={'full'}
                gap={6}
            >
                <Heading
                    as={'h1'}
                    size={'7xl'}
                    fontSize={{ base: '6xl', md: '7xl', lg: '100px' }}
                    fontWeight={'500'}
                    transition={'all 0.2s ease-in-out'}
                    color={'gray.fg'}
                >
                    Joaht Vera
                </Heading>

                <RotateWords
                    as='h2'
                    text='Soy'
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
                    // textAlign={{ base: 'center', md: 'left' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                />

                <Text
                    maxWidth={{ base: 'full', md: 'md' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    fontSize={'xl'}
                    color={'gray.500'}
                >
                    Construyo soluciones digitales escalables con visión técnica y liderazgo.
                </Text>

                <ButtonGroup
                    size={'lg'}
                    colorPalette={'gray'}
                >
                    <Button
                        variant='outline'
                        rounded={'2xl'}
                    >
                        Conocer más <LuArrowDown />
                    </Button>
                    <Button rounded={'2xl'}>Contactar</Button>
                </ButtonGroup>
            </Stack>

            {/* <Image
                src={
                    'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779670091/Portfolio/hero-photo_gcme8s.png'
                }
                alt={'Hero Image'}
                position={'absolute'}
                right={{ base: '50%', md: 0 }}
                transform={{ base: 'translateX(50%) scaleX(-1)', md: 'scaleX(-1)' }}
                bottom={0}
                pointerEvents={'none'}
                height={{ base: '50%', md: '100%', lg: '120%' }}
                objectFit={'contain'}
                transition={'all 0.2s ease-in-out'}
            /> */}
        </Container>
    );
}
