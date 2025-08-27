'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in your travel packages?",
      answer: "Our comprehensive travel packages include accommodation, transportation, guided tours, specified meals, travel insurance, and 24/7 support. Each package clearly lists what's included, and we're transparent about any additional costs. We also provide detailed itineraries and can customize packages based on your preferences."
    },
    {
      question: "How far in advance should I book my trip?",
      answer: "We recommend booking at least 3-6 months in advance for international trips to secure the best rates and availability. For peak season destinations (holidays, festivals, etc.), booking 6-12 months ahead is ideal. However, we can also arrange last-minute trips based on availability."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our flexible cancellation policy allows free cancellation up to 45 days before departure for most packages. Between 44-15 days, a 50% fee applies. Within 14 days, cancellations are subject to supplier terms. We recommend travel insurance for additional protection against unforeseen circumstances."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, comprehensive travel insurance is included in all our packages at no extra cost. This covers medical emergencies, trip cancellation, lost luggage, and travel delays. We also offer optional premium insurance upgrades for additional coverage including adventure sports and higher medical limits."
    },
    {
      question: "Can you customize packages for special occasions?",
      answer: "Absolutely! We specialize in creating custom experiences for honeymoons, anniversaries, birthdays, family reunions, and corporate retreats. Our team works closely with you to understand your vision and create a personalized itinerary that exceeds your expectations."
    },
    {
      question: "What support do you provide during the trip?",
      answer: "We provide 24/7 emergency support throughout your journey. You'll have access to our dedicated support team, local representatives in your destination, and emergency contact numbers. We also provide a mobile app with your itinerary, local information, and direct communication with our support team."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[hsl(var(--muted))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Find answers to common questions about our travel services, 
            booking process, and what to expect on your journey with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[hsl(var(--background))] rounded-lg border border-border animate-slide-up px-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--muted-foreground))] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Have more questions? We&apos;re here to help!
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[hsl(var(--primary))] cursor-pointer hover:text-[hsl(var(--primary))]/80 font-semibold underline transition-colors duration-200"
          >
            Contact our travel experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;