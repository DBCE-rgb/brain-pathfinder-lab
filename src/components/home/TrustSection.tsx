import { Shield, Lock, FileCheck, Award } from "lucide-react";
import schoolSeminar from "@/assets/school-seminar.jpg";

const trustItems = [
  {
    icon: Shield,
    title: "Confidential Assessment",
    description: "All personal information and assessment data are kept strictly confidential.",
  },
  {
    icon: Lock,
    title: "Ethical Guidance",
    description: "Our counseling is guidance-based, not diagnostic. We help, not prescribe.",
  },
  {
    icon: FileCheck,
    title: "Scientific Methodology",
    description: "DMIT is based on established dermatoglyphics research and neuroscience principles.",
  },
  {
    icon: Award,
    title: "Experienced Counselors",
    description: "Our team has guided 1000+ students through their career exploration journey.",
  },
];

export const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Trust & Ethics</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              Committed to Ethical Career Guidance
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe in responsible use of assessment outcomes. Our approach is to empower 
              individuals with self-awareness, not to limit their potential. DMIT insights are 
              meant to guide decisions, not dictate them.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-professional-xl">
              <img
                src={schoolSeminar}
                alt="Career guidance workshop in school auditorium"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-lg px-6 py-3 shadow-lg">
              <p className="font-bold text-lg">Active in Schools</p>
              <p className="text-sm text-primary-foreground/80">Regular workshops & seminars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
