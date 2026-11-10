import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kgori Capital",
    short_name: "Kgori Capital",
    description:
      "Independent, Botswana-owned investment manager. Internationally informed, locally invested since 2012.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6e1a26",
    lang: "en",
    icons: [
      {
        src: "/brand/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
