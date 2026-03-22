import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pin Turbopack root when multiple lockfiles exist (e.g. parent ~/package-lock.json),
// so dev cache/SST writes land in this project instead of the wrong directory.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  experimental: {
    // Reduces on-disk Turbopack SST issues after panics when using `npm run dev:turbo`.
    turbopackFileSystemCacheForDev: false,
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
