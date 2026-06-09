'use client';

import { Avatar, Blockquote, Box, Card, Float, Heading, HoverCard, HStack, Marquee, Portal, Stack } from '@chakra-ui/react';
import { pickPalette } from './palette';

export interface Testimonial {
    name: string;
    role: string;
    avatar: string | null;
    content: string;
}

export default function TestimonialItems({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <>
            {testimonials.map((item, i) => (
                <Marquee.Item
                    key={item.name + i}
                    px='1rem'
                >
                    <TestimonialCard item={item} />
                </Marquee.Item>
            ))}
        </>
    );
}

const TestimonialCard = ({ item }: { item: Testimonial }) => {
    return (
        <HoverCard.Root
            size='sm'
            disabled={item.content.length <= 200}
        >
            <HoverCard.Trigger asChild>
                <Card.Root
                    maxW='md'
                    h='full'
                    borderRadius='2xl'
                >
                    <Card.Body>
                        <Stack
                            gap='3'
                            height={'full'}
                        >
                            <Card.Description
                                color='fg.muted'
                                textStyle='md'
                                fontFamily='var(--font-google-sans)'
                                as={'div'}
                                height={'full'}
                            >
                                <Blockquote.Root variant={'plain'}>
                                    <Float
                                        placement='top-start'
                                        offsetY='2'
                                    >
                                        <Blockquote.Icon />
                                    </Float>
                                    <Blockquote.Content lineClamp={4}>{item.content}</Blockquote.Content>
                                </Blockquote.Root>
                            </Card.Description>

                            <HStack
                                gap='3'
                                mt='1'
                            >
                                <Avatar.Root
                                    size='sm'
                                    colorPalette={pickPalette(item.name)}
                                >
                                    {item.avatar ? <Avatar.Image src={item.avatar} /> : item.avatar}
                                    <Avatar.Fallback name={item.name} />
                                </Avatar.Root>
                                <Box textStyle='sm'>
                                    <Box
                                        fontWeight='medium'
                                        color='fg'
                                    >
                                        {item.name}
                                    </Box>
                                    <Box color='fg.muted'>{item.role}</Box>
                                </Box>
                            </HStack>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </HoverCard.Trigger>
            <Portal>
                <HoverCard.Positioner>
                    <HoverCard.Content>
                        <HoverCard.Arrow />
                        <Box
                            borderRadius='md'
                            maxW='xs'
                        >
                            <Heading
                                as='h3'
                                size='sm'
                                mb='2'
                            >
                                {item.name}
                            </Heading>
                            <Box
                                color='fg.muted'
                                textStyle='sm'
                                fontFamily='var(--font-google-sans)'
                            >
                                {item.content}
                            </Box>
                        </Box>
                    </HoverCard.Content>
                </HoverCard.Positioner>
            </Portal>
        </HoverCard.Root>
    );
};
