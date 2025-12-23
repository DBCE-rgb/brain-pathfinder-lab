import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Building2, 
  Heart,
  Target,
  Calendar,
  CheckCircle2
} from "lucide-react";
import schoolSeminar from "@/assets/school-seminar.jpg";
import heroCounseling from "@/assets/hero-counseling.jpg";

const milestones = [
  { year: "2021", event: "BrainDevelop Career Intelligence established in Solan, Himachal Pradesh" },
  { year: "2021-22", event: "First 100 students benefited through DMIT counseling" },
  { year: "2022", event: "Initiated school partnership programs for career awareness" },
  { year: "2023", event: "Expanded services to colleges and higher education institutions" },
  { year: "2024", event: "Crossed milestone of 1000+ students guided" },
];

const values = [
  {
    icon: Target,
    title: "Scientific Approach",
    description: "We use established methodologies backed by neuroscience and psychology research.",
  },
  {
    icon: Heart,
    title: "Ethical Guidance",
    description: "Our counseling is meant to empower, not limit. We guide, not prescribe.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description: "Every recommendation is personalized to the individual's unique potential.",
  },
  {
    icon: Building2,
    title: "Institution Partnership",
    description: "We collaborate with schools and colleges for widespread career awareness.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Since 2021</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              About BrainDevelop
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              Empowering careers with clarity and science. We help individuals discover 
              their innate potential through DMIT-based counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                A Mission Born from Purpose
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                BrainDevelop Career Intelligence was established in 2021 with a clear mission: 
                to bring scientific clarity to career decisions. We witnessed countless students 
                and professionals struggling with career confusion, often making choices based 
                on pressure rather than potential.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Using DMIT (Dermatoglyphics Multiple Intelligence Test) methodology combined 
                with professional counseling, we help individuals understand their innate 
                strengths, learning preferences, and natural career inclinations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, having guided <strong className="text-foreground">1000+ students</strong> and 
                conducted numerous workshops in schools and colleges across the region, 
                we continue our commitment to ethical, science-backed career guidance.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-professional-xl">
                <img
                  src={heroCounseling}
                  alt="Career counseling session at BrainDevelop"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-lg px-6 py-4 shadow-lg">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm text-primary-foreground/80">Students Guided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Milestones Along the Way
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="shrink-0 w-24 text-right">
                  <span className="font-bold text-accent">{milestone.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full" />
                  {index < milestones.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-border -translate-x-1/2" />
                  )}
                </div>
                <div className="pl-6 pb-8">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Activities */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-professional-xl">
                <img
                  src={schoolSeminar}
                  alt="Career guidance workshop in school"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Community Impact</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Active in Schools & Institutions
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Beyond individual counseling, we actively engage with educational institutions 
                to spread career awareness. Our school programs include:
              </p>
              <ul className="space-y-4">
                {[
                  "Career awareness workshops for students",
                  "Parent orientation sessions on child development",
                  "Teacher training on identifying learning styles",
                  "DMIT assessment camps for batch processing",
                  "College seminars on career planning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Let's Begin Your Career Journey
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Connect with us to learn how we can help you or your institution with career guidance.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <Calendar className="h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
