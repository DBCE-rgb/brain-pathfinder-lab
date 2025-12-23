import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Fingerprint, 
  BookOpen, 
  Heart, 
  Target, 
  Lightbulb,
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import dmitReport from "@/assets/dmit-report.jpg";

const whatDMITReveals = [
  {
    icon: Brain,
    title: "Multiple Intelligences",
    description: "Identify all 8 types of intelligence and their relative strengths in an individual.",
  },
  {
    icon: BookOpen,
    title: "Learning Styles",
    description: "Understand whether visual, auditory, or kinesthetic learning works best.",
  },
  {
    icon: Lightbulb,
    title: "Brain Dominance",
    description: "Discover left or right brain hemisphere preference and its implications.",
  },
  {
    icon: Heart,
    title: "Emotional Quotient",
    description: "Insights into emotional intelligence and interpersonal capabilities.",
  },
  {
    icon: Target,
    title: "Career Clusters",
    description: "Alignment of natural abilities with suitable career domains and paths.",
  },
  {
    icon: Fingerprint,
    title: "Innate Potential",
    description: "Genetic potential indicators that remain consistent throughout life.",
  },
];

const suitableFor = [
  { age: "3-7 Years", description: "Early childhood development insights for parents" },
  { age: "8-14 Years", description: "Learning style identification & academic guidance" },
  { age: "15-18 Years", description: "Stream selection & career path clarity" },
  { age: "18+ Years", description: "Higher education & professional career alignment" },
  { age: "Adults", description: "Career transition & skill development direction" },
];

const DMITPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Fingerprint className="h-4 w-4" />
              <span className="text-sm font-medium">Scientific Assessment</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              DMIT Assessment
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              Dermatoglyphics Multiple Intelligence Test – A scientific approach to understanding 
              innate talents, learning abilities, and natural potential through fingerprint analysis.
            </p>
          </div>
        </div>
      </section>

      {/* What is DMIT */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Understanding DMIT</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                What is DMIT?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific study that combines 
                the analysis of fingerprint patterns with neuroscience and psychology. Each person's 
                fingerprints are unique and form during fetal development alongside the brain's neocortex.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                This correlation allows trained counselors to interpret fingerprint patterns and 
                derive insights about an individual's innate intelligence distribution, learning 
                preferences, personality traits, and potential career alignments.
              </p>
              <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground">
                  <strong>Important:</strong> DMIT is a guidance tool, not a medical diagnosis. 
                  It helps in understanding natural tendencies to make informed decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-professional-xl">
                <img
                  src={dmitReport}
                  alt="DMIT assessment report with brain mapping charts"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What DMIT Reveals */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Key Insights</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              What DMIT Assessment Reveals
            </h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive DMIT analysis provides deep insights into multiple dimensions of an individual's innate potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatDMITReveals.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-professional-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-6">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Suitable For</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Who Can Benefit from DMIT?
            </h2>
            <p className="text-muted-foreground text-lg">
              DMIT assessment is valuable for individuals across all age groups, each with specific insights tailored to their life stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {suitableFor.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-professional transition-shadow"
              >
                <p className="text-2xl font-bold text-accent mb-2">{item.age}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Discover Your Innate Potential?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a DMIT assessment session with our certified counselors and begin your journey of self-discovery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <Calendar className="h-5 w-5" />
                Schedule DMIT Session
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/process">
                Learn About Process <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DMITPage;
