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
            {
                protocol: "http",
                hostname: "192.168.89.177",
                
            },
        ],
        minimumCacheTTL: 1500000,
    },
}
module.exports = nextConfig
