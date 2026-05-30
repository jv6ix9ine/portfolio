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
                src={
                    'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779671237/Portfolio/logo-light_toyaus.svg'
                    // 'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1780108770/Portfolio/logo_vk8orm.png'
                }
                alt='Joaht Vera'
                filter={{ _dark: 'grayscale(100%) brightness(1000%)' }}
            />
        </Box>
    );
}
