/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'static.videezy.com',
                protocol: 'https'
            },
            {
                hostname: 'user-images.githubusercontent.com',
                protocol: 'https'
            },
            {
                hostname: 'www.todoagua.es',
                protocol: 'https'
            },

        ],
    }
}

module.exports = nextConfig
