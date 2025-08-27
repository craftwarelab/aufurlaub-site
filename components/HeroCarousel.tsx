'use client';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Img1 from "@/assets/img_1.jpg";
import Img2 from "@/assets/img_2.jpg";
import Img3 from "@/assets/img_3.jpg";
import Img4 from "@/assets/img_4.jpg";
// import heroBeach from "@/assets/hero-beach.jpg";
// import heroMountains from "@/assets/hero-mountains.jpg";
// import heroCity from "@/assets/hero-city.jpg";
// import heroJungle from "@/assets/hero-jungle.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/headImage/img_5.jpg',
      title: "Tropical Paradise Awaits",
      subtitle: "Discover pristine beaches and crystal-clear waters",
      credit: "Photo by Malinda Bandara"
    },
    {
      image: '/headImage/img_6.jpg',
      title: "Mountain Adventures",
      subtitle: "Experience breathtaking peaks and alpine serenity",
      credit: "Photo by Lena Goncharova"
    },
    {
      image: '/headImage/img_1.jpg',
      title: "Historic Cities",
      subtitle: "Explore ancient cultures and charming old towns",
      credit: ""
    },
    {
      image: '/headImage/img_4.jpg',
      title: "Jungle Expeditions",
      subtitle: "Venture into lush rainforests and hidden waterfalls",
      credit: "Photo by Himash Shavinda"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 right-0 p-2">
              <span className="text-[8px] text-gray-200">
              {slide.credit}
              </span>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Discover Your Next
                  <span className="block bg-hero-[var(--hero-gradient)] bg-clip-text text-transparent">
                    Adventure
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                  {slide.subtitle}
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] px-8 py-4 text-lg animate-float"
                    onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Explore Packages
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-[hsl(var(--foreground))] px-8 py-4 text-lg"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 z-10"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 z-10"
      >
        <ChevronRight size={48} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-[hsl(var(--primary))]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;