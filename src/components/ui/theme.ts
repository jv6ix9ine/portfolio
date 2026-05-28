import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: 'var(--font-elms-sans)' },
            },
        },
        semanticTokens: {
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
