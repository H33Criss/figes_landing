/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'static.videezy.com',
                protocol: 'https'
            },

        ],
    }
}

module.exports = nextConfig
