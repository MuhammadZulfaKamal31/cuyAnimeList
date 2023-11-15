/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                //harus placehold.co di depannya jang ada emblem2 yang lain kyk http
                //bisa di lihat pas waktu error di bagian hostname 
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
