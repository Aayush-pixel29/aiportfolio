/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        webpackBuildWorker: false,
    },
};

export default nextConfig;
