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
            With 5+ years of experience in the tourism industry, we specialize
            in creating unforgettable travel experiences. Led by a passionate
            female national tourist guide, our tours are designed to showcase
            the beauty and culture of our motherland. With a passion for
            Sustainable tourism, we strive to promote responsible travel
            practices while delivering exceptional service to our clients.
          </p>

          <div>
            <a href="https://www.getyourguide.com/-s386132" target="_blank">
              <Image
                src="https://gyg.me/DFO5LFuz"
                width={400}
                height={400}
                className="mx-auto w-[130px] h-auto border border-[#c6c8d0]"
                alt="GetYourGuide | Aufurlaub "
              />
            </a>
          </div>
          {/* <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe
                  className="text-[hsl(var(--primary-foreground))]"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                Global Reach
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                We&apos;ve curated experiences across 6 continents and 50+
                countries, bringing you the world&apos;s hidden gems.
              </p>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users
                  className="text-[hsl(var(--secondary-foreground))]"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                Happy Travelers
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Over 50,000 satisfied customers have trusted us with their dream
                vacations and adventure expeditions.
              </p>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award
                  className="text-[hsl(var(--primary-foreground))]"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                Award Winning
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Recognized as &quot;Best Travel Agency&quot; for three
                consecutive years by the International Tourism Board.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
