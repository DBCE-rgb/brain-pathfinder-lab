import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Begin Your Career Discovery Journey
        </h2>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Take the first step towards understanding your innate potential. 
          Schedule a DMIT assessment session today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <Calendar className="h-5 w-5" />
              Book Counseling Session
            </Link>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="tel:+919805500827">
              <Phone className="h-5 w-5" />
              +91 98055 00827
            </a>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-primary-foreground/70">
          <MapPin className="h-5 w-5" />
          <span>
            2nd Floor, Thakur Complex, Above Utkarsh Bank, Kotlanala Chowk, Solan, HP – 173212
          </span>
        </div>
      </div>
    </section>
  );
};
