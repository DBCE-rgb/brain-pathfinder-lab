import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  ClipboardList,
  Fingerprint,
  Brain,
  FileText,
  MessageCircle,
  Shield,
  Lock,
  CheckCircle2
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "Initial Consultation",
    description: "Schedule an appointment and have an initial orientation session with our counselor. We understand your concerns, expectations, and provide an overview of the DMIT process.",
  },
  {
    step: "02",
    icon: Fingerprint,
    title: "Fingerprint Collection",
    description: "Using advanced scanning technology, we collect clear fingerprint samples. This is a simple, non-invasive process that takes just a few minutes.",
  },
  {
    step: "03",
    icon: Brain,
    title: "Expert Analysis",
    description: "Our certified analysts interpret the dermatoglyphic patterns using established neuroscience principles to map intelligence distributions and learning preferences.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Report Generation",
    description: "A comprehensive, personalized report is generated covering multiple intelligences, learning styles, brain dominance, emotional traits, and career alignments.",
  },
  {
    step: "05",
    icon: MessageCircle,
    title: "One-to-One Counseling",
    description: "In a detailed session, our counselor explains each aspect of the report, answers questions, and provides a clear roadmap for leveraging the insights.",
  },
  {
    step: "06",
    icon: ClipboardList,
    title: "Follow-Up Support",
    description: "We provide ongoing guidance and support to help implement the recommendations. Additional sessions can be scheduled as needed for career planning.",
  },
];

const ethicsPoints = [
  "All personal data is kept strictly confidential and secure",
  "Reports are shared only with the individual and authorized guardians",
  "DMIT insights are guidance-based, not diagnostic or prescriptive",
  "We encourage exploration, not limitation of potential",
  "Results help inform decisions, not dictate them",
];

const ProcessPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <ClipboardList className="h-4 w-4" />
              <span className="text-sm font-medium">Counseling-Led Process</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Assessment Process
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              A structured, professional approach to career guidance – from initial consultation 
              to personalized roadmap delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Step by Step</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              How the Assessment Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Our counseling-led process ensures you receive not just a report, but a complete 
              understanding of how to use the insights for career planning.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-accent/20 font-serif">{step.step}</span>
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 bg-card rounded-xl border border-border p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Commitment</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Ethics & Confidentiality
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At BrainDevelop, we are committed to the highest ethical standards in career counseling. 
                Your trust is paramount, and we ensure complete confidentiality and responsible use of 
                assessment outcomes.
              </p>

              <ul className="space-y-4">
                {ethicsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl border border-border p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure Data</h3>
                <p className="text-sm text-muted-foreground">Protected storage & handling</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Private Sessions</h3>
                <p className="text-sm text-muted-foreground">Confidential counseling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Start Your Assessment?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your initial consultation and take the first step towards discovering your innate potential.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <Calendar className="h-5 w-5" />
              Book Consultation
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessPage;
