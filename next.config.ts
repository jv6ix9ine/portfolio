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
    allowedDevOrigins: ['192.168.100.6'],
    images: {
        remotePatterns: [
            new URL('https://res.cloudinary.com/**'),
            new URL('https://ipcdn-web.apple.com/**'),
            {
                protocol: 'https',
                hostname: '**.**.**',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
