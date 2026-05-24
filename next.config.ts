import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        optimizePackageImports: ['@chakra-ui/react'],
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/es',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
