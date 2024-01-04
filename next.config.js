/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'static.videezy.com',
                protocol: 'https'
            },
            {
                hostname: 'www.arqhys.com',
                protocol: 'https'
            },
            {
                hostname: 'generaldefundicion.com',
                protocol: 'https'
            },
            {
                hostname: 'titulos.descubrelafp.org',
                protocol: 'https'
            },

        ],
    }
}

module.exports = nextConfig
