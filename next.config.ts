import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sortie "standalone" : bundle serveur minimal (idéal Docker / Vercel)
  output: "standalone",

  // Autorise les images distantes
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }, // optionnel : retire si inutile
    ],
  },
};

export default nextConfig;
