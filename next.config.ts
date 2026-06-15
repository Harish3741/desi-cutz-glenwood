import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/desi-cutz-glenwood",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
