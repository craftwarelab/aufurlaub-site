import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";



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