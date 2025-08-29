"use client";
import { Globe, Users, Award } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[hsl(var(--muted))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6 animate-fade-in">
            About Aufurlaub
          </h2>
          <p className=" md:text-xl text-[hsl(var(--muted-foreground))] mb-12 leading-relaxed animate-slide-up">
            With 15+ years of experience in the tourism industry, we specialize
            in creating unforgettable travel experiences. Led by a passionate
            female national tourist guide, our tours are designed to showcase
            the beauty and culture of our motherland. With a passion for
            Sustainable tourism, we strive to promote responsible travel
            practices while delivering exceptional service to our clients.
          </p>

          {/* Founders Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-8">
              Meet Our Founders
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              {/* Founder 2 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/founders2.webp" // Place your founder image in public/founder1.jpg
                  width={120}
                  height={120}
                  className="rounded-full h-[120px] w-[120px] object-cover border-2 border-[hsl(var(--primary))] shadow-lg"
                  alt="Jane Doe"
                />
                <span className="mt-4 text-lg font-medium text-[hsl(var(--foreground))]">
                  Tharuka Liyanage
                </span>
                <span className="text-[hsl(var(--muted-foreground))] text-sm">
                  The owner
                </span>
                <span className="text-[hsl(var(--muted-foreground))] text-sm">
                  National Tourist Guide
                </span>
              </div>
              {/* Founder 1 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/founders1.webp" // Place your founder image in public/founder1.jpg
                  width={120}
                  height={120}
                  className="rounded-full h-[120px] w-[120px] object-cover border-2 border-[hsl(var(--primary))] shadow-lg"
                  alt="Jane Doe"
                />
                <span className="mt-4 text-lg font-medium text-[hsl(var(--foreground))]">
                  Shyam
                </span>
                <span className="text-[hsl(var(--muted-foreground))] text-sm">
                  The Manager
                </span>
                <span className="text-[hsl(var(--muted-foreground))] text-sm">
                  National Tourist Guide
                </span>
              </div>
            </div>
          </div>

          {/* GetYourGuide Badge - positioned after founders */}
          {/* <div className="mt-12 flex justify-center">
            <a
              href="https://www.getyourguide.com/-s386132"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://gyg.me/DFO5LFuz"
                width={90}
                height={90}
                className="border border-[#c6c8d0] rounded-lg shadow"
                alt="GetYourGuide | Aufurlaub"
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
