/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "141.8.198.192",

            },
            {
                protocol: "http",
                hostname: "185.251.88.126",
                
            },
        ],
        minimumCacheTTL: 1500000,
    },
}
module.exports = nextConfig
