import { MenuOptions } from '@/components/common/Navigation';
import { Container, HStack, Stack, Text, Blockquote, Link, Icon, Float, Box } from '@chakra-ui/react';
import { getT } from 'next-i18next/server';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

export default async function Footer({ lng }: { lng: string }) {
    const { t: tHeader } = await getT('header', { lng });
    const { t: tFooter } = await getT('footer', { lng });

    return (
        <Box
            as='footer'
            bgColor={'bg'}
            color={'gray.fg'}
            borderTopWidth={1}
        >
            <Container
                py={10}
                maxWidth={'7xl'}
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
                        <Blockquote.Content fontFamily={'var(--font-google-sans)'}>
                            {tFooter('quote')}
                        </Blockquote.Content>
                        <Blockquote.Caption>
                            — <cite>{tFooter('author')}</cite>
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
                                    aria-label={tHeader(`nav.${option.label}`)}
                                >
                                    {tHeader(`nav.${option.label}`)}
                                </Link>
                            ))}
                        </Stack>
                    </HStack>

                    <Box
                        fontSize={'sm'}
                        borderTopWidth={1}
                        pt={4}
                    >
                        <Text textAlign={'center'}>
                            {tFooter('copyright', { year: new Date().getFullYear() })}
                        </Text>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
