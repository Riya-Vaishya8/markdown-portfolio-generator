import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/markdown-portfolio-generator",
  assetPrefix: "/markdown-portfolio-generator/",
  trailingSlash:true,
  images:{
    unoptimized:true,
  },
};

export default nextConfig;
