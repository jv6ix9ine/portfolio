import Header from '@/components/common/Header';
import Hero from '@/views/Hero';
import { Box } from '@chakra-ui/react';

type HomeProps = {
    params: Promise<{ lng: string }>;
};

export default async function Home({ params }: HomeProps) {
    const { lng } = await params;
    return (
        <Box as='main' colorPalette='shark' bgColor='colorPalette.bg'>
            <Header />
            <Hero lng={lng} />
        </Box>
    );
}
