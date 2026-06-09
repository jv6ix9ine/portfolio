'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { system } from './theme';
import { Toaster } from './toaster';

export function Provider({ children, ...rest }: ColorModeProviderProps) {
    return (
        <ColorModeProvider {...rest}>
            <ChakraProvider value={system}>
                {children}
                <Toaster />
            </ChakraProvider>
        </ColorModeProvider>
    );
}
