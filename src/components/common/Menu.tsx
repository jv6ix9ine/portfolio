import { Drawer, Portal, CloseButton, IconButton, Box, Text } from '@chakra-ui/react';
import { LuMenu } from 'react-icons/lu';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Menu() {
    return (
        <Drawer.Root size='full'>
            <Drawer.Trigger asChild>
                <IconButton
                    variant={'ghost'}
                    colorPalette={'shark'}
                    aria-label='Menu'
                    hideFrom={'md'}
                >
                    <LuMenu />
                </IconButton>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Logo />
                            {/* <Drawer.Title>Drawer Title</Drawer.Title> */}
                        </Drawer.Header>
                        <Drawer.Body>
                            <Box
                                fontFamily={'var(--font-google-sans)'}
                                fontSize={'2xl'}
                                color={'shark.fg'}
                            >
                                <Navigation />
                            </Box>
                        </Drawer.Body>
                        <Drawer.Footer>
                            {/* <Button variant='outline'>Cancel</Button>
                            <Button>Save</Button> */}
                            <Text
                                fontSize={'sm'}
                                color={'shark.muted'}
                                fontFamily={'var(--font-google-sans)'}
                                textAlign={'center'}
                                width={'full'}
                            >
                                {new Date().getFullYear()} © Joaht Vera. All rights reserved.
                            </Text>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size='sm' />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}
