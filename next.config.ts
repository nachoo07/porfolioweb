import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deploy manual por FTP a Hostinger: sitio 100% estático, sin backend.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
