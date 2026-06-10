'use client';
import {
    Badge,
    Box,
    Button,
    Container,
    Field,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster';
import { useT } from 'next-i18next/client';
import { useForm } from 'react-hook-form';
import { LuCode, LuLayers3, LuRocket, LuSend } from 'react-icons/lu';

type ContactFormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
    website: string;
};

export default function Contact({ lng }: { lng: string }) {
    const { t } = useT('contact', { lng });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
            website: '',
        },
    });

    const services = (t('services', { returnObjects: true }) as Array<{
        title: string;
        description: string;
        tag: string;
    }>).map((service, index) => ({
        ...service,
        icon: serviceIcons[index],
    }));

    const onSubmit = async (values: ContactFormValues) => {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (!response.ok) {
            const result = (await response.json().catch(() => null)) as { error?: string } | null;

            toaster.create({
                title: t('form.status.errorTitle'),
                description: result?.error ?? t('form.status.errorDescription'),
                type: 'error',
                closable: true,
            });

            return;
        }

        reset();
        toaster.create({
            title: t('form.status.successTitle'),
            description: t('form.status.successDescription'),
            type: 'success',
            closable: true,
        });
    };

    return (
        <Box
            as='section'
            bg='bg.subtle'
            color='gray.fg'
            py={{ base: 14, md: 24 }}
            id='contact'
        >
            <Container maxWidth='7xl'>
                <Stack gap={{ base: 8, md: 12 }}>
                    <Stack
                        gap={3}
                        maxW='2xl'
                    >
                        <Heading size={{ base: '3xl', md: '5xl' }}>{t('title')}</Heading>
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color='fg.muted'
                            fontFamily='var(--font-google-sans)'
                        >
                            {t('subtitle')}
                        </Text>
                    </Stack>

                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        gap={{ base: 8, lg: 12 }}
                        alignItems='start'
                    >
                        <Box
                            bg='bg'
                            borderWidth={1}
                            rounded='2xl'
                            p={{ base: 6, md: 8 }}
                        >
                            <Stack gap={6}>
                                <Stack gap={2}>
                                    <Heading
                                        size='xl'
                                        fontWeight='semi-bold'
                                    >
                                        {t('form.title')}
                                    </Heading>
                                    <Text
                                        color='fg.muted'
                                        fontFamily='var(--font-google-sans)'
                                    >
                                        {t('form.description')}
                                    </Text>
                                </Stack>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    noValidate
                                >
                                    <Stack gap={4}>
                                        <Input
                                            {...register('website')}
                                            type='text'
                                            tabIndex={-1}
                                            autoComplete='off'
                                            display='none'
                                            aria-hidden='true'
                                        />
                                        <SimpleGrid
                                            columns={{ base: 1, md: 2 }}
                                            gap={4}
                                        >
                                            <Field.Root
                                                required
                                                invalid={Boolean(errors.name)}
                                            >
                                                <Field.Label>{t('form.fields.name.label')}</Field.Label>
                                                <Input
                                                    {...register('name', {
                                                        required: t('form.validation.required'),
                                                        minLength: {
                                                            value: 2,
                                                            message: t('form.validation.nameMin'),
                                                        },
                                                    })}
                                                    placeholder={t('form.fields.name.placeholder')}
                                                    rounded='xl'
                                                    autoComplete='name'
                                                />
                                                <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                                            </Field.Root>
                                            <Field.Root
                                                required
                                                invalid={Boolean(errors.email)}
                                            >
                                                <Field.Label>{t('form.fields.email.label')}</Field.Label>
                                                <Input
                                                    {...register('email', {
                                                        required: t('form.validation.required'),
                                                        pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                            message: t('form.validation.email'),
                                                        },
                                                    })}
                                                    placeholder={t('form.fields.email.placeholder')}
                                                    type='email'
                                                    rounded='xl'
                                                    autoComplete='email'
                                                />
                                                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                            </Field.Root>
                                        </SimpleGrid>

                                        <Field.Root
                                            required
                                            invalid={Boolean(errors.subject)}
                                        >
                                            <Field.Label>{t('form.fields.subject.label')}</Field.Label>
                                            <Input
                                                {...register('subject', {
                                                    required: t('form.validation.required'),
                                                    minLength: {
                                                        value: 4,
                                                        message: t('form.validation.subjectMin'),
                                                    },
                                                })}
                                                placeholder={t('form.fields.subject.placeholder')}
                                                rounded='xl'
                                                autoComplete='off'
                                            />
                                            <Field.ErrorText>{errors.subject?.message}</Field.ErrorText>
                                        </Field.Root>

                                        <Field.Root
                                            required
                                            invalid={Boolean(errors.message)}
                                        >
                                            <Field.Label>{t('form.fields.message.label')}</Field.Label>
                                            <Textarea
                                                {...register('message', {
                                                    required: t('form.validation.required'),
                                                    minLength: {
                                                        value: 20,
                                                        message: t('form.validation.messageMin'),
                                                    },
                                                })}
                                                placeholder={t('form.fields.message.placeholder')}
                                                minH='180px'
                                                rounded='xl'
                                                resize='vertical'
                                            />
                                            <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                                        </Field.Root>

                                        <HStack
                                            justify='space-between'
                                            align='center'
                                            flexWrap='wrap'
                                            gap={3}
                                            mt={4}
                                        >
                                            <Text
                                                fontSize='sm'
                                                color='fg.muted'
                                                fontFamily='var(--font-google-sans)'
                                            >
                                                {t('form.responseTime')}
                                            </Text>

                                            <Button
                                                type='submit'
                                                rounded='2xl'
                                                colorPalette='gray'
                                                size='md'
                                                loading={isSubmitting}
                                                loadingText={t('form.sending')}
                                                aria-label={t('form.submit')}
                                            >
                                                {t('form.submit')}
                                                <LuSend />
                                            </Button>
                                        </HStack>
                                    </Stack>
                                </form>
                            </Stack>
                        </Box>

                        <Stack gap={4}>
                            <Stack gap={2}>
                                <Heading size='xl'>{t('servicesTitle')}</Heading>
                                <Text
                                    color='fg.muted'
                                    fontFamily='var(--font-google-sans)'
                                >
                                    {t('servicesSubtitle')}
                                </Text>
                            </Stack>

                            <Stack gap={4} height='full' >
                                {services.map((service) => (
                                    <Box
                                        key={service.title}
                                        bg='bg'
                                        borderWidth={1}
                                        rounded='2xl'
                                        p={4}
                                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                        transition='all 0.2s ease'
                                    >
                                        <HStack
                                            align='start'
                                            gap={4}
                                        >
                                            <IconButton
                                                rounded='xl'
                                                variant='surface'
                                                userSelect='none'
                                            >
                                                <Icon as={service.icon} />
                                            </IconButton>

                                            <Stack gap={2}>
                                                <Heading size='md'>{service.title}</Heading>
                                                <Text
                                                    color='fg.muted'
                                                    fontFamily='var(--font-google-sans)'
                                                >
                                                    {service.description}
                                                </Text>
                                                <HStack
                                                    gap={2}
                                                    // color='gray.fg'
                                                    // fontSize='sm'
                                                    // fontWeight='medium'
                                                >
                                                    {/* <Text>{service.tag}</Text>
                                                        <LuArrowRight size={14} /> */}
                                                    {service.tag.split(',').map((tag) => {
                                                        const value =
                                                            tag.trim().charAt(0).toUpperCase() +
                                                            tag.trim().slice(1);

                                                        return (
                                                            <Badge
                                                                key={tag}
                                                                variant={'surface'}
                                                                size='md'
                                                                // colorPalette={pickPalette(tag.trim())}
                                                            >
                                                                {value}
                                                            </Badge>
                                                        );
                                                    })}
                                                </HStack>
                                            </Stack>
                                        </HStack>
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}

const serviceIcons = [LuCode, LuLayers3, LuRocket] as const;
