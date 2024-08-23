/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", "images.pexels.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "",
            },
        ],
    },
};

export default nextConfig;
