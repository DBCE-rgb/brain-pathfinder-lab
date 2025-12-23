import { CheckCircle2 } from "lucide-react";
import brainImage from "@/assets/brain-intelligence.jpg";

const benefits = [
  "Discover innate intelligence patterns unique to each individual",
  "Understand natural learning styles and preferences",
  "Identify brain hemisphere dominance for optimal learning",
  "Map emotional quotient and behavioral tendencies",
  "Get clarity on career domains aligned with natural strengths",
  "Make informed academic and career decisions",
];

export const WhyDMIT = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-professional-xl">
              <img
                src={brainImage}
                alt="Brain intelligence mapping visualization"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-professional-lg p-6 max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-accent mb-1">8+</p>
              <p className="text-foreground font-medium">Types of Intelligence</p>
              <p className="text-muted-foreground text-sm">Mapped through DMIT analysis</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why DMIT?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              Scientific Foundation for Career Decisions
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Dermatoglyphics Multiple Intelligence Test (DMIT) is a scientific study of fingerprint 
              patterns that reveals an individual's innate potential, learning abilities, and 
              personality traits. Unlike conventional aptitude tests, DMIT provides insights into 
              the natural wiring of the brain.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
