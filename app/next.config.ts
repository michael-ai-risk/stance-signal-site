import type { NextConfig } from "next";

const isPagesExport = process.env.BUILD_TARGET === "pages";

const nextConfig: NextConfig = {
  ...(isPagesExport
    ? {
        output: "export",
        basePath: "/stance-signal-site",
        assetPrefix: "/stance-signal-site/",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
