import { DollarSign, MapPin, Clock, Shield, Users, Star, Compass } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Packages",
      description:
        "Best value travel packages with transparent pricing and no hidden fees.",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description:
        "Local expert guides who know the culture, history, and hidden gems.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for any assistance during your trip.",
    },
    {
      icon: Compass,
      title: "Authentic Experiences",
      description:
        "Handpicked local experiences that let you truly connect with the destination.",
    },
    {
      icon: MapPin,
      title: "Custom Itineraries",
      description:
        "Personalized travel plans tailored to your interests and preferences.",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description:
        "Luxury accommodations and exclusive experiences at competitive prices.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6 animate-fade-in">
            Why Choose Aufurlaub?
          </h2>
          <p className="md:text-xl text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto animate-slide-up">
            Personalized Itineraries, Expert knowledge, women empowering,
            sustainable travel options, Local connections, Quality service and
            Comprehensive packages. Whether you are a solo traveler, a couple on
            a romantic getaway, a family looking for adventure or a group,
            Aufurlaub can help you create lasting memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-[hsl(var(--primary))]/20 hover:shadow-lg transition-all duration-300 animate-slide-up bg-[hsl(var(--card))]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--primary))] group-hover:scale-110 transition-all duration-300">
                <feature.icon
                  size={24}
                  className="text-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary-foreground))] transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                {feature.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
