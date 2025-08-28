import { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AufUrlaub - Sri Lanka Travel & Holiday Packages | Sri Lanka Reisen",
    short_name: "AufUrlaub",
    description:
      "Book unforgettable Sri Lanka holidays with AufUrlaub. Explore curated travel packages, cultural tours, safaris, beaches & authentic experiences. | Buchen Sie unvergessliche Sri Lanka Reisen mit AufUrlaub – Kultur, Safari, Strände & mehr.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192",
        type: "image/jpg",
      },
      {
        src: "/logo.jpg",
        sizes: "512x512",
        type: "image/jpg",
      },
    ],
  };
}