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
    },
    allowedDevOrigins: ['192.168.100.29'],
};

export default nextConfig;
