/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ✅ VERY IMPORTANT
  images: {
    unoptimized: true,
  },
}

export default nextConfig