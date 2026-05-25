import { Button, Stack, Heading, Container, Text, Image, Marquee, HStack } from '@chakra-ui/react';
import { getT } from 'next-i18next/server';
import { LuArrowDown } from 'react-icons/lu';

export default async function Hero({ lng }: { lng: string }) {
    const { t } = await getT('', { lng });

    return (
        <Container
            as='section'
            color={'shark.fg'}
            height={'calc(100vh - 4rem)'}
            position={'relative'}
            maxWidth={'7xl'}
        >
            <Stack
                justifyContent={{ base: 'flex-start', md: 'center' }}
                alignItems={{ base: 'center', md: 'flex-start' }}
                height={'full'}
                gap={6}
            >
                <Heading
                    size={'7xl'}
                    fontSize={{ base: '6xl', md: '7xl', lg: '8xl' }}
                    fontFamily={'var(--font-lora)'}
                    fontWeight={'500'}
                    letterSpacing={'wide'}
                    transition={'all 0.2s ease-in-out'}
                >
                    Joaht Vera
                </Heading>

                <HStack
                    fontSize={'3xl'}
                    color={'shark.muted'}
                    fontFamily={'var(--font-google-sans)'}
                    width={'full'}
                >
                    <Text hideBelow={'md'}>Soy</Text>
                    <Marquee.Root
                        height='2.5rem'
                        side='bottom'
                        spacing='2rem'
                        speed={50}
                        pauseOnInteraction
                        padding={{ base: '0 1rem', md: '0' }}
                    >
                        <Marquee.Viewport>
                            <Marquee.Content>
                                {items.map((item, i) => (
                                    <Marquee.Item key={i}>
                                        <Text textAlign={{ base: 'center', md: 'left' }} truncate>{item}</Text>
                                    </Marquee.Item>
                                ))}
                            </Marquee.Content>
                        </Marquee.Viewport>
                    </Marquee.Root>
                </HStack>

                <Text
                    maxWidth={{ base: 'full', md: 'sm' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    fontFamily={'var(--font-google-sans)'}
                    fontSize={'xl'}
                    color={'shark.muted'}
                >
                    Construyo soluciones digitales escalables con visión técnica y liderazgo.
                </Text>

                <HStack zIndex={10}>
                    <Button
                        variant='outline'
                        rounded={'lg'}
                        size={'lg'}
                        width={'fit-content'}
                    >
                        Conocer más <LuArrowDown />
                    </Button>
                    <Button
                        colorPalette={'shark'}
                        rounded={'lg'}
                        size={'lg'}
                        width={'fit-content'}
                    >
                        Contactar
                    </Button>
                </HStack>
            </Stack>

            <Image
                src={
                    'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779670091/Portfolio/hero-photo_gcme8s.png'
                }
                alt={'Hero Image'}
                position={'absolute'}
                right={{ base: '50%', md: 0 }}
                transform={{ base: 'translateX(50%) scaleX(-1)', md: 'scaleX(-1)' }}
                bottom={0}
                pointerEvents={'none'}
                height={{base: '50%', md: '120%'}}
                objectFit={'contain'}
            />
        </Container>
    );
}

const items = ['Full Stack Developer', 'React, Node.js, TypeScript', 'Open Source Contributor', 'Tech Enthusiast'];
