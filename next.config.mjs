/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // WARNING: not recommended, vercel will charge for every "resize image", so create your own resize function
    remotePatterns: [{ hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
