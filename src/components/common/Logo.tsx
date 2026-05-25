import { Box, Image } from '@chakra-ui/react';

export default function Logo() {

    return (
        <Box width={8} height={8}>
            <Image
                src={'https://res.cloudinary.com/dzlkrqtzo/image/upload/v1779671237/Portfolio/logo-light_toyaus.svg'}
                alt='Joaht Vera'
                filter={{_dark: 'grayscale(100%) brightness(1000%)'}}
            />
        </Box>
    );
}
