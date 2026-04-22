/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ✅ Static export
  trailingSlash: true,     // ✅ FIXES 404 on DirectAdmin
  images: {
    unoptimized: true,     // ✅ Required for static hosting
  },
}

export default nextConfig