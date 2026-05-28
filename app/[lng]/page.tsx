import Header from '@/components/common/Header';
import Footer from '@/views/Footer';
import Hero from '@/views/Hero';
import HowIWork from '@/views/HowIWork';
import Metrics from '@/views/Metrics';
import Projects from '@/views/Projects';
import { Box } from '@chakra-ui/react';

type HomeProps = {
    params: Promise<{ lng: string }>;
};

export default async function Home({ params }: HomeProps) {
    const { lng } = await params;
    return (
        <Box
            as='main'
            // colorPalette='gray'
            bgColor='bg.subtle'
            fontFamily='var(--font-elms-sans)'
        >
            <Header />
            <Hero lng={lng} />
            <Metrics />
            <Projects />
            <HowIWork />

            <Footer lng={lng} />
        </Box>
    );
}
