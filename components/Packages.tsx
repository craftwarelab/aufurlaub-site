"use client";
import React, { useState } from "react";
import { MapPin, Calendar, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Model from "./ui/model";

interface Package {
  price: string;
  title: string;
  destination: string;
  duration: string;
  rating: number;
  image: string;
  description: string;
  features: string[];
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
}

const PackageCard = ({ pkg }: { pkg: Package }) => {
  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader>
        <Image
          src={pkg.image}
          alt="package"
          width={400}
          height={600}
          className="w-full h-[400] object-cover"
        />
      </CardHeader>
      {/* <CardContent>
        <h2 className="text-lg font-semibold">{pkg.price}</h2>
        <p className="text-sm text-muted-foreground">{pkg.rating}</p>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </CardContent> */}
      <CardContent className="">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
            {pkg.title}
          </h3>
          {/* <h2 className="text-lg font-semibold text-[hsl(var(--foreground))]">
            {pkg.price}
          </h2> */}
        </div>

        <div className="flex items-center text-[hsl(var(--muted-foreground))] text-sm mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="mr-4">{pkg.destination}</span>
          <Calendar size={16} className="mr-1" />
          <span>{pkg.duration}</span>
        </div>

        <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4 leading-relaxed">
          {pkg.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.features.map((feature, idx) => (
            <span
              key={idx}
              className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-2 py-1 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
      <CardContent>
        <div className="block space-y-1 mb-4">
          <h4 className="text-lg font-[600]">Itinerary</h4>
          {pkg.itinerary.map((feature, idx) => (
            <span
              key={idx}
              className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/70 inline-block w-full text-[hsl(var(--accent-foreground))] px-2 py-1 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="block space-y-1 mb-4">
          <h4 className="text-lg font-[600]">Inclusions</h4>
          {pkg.inclusions.map((feature, idx) => (
            <span
              key={idx}
              className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/70 inline-block w-full text-[hsl(var(--accent-foreground))] px-2 py-1 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="block space-y-1 mb-4">
          <h4 className="text-lg font-[600]">Exclusions</h4>
          {pkg.exclusions.map((feature, idx) => (
            <span
              key={idx}
              className="w-full inline-block bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/70 text-[hsl(var(--accent-foreground))] px-2 py-1 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href="mailto:tnliyanage@yahoo.com" className="w-full">
          <Button className="w-full bg-[hsl(var(--primary))] cursor-pointer hover:bg-[hsl(var(--primary))]/80 text-[hsl(var(--primary-foreground))]">
            Book Now
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
const Packages = () => {
  const [activePackage, setActivePackage] = useState<Package | null>(null);
  const [showModel, setShowModel] = useState(false);
  const packages = [
    {
      id: 1,
      title: "Journey Through Time",
      destination: "Sri Lanka",
      duration: "12 Days / 11 Nights",
      price: "$2,499",
      rating: 4.9,
      image: "/pkg/journey_through_vibe.jpg",
      description:
        "Experience Sri Lanka’s culture, wildlife, and beaches with our expertly crafted 12-day guided tour.",
      features: ["Guidance", "Comfort", "Authenticity", "Diversity"],
      itinerary: [
        "Day 1: Arrival / Accommodation in Negombo",
        "Day 2: Habarana / Minneriya National Park Safari",
        "Day 3: Habarana / Visit Sigiriya Rock Fortress & Village Tour",
        "Day 4: Kandy / Visit Dambulla Cave Temple on the way",
        "Day 5: Kandy City Tour / Visit Tooth Relic Temple / Botanical Gardens & Evening Cultural Show",
        "Day 6: Nuwara Eliya with Tea Plantation and Tea Factory Experience",
        "Day 7: Ella by Local Train / Afternoon Sightseeing in Ella",
        "Day 8: Udawalawa / Visit Elephant Transit Home & Afternoon Safari in Udawalawa National Park",
        "Day 9: Proceed to Unawatuna / Hikkaduwa or Bentota / Visit Galle Fort on the way / Beach Stay",
        "Day 10: Beach Stay",
        "Day 11: Beach Stay",
        "Day 12: Departure",
      ],
      inclusions: [
        "Comfortable accommodation",
        "Daily breakfast and dinner at the hotel",
        "Transport in a luxury car or van",
        "English or German speaking driver",
        "Safari Jeep cost",
        "Village tour with lunch",
        "Train tickets 2nd or 3rd class on availability",
      ],
      exclusions: [
        "Lunch",
        "All entrance fees for sites and National Parks",
        "Tips",
      ],
    },
    {
      id: 2,
      title: "Beach Vibes",
      destination: "Sri Lanka",
      duration: "11 Days / 10 Nights",
      price: "$1,899",
      rating: 4.8,
      image: "/pkg/beach_vibe.jpg",
      description:
        "Relax on pristine beaches while exploring Sri Lanka’s culture and scenic train journeys.",
      features: ["Beaches", "Excursions", "Culture", "Relaxation"],
      itinerary: [
        "Day 1: Arrival / Proceed to Bentota / Hikkaduwa or Unawatuna",
        "Day 2: Leisure on the beach",
        "Day 3: Leisure on the beach",
        "Day 4: Day excursion to Kandy (Visit Tooth Relic Temple, Botanical Gardens, Tea Factory, and Shopping)",
        "Day 5: Leisure on the beach",
        "Day 6: Leisure on the beach",
        "Day 7: Excursion to Galle (Visit Turtle Hatchery, Moonstone Mines, Boat Ride, Galle Fort)",
        "Day 8: Leisure on the beach",
        "Day 9: Excursion to Ella with a local train journey (Visit Tea Plantations, Waterfalls, Nine Arch Bridge, Ella Town)",
        "Day 10: Leisure on the beach",
        "Day 11: Departure",
      ],
      inclusions: [
        "Comfortable accommodation",
        "Daily breakfast and dinner at the hotel",
        "Transport in a luxury car or van",
        "English or German speaking driver",
        "Train tickets 2nd or 3rd class on availability",
        "Boat ride",
      ],
      exclusions: ["Lunch", "Entrance tickets for sites", "Tips"],
    },
    {
      id: 3,
      title: "Colombo by Walking",
      destination: "Colombo, Sri Lanka",
      duration: "Full Day",
      price: "$199",
      rating: 4.8,
      image: "/pkg/colombo_walking.jpg",
      description:
        "Discover Colombo’s vibrant markets, temples, and colonial heritage with a local lady guide.",
      features: ["Sustainable", "Eco-Friendly", "Culture", "Empowerment"],
      itinerary: [
        "08:30 AM: Leave from the hotel",
        "Visit Colombo Pettah Market & Colonial Buildings",
        "Experience the local bazar & street food",
        "Visit the Red Mosque, Hindu Temple, and buzzing streets in Pettah",
        "Refreshment at Old Dutch Hospital Complex",
        "Visit Gangaramaya Buddhist Temple",
        "Optional: Shopping in Colombo",
        "04:00 PM: Return to the hotel",
      ],
      inclusions: [
        "German or English speaking lady National Tourist Guide service",
        "Transport in a luxury car or van",
        "Entrance tickets to the Buddhist temple",
      ],
      exclusions: ["Refreshments or Lunch", "Tips"],
    },
    {
      id: 4,
      title: "Agro Farm Walking Tour",
      destination: "Sri Lanka Countryside",
      duration: "",
      price: "$149",
      rating: 4.9,
      image: "/pkg/agro_walking.jpg",
      description:
        "Discover Sri Lanka’s agro traditions with a farm walk, hands-on activities, and authentic local lunch.",
      features: ["Sustainable", "Organic", "Culture", "Authenticity"],
      itinerary: [
        "09:30 AM: Leave from the hotel",
        "1-hour countryside drive followed by a tuk tuk ride to the Agro farm",
        "Join farm people and experience daily activities",
        "Experience rubber tapping, tea plucking, coconut products, cinnamon peeling, and coconut oil making",
        "Make traditional sweets with local ladies",
        "Explore other crops in the farm",
        "Enjoy a traditional local lunch",
        "02:30 PM: Proceed back to the hotel",
      ],
      inclusions: [
        "German or English speaking lady National Tourist Guide service",
        "Transport in a luxury car or van",
        "Guided walking tour inside the farm",
        "Local lunch in the farm",
      ],
      exclusions: ["Tips"],
    },
    {
      id: 5,
      title: "Sinharaja Eco Trek",
      destination: "Sinharaja Rainforest, Sri Lanka",
      duration: "Full Day",
      price: "$179",
      rating: 4.9,
      image: "/pkg/sinharaja_eco.jpg",
      description:
        "Explore the UNESCO-listed Sinharaja Rainforest with expert guides, rich biodiversity, and authentic local experiences.",
      features: ["Nature", "Adventure", "Ecology", "Sustainability"],
      itinerary: [
        "07:00 AM: Leave from the hotel",
        "09:30 AM: Arrive at Sinharaja Rainforest",
        "3-hour / 7 km trekking tour in the rainforest",
        "Refreshments with a local family inside the forest (Ceylon tea & snack)",
        "Enjoy a natural stream bath near the rainforest",
        "Return to the hotel passing Sri Lanka’s countryside",
        "05:00 PM: Arrive at the hotel",
      ],
      inclusions: [
        "German or English speaking lady National Tourist Guide service",
        "Transport in a luxury car or van",
        "Entrance tickets to the Rainforest",
        "Trekker charges",
        "Refreshments session inside the forest",
      ],
      exclusions: ["Lunch", "Tips"],
    },
  ];

  const handleCloseModal = () => setShowModel(false);

  const handlePackageClick = (pkg: Package) => {
    setActivePackage(pkg);
    setShowModel(true);
  };

  return (
    <section id="packages" className="py-20 bg-[hsl(var(--muted))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6 animate-fade-in">
            Our Travel Packages
          </h2>
          <p className="md:text-xl text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto animate-slide-up">
            Explore the best of Sri Lanka with our expertly designed travel
            packages. Enjoy a perfect blend of cultural heritage, wildlife
            adventures, scenic landscapes, and relaxing beach escapes. Each
            package includes comfortable accommodations, guided tours, and
            unique local experiences to make your journey truly unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className=" group overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up border-border hover:border-[hsl(var(--primary))]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    width={600}
                    height={600}
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* <div className="absolute top-4 right-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div> */}
                  <div className="absolute top-4 left-4 flex items-center bg-[hsl(var(--background))]/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star
                      className="text-[hsl(var(--primary))] fill-current"
                      size={14}
                    />
                    <span className="text-sm font-medium ml-1">
                      {pkg.rating}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-[hsl(var(--muted-foreground))] text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="mr-4">{pkg.destination}</span>
                  <Calendar size={16} className="mr-1" />
                  <span>{pkg.duration}</span>
                </div>

                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-2 py-1 rounded-md text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-[hsl(var(--primary))] cursor-pointer hover:bg-[hsl(var(--primary))]/80 text-[hsl(var(--primary-foreground))]"
                  onClick={() => handlePackageClick(pkg)}
                >
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Model onClose={handleCloseModal} isOpen={showModel}>
        {activePackage && <PackageCard pkg={activePackage} />}
      </Model>
    </section>
  );
};

export default Packages;
