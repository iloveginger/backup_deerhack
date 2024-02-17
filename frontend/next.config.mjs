/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost","deerwalk.edu.np","54.164.230.35"],
  },
};

export default nextConfig;
