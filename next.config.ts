import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lei-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
