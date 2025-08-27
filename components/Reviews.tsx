"use client";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Stefan Jäger",
      location: "Leipzig, Germany",
      avatar:
        "/reviews/1.jpg",
      rating: 5,
      review:
        "Wir hatten das Vergnügen, an drei verschiedenen Touren teilzunehmen und waren von der Gesamterfahrung begeistert. Unsere erste Tour führte uns in das malerische Hochland von Ella. Wir begannen mit einer aufregenden Tuktuk-Fahrt zur Nine Arches Bridge, wo wir die beeindruckende Architektur bewundern konnten. Nach einer...",
      trip: "Tropical Paradise Escape",
    },
    {
      id: 2,
      name: "Petra Fankhauser-Leuzinger",
      location: "Münsingen, Switzerland",
      avatar:  "/reviews/2.jpg",
      rating: 5,
      review:
        "Für die Planung unserer 30-tägigen Sri Lanka Ferien ist uns Tharuka von Anfang an mit vielen Tipps zur Seite gestanden. Dank ihres grossen Wissens hatten wir am Schluss eine tolle, abwechslungsreiche Reiseroute. Auch unser Privat-Taxi (Fahrer mit Auto) haben wir über sie gebucht und wir waren absolut zufrieden...",
      trip: "European Heritage Tour",
    },
    {
      id: 3,
      name: "Artbymissb Anna Bernadeta",
      location: "Zürich, Switzerland",
      avatar: "/reviews/3.jpg",
      rating: 5,
      review:
        "Tharuka ist eine tolle Reiseleiterin. Es macht Spass mit ihr das Land kennen zu lernen und so vieles Interessantes darüber zu erfahren. Eine wunderbare Art individueller Reisebegleitung um die Kultur zu begreifen.",
      trip: "Mountain Adventure Trek",
    },
    {
      id: 4,
      name: "Kim van Roon",
      location: "Netherland",
      avatar:"/reviews/4.jpg",
      rating: 5,
      review:
        "We had a fantastic holiday in Sri Lanka thanks to Aufurlaub. From the first moment we got in touch. The itinary was made very personal. We spoke about the things we are interested in. Everything is possible! The contact was amazing, short lines, quick responses and also during the holiday we kept in touch...",
      trip: "Safari & Wildlife Experience",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6 animate-fade-in">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto animate-slide-up">
            Don&apos;t just take our word for it—hear from our satisfied
            customers who have experienced the magic of travel with Aufurlaub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="group hover:shadow-lg transition-all duration-300 animate-slide-up border-border hover:border-[hsl(var(--primary))]/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={200}
                    height={200}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[hsl(var(--primary))]/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[hsl(var(--foreground))] text-lg">
                      {review.name}
                    </h4>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">
                      {review.location}
                    </p>
                    {/* <p className="text-[hsl(var(--primary))] text-sm font-medium mt-1">
                      {review.trip}
                    </p> */}
                  </div>
                  <Quote className="text-[hsl(var(--primary))]/30 flex-shrink-0" size={32} />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[hsl(var(--primary))] fill-current"
                      size={18}
                    />
                  ))}
                </div>

                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed italic">
                  &quot;{review.review}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-slide-up">
            <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              50,000+
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">Happy Travelers</div>
          </div>
          <div className="animate-slide-up">
            <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              4.9/5
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">Average Rating</div>
          </div>
          <div className="animate-slide-up">
            <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              50+
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">Countries Visited</div>
          </div>
          <div className="animate-slide-up">
            <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              15+
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
