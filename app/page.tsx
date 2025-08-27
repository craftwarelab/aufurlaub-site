import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

// Add metadata export
export const metadata = {
  title: "AufUrlaub - Sri Lanka Travel Packages & Holiday Experiences | Reiseangebote Sri Lanka",
  description:
    "Book unforgettable Sri Lanka holidays with AufUrlaub. Explore curated travel packages, cultural tours, safaris, beaches & authentic experiences. | Buchen Sie unvergessliche Sri Lanka Reisen mit AufUrlaub – Kultur, Safari, Strände & mehr.",
  keywords: [
    "Sri Lanka travel",
    "Sri Lanka holidays",
    "Sri Lanka tour packages",
    "Sri Lanka beach vacations",
    "Sri Lanka cultural tours",
    "Sri Lanka safaris",
    "holiday packages",
    "travel agency Sri Lanka",
    "eco tours Sri Lanka",
    "luxury travel Sri Lanka",
    "Sri Lanka Reisen",
    "Sri Lanka Urlaub",
    "Sri Lanka Reiseangebote",
    "Sri Lanka Rundreisen",
    "Sri Lanka Pauschalreisen",
    "Sri Lanka Strandurlaub",
    "Sri Lanka Kulturreisen"
  ],
  openGraph: {
    title: "AufUrlaub - Sri Lanka Travel & Holiday Packages | Sri Lanka Reisen",
    description:
      "Discover Sri Lanka with AufUrlaub. From cultural tours to safaris and beach holidays, find your perfect package. | Entdecken Sie Sri Lanka mit AufUrlaub – Kulturreisen, Safari-Abenteuer & Strandurlaub.",
    url: "https://aufurlaub-site.com",
    siteName: "AufUrlaub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AufUrlaub - Sri Lanka Travel Packages | Sri Lanka Reisen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AufUrlaub - Sri Lanka Travel Packages | Sri Lanka Reisen",
    description:
      "Plan your dream Sri Lanka holiday with AufUrlaub. Explore beaches, safaris, culture & eco tours. | Planen Sie Ihren Traumurlaub in Sri Lanka mit AufUrlaub – Strände, Safari, Kultur & Ökotourismus.",
    images: ["/og-image.jpg"],
  },
};


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <About />
      <Features />
      <Packages />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}