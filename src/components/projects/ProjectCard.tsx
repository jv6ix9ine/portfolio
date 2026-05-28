'use client';
import { Card, AvatarGroup, Avatar, ButtonGroup, Button, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { LuExternalLink, LuArrowUpRight } from 'react-icons/lu';
import Image from 'next/image';
import { motion } from 'motion/react';

const MotionImage = motion.create(Image);

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    technologies: { name: string; icon: string }[];
    siteLink: string;
    caseStudyLink: string;
};

export default function ProjectCard({
    title,
    description,
    imageUrl,
    technologies,
    siteLink,
    caseStudyLink,
}: Project) {
    return (
        <Card.Root
            width={'full'}
            overflow='hidden'
            style={{ borderRadius: '1rem' }}
        >
            <Box position={'relative'} aspectRatio={'16 / 9'} width={'full'} overflow={'hidden'}>
                <MotionImage
                    src={imageUrl}
                    alt={`Screenshot of ${title} website`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}
                    fill
                    style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                    loading='eager'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </Box>

            <Card.Body gap='2'>
                <Card.Title>{title}</Card.Title>
                <Card.Description fontFamily={'var(--font-google-sans)'}>{description}</Card.Description>

                <AvatarGroup
                    gap='0'
                    spaceX='-3'
                    size='xs'
                >
                    {technologies.map((tech: { name: string; icon: string }) => (
                        <Avatar.Root
                            key={tech.name}
                            bgColor='white'
                        >
                            <Avatar.Fallback name={tech.name} />
                            <Avatar.Image src={tech.icon} />
                        </Avatar.Root>
                    ))}
                </AvatarGroup>
            </Card.Body>
            <Card.Footer gap='2'>
                <ButtonGroup colorPalette='gray'>
                    <Button
                        asChild
                        rounded={'2xl'}
                    >
                        <Link
                            href={siteLink}
                            target='_blank'
                        >
                            Visitar sitio <LuExternalLink />
                        </Link>
                    </Button>
                    <Button
                        variant='ghost'
                        rounded={'2xl'}
                    >
                        Case study <LuArrowUpRight />
                    </Button>
                </ButtonGroup>
            </Card.Footer>
        </Card.Root>
    );
}
