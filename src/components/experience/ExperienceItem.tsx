'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExperienceData } from './data';
import { Box, Timeline, Stack, AvatarGroup, Avatar, Text } from '@chakra-ui/react';

const MotionBox = motion.create(Box);

export default function ExperienceItem(exp: ExperienceData) {
    const { header, items, technologies, icon } = exp;
    const itemRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.55, 1, 0.75]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.985]);

    return (
        <Timeline.Item ref={itemRef}>
            <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>{icon}</Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
                <MotionBox style={{ y, opacity, scale, willChange: 'transform, opacity' }}>
                    <Timeline.Title>
                        <Text
                            fontSize='lg'
                            fontWeight='bold'
                        >
                            {header.title}
                        </Text>
                    </Timeline.Title>
                    <Timeline.Description>{header.description}</Timeline.Description>

                    {items.map((item, index) => (
                        <Stack key={index} mb={4}>
                            <Timeline.Title>{item.title}</Timeline.Title>
                            <Timeline.Description>{item.date}</Timeline.Description>
                            <Text
                                textStyle='sm'
                                fontFamily='var(--font-google-sans)'
                            >
                                {item.description}
                            </Text>
                        </Stack>
                    ))}
                    {technologies && technologies.length > 0 && (
                        <AvatarGroup
                            gap='0'
                            spaceX='-1'
                            size='2xs'
                        >
                            {technologies.map((tech: { name: string; icon: string }) => (
                                <Avatar.Root
                                    key={tech.name}
                                    colorPalette='gray'
                                    bgColor='bg.subtle'
                                >
                                    <Avatar.Fallback name={tech.name} />
                                    <Avatar.Image src={tech.icon} />
                                </Avatar.Root>
                            ))}
                        </AvatarGroup>
                    )}
                </MotionBox>
            </Timeline.Content>
        </Timeline.Item>
    );
}
