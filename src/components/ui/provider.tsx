'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { system } from "./theme"

export function Provider({children, ...rest}: ColorModeProviderProps) {
    return (
        <ColorModeProvider {...rest}>
            <ChakraProvider value={system}>
                {children}
            </ChakraProvider>
        </ColorModeProvider>
    );
}