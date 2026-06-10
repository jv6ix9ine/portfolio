import { Drawer, Portal, CloseButton, IconButton, Box, Text } from '@chakra-ui/react';
import { LuMenu } from 'react-icons/lu';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Menu() {
    return (
        <Drawer.Root
            size='full'
            trapFocus={false}
        >
            <Drawer.Trigger asChild>
                <IconButton
                    variant={'ghost'}
                    colorPalette={'gray'}
                    aria-label='Menu'
                    hideFrom={'lg'}
                >
                    <LuMenu />
                </IconButton>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content fontFamily={'var(--font-elms-sans)'}>
                        <Drawer.Header>
                            <Logo />
                        </Drawer.Header>
                        <Drawer.Context>
                            {(store) => (
                                <Drawer.Body>
                                    <Box
                                        fontSize={'2xl'}
                                        color={'gray.fg'}
                                    >
                                        <Navigation closeMenu={store.setOpen} />
                                    </Box>
                                </Drawer.Body>
                            )}
                        </Drawer.Context>
                        <Drawer.Footer>
                            <Text
                                fontSize={'sm'}
                                color={'gray.500'}
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
