import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MapPin, Award, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-counseling.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional career counseling session with parents and students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Established 2021 | Trusted by 1000+ Students</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            Guiding Careers with{" "}
            <span className="text-accent">Clarity, Science</span> & Experience
          </h1>

          {/* Subheading */}
          <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
            DMIT-Based Career Counseling | Discover innate talents, learning styles, and 
            career potential through scientific assessment and personalized guidance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <Calendar className="h-5 w-5" />
                Book DMIT Assessment
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919805500827">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <MapPin className="h-5 w-5" />
                Visit Center
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
            {[
              { icon: Award, label: "Since 2021", value: "Established" },
              { icon: Users, label: "Students", value: "1000+" },
              { icon: Building2, label: "Collaborations", value: "Schools" },
              { icon: Calendar, label: "Counseling", value: "Ethical" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
