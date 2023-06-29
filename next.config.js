/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    domains: ["avatars.githubusercontent.com","avatars1.githubusercontent.com","tailwindui.com"  ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},

}




module.exports = nextConfig
