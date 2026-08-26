import type { NextConfig } from "next";

const isPagesExport = process.env.BUILD_TARGET === "pages";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isPagesExport ? "/stance-signal-site" : "",
  },
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
