/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // added
    images: {
      remotePatterns:[
        {
          protocol: "https",
          hostname: "**",
        }
      ]
    }
};

export default nextConfig;
