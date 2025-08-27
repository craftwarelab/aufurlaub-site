'use client';

import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Message Sent!",
    //   description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    // });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer id="contact" className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Start Your Journey Today
            </h2>
            <p className="md:text-xl opacity-90 max-w-2xl mx-auto animate-slide-up">
              Ready to explore the world? Get in touch with our travel experts 
              and let us plan your perfect adventure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[hsl(var(--background))]/10 border-[hsl(var(--background))]/20 text-[hsl(var(--background))] placeholder:text-[hsl(var(--background))]/70"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[hsl(var(--background))]/10 border-[hsl(var(--background))]/20 text-[hsl(var(--background))] placeholder:text-[hsl(var(--background))]/70"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[hsl(var(--background))]/10 border-[hsl(var(--background))]/20 text-[hsl(var(--background))] placeholder:text-[hsl(var(--background))]/70"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your dream trip..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[hsl(var(--background))]/10 border-[hsl(var(--background))]/20 text-[hsl(var(--background))] placeholder:text-[hsl(var(--background))]/70 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))]"
                  size="lg"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-[hsl(var(--primary-foreground))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Visit Our Office</h4>
                    <p className="opacity-90 leading-relaxed">
                      168/20<br />
                      Araliya Residencies<br />
                      Galthude<br />
                      Panadura<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(var(--secondary))] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={20} className="text-[hsl(var(--secondary-foreground))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Call Us</h4>
                    <p className="opacity-90">
                      <a href="tel:+94773977135">+94773977135</a><br />
                      {/* +94773977135<br /> */}
                      {/* <span className="text-sm">WhatsApp: <a href="tel:+94773977135">+94773977135</a></span> */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={20} className="text-[hsl(var(--primary-foreground))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <p className="opacity-90">
                      <a href="mailto:tnliyanage@yahoo.com">tnliyanage@yahoo.com</a><br />
                      {/* info@aufurlaub.com<br />
                      <span className="text-sm">bookings@aufurlaub.com</span> */}
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Follow Our Adventures</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/17JfBf1fC9/" target="_blank" className="w-10 h-10 bg-[hsl(var(--background))]/10 hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[hsl(var(--background))]/10 hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[hsl(var(--background))]/10 hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[hsl(var(--background))]/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="opacity-80">
                © {new Date().getFullYear()} Aufurlaub Travel Agency. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              {/* <a href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                Terms of Service
              </a> */}
              <a href="https://www.itsnipun.live" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                Developed by Nipun Madusanka
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;