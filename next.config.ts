import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "futuramaapi.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },

      
    ],
  },
};

export default nextConfig;
