import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/compania", destination: "/nosotros", permanent: true },
      { source: "/soluciones", destination: "/servicios", permanent: true },
      { source: "/calidad-operacion", destination: "/calidad", permanent: true },
      { source: "/impacto", destination: "/rse", permanent: true },
      { source: "/sectores", destination: "/servicios", permanent: true },
      { source: "/insights", destination: "/nosotros", permanent: false },
    ];
  },
};

export default nextConfig;
