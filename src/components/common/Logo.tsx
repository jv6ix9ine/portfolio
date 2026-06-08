import { Box, Image } from '@chakra-ui/react';

type LogoProps = {
    height?: number | string;
    width?: number | string;
};

export default function Logo({ height = 8, width = 8 }: LogoProps) {
    return (
        <Box
            width={width}
            height={height}
        >
            <Image
                src={'https://res.cloudinary.com/dzlkrqtzo/image/upload/f_webp/q_auto:eco/ar_1:1,c_auto/Portfolio/logo_etsuy3.png'}
                alt='Joaht Vera'
                filter={{ _dark: 'grayscale(100%) brightness(1000%)' }}
            />
        </Box>
    );
}
