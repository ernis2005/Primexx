/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "192.168.89.177",
            },
        ],
        minimumCacheTTL: 1500000,
    },
}

module.exports = nextConfig
