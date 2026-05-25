import { MenuOptions } from '@/components/common/Navigation';
import { Container, HStack, Stack, Text, Blockquote, Link, Icon, Float } from '@chakra-ui/react';
import { getT } from 'next-i18next/server';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

export default async function Footer({ lng }: { lng: string }) {
    const { t } = await getT('header', { lng });

    return (
        <Container
            as='footer'
            py={10}
            maxWidth={'7xl'}
            color={'shark.fg'}
            borderTop={'1px solid'}
            borderColor={'shark.border'}
            fontFamily={'var(--font-google-sans)'}
        >
            <Stack gap={6}>
                <Blockquote.Root
                    maxWidth={'2xl'}
                    variant={'plain'}
                >
                    <Float
                        placement='top-start'
                        offsetY='2'
                    >
                        <Blockquote.Icon />
                    </Float>
                    <Blockquote.Content>
                        Una arquitectura bien definida y la selección de tecnologías adecuadas son clave para
                        construir sistemas escalables, eficientes y fáciles de mantener.
                    </Blockquote.Content>
                    <Blockquote.Caption>
                        — <cite>Joaht Vera</cite>
                    </Blockquote.Caption>
                </Blockquote.Root>

                <HStack justifyContent={'space-between'}>
                    <HStack gap={6}>
                        <Link
                            href='https://www.linkedin.com/in/joahtvera/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Icon
                                size={'lg'}
                                color={'shark.fg'}
                            >
                                <FaLinkedinIn />
                            </Icon>
                        </Link>

                        <Link
                            href='mailto:contact@joahtvera.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Icon
                                size={'lg'}
                                color={'shark.fg'}
                            >
                                <FaEnvelope />
                            </Icon>
                        </Link>
                    </HStack>

                    <Stack
                        gap={6}
                        wrap={'wrap'}
                        direction={{ base: 'column', sm: 'row' }}
                        alignItems={{ base: 'flex-start', md: 'center' }}
                    >
                        {MenuOptions.map((option, i) => (
                            <Link
                                key={i}
                                href={option.href}
                            >
                                {t(`nav.${option.label}`)}
                            </Link>
                        ))}
                    </Stack>
                </HStack>

                <HStack
                    fontSize={'sm'}
                    color={'shark.muted'}
                    borderTop={'1px solid'}
                    borderColor={'shark.border'}
                    pt={4}
                    justifyContent={'center'}
                >
                    <Text>{new Date().getFullYear()} © Joaht Vera. All rights reserved. Designed and built by me.</Text>
                </HStack>
            </Stack>
        </Container>
    );
}
