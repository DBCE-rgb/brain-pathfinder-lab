import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, FileText, Users, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "DMIT Assessment",
    description: "Scientific fingerprint analysis to understand innate intelligence patterns, brain dominance, and natural learning preferences.",
    href: "/dmit",
  },
  {
    icon: FileText,
    title: "Talent & Potential Report",
    description: "Comprehensive report covering multiple intelligences, learning styles, emotional traits, and career cluster alignment.",
    href: "/process",
  },
  {
    icon: Users,
    title: "Parent & Child Counseling",
    description: "Guided sessions helping parents understand their child's unique abilities and support their development journey.",
    href: "/services",
  },
  {
    icon: GraduationCap,
    title: "Student Career Roadmap",
    description: "Stream selection guidance, academic planning, and career path recommendations based on innate strengths.",
    href: "/services",
  },
  {
    icon: Briefcase,
    title: "Professional Guidance",
    description: "Career transition support and skill alignment for working professionals seeking clarity in their career path.",
    href: "/services",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Scientific Approach to Career Guidance
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine DMIT methodology with expert counseling to help individuals discover their 
            true potential and make informed career decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-8 hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.href}
                className="inline-flex items-center text-accent font-medium hover:gap-3 gap-2 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="professional" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
