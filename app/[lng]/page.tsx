import Header from '@/components/common/Header';
import Contact from '@/views/Contact';
import Experience from '@/views/Experience';
import Footer from '@/views/Footer';
import Hero from '@/views/Hero';
import HowIWork from '@/views/HowIWork';
import Metrics from '@/views/Metrics';
import Projects from '@/views/Projects';
import Testimonials from '@/views/Testimonials';
import { Box } from '@chakra-ui/react';

type HomeProps = {
    params: Promise<{ lng: string }>;
};

export default async function Home({ params }: HomeProps) {
    const { lng } = await params;
    return (
        <Box
            as='main'
            bgColor='bg.subtle'
            fontFamily='var(--font-elms-sans)'
        >
            <Header />
            <Hero lng={lng} />
            <Metrics lng={lng} />
            <Projects lng={lng} />
            <HowIWork />
            <Experience />
            <Testimonials />
            <Contact/>
            <Footer lng={lng} />
        </Box>
    );
}
