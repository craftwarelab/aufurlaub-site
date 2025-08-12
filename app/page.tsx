import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <About />
      <Features />
     
    </div>
  );
}
