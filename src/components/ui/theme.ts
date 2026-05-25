import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                shark: {
                    50: { value: '#fafafa' },
                    100: { value: '#f5f5f5' },
                    200: { value: '#e6e6e6' },
                    300: { value: '#d6d6d6' },
                    400: { value: '#a5a5a5' },
                    500: { value: '#767676' },
                    600: { value: '#575757' },
                    700: { value: '#434343' },
                    800: { value: '#222222' },
                    900: { value: '#1a1a1a' },
                    950: { value: '#0a0a0a' },
                },
            },
        },
        semanticTokens: {
            colors: {
                shark: {
                    solid: { value: {base: '{colors.shark.800}', _dark: '{colors.shark.50}'} },
                    contrast: { value: {base: '{colors.shark.50}', _dark: '{colors.shark.800}'} },
                    fg: { value: {base: '{colors.shark.800}', _dark: '{colors.shark.200}'} },
                    muted: { value: {base: '{colors.shark.600}', _dark: '{colors.shark.300}'} },
                    subtle: { value: {base: '{colors.shark.100}', _dark: '{colors.shark.900}'} },
                    emphasized: { value: {base: '{colors.shark.300}', _dark: '{colors.shark.700}'} },
                    focusRing: { value: '{colors.shark.400}' },
                    border: { value: { base: '{colors.shark.200}', _dark: '{colors.shark.800}' } },
                    bg: { value: { base: '{colors.shark.50}', _dark: '{colors.shark.900}' } },
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
