import { Center, Loader } from '@chakra-ui/react';

export default function Loading() {
    return (
        <Center
            h='100vh'
            w='100vw'
        >
            <Loader />
        </Center>
    );
}
