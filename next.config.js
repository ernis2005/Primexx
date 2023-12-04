/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "141.8.198.192",
            },
        ],
        minimumCacheTTL: 1500000,
    },
}
module.exports = nextConfig
