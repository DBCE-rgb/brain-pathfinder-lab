import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Baby,
  UserCheck,
  RefreshCw
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Early Childhood (3-7 years)",
    subtitle: "Parent Guidance Program",
    description: "Help parents understand their child's innate learning style, natural interests, and developmental strengths. Provides guidance for nurturing activities and early education choices.",
    features: [
      "Learning style identification",
      "Activity recommendations",
      "Parent counseling session",
      "Development focus areas",
    ],
  },
  {
    icon: Users,
    title: "Child & Parent Counseling",
    subtitle: "Ages 8-14 years",
    description: "Comprehensive assessment to understand academic strengths, social abilities, and extracurricular inclinations. Helps parents guide their child's holistic development.",
    features: [
      "Multiple intelligence mapping",
      "Academic subject alignment",
      "Extracurricular suggestions",
      "Behavior understanding",
    ],
  },
  {
    icon: GraduationCap,
    title: "Student Career Roadmap",
    subtitle: "Ages 15-18 years",
    description: "Critical stream selection and career path guidance. DMIT insights combined with interest assessment to recommend suitable career domains and educational paths.",
    features: [
      "Stream selection guidance",
      "Career domain mapping",
      "College/course recommendations",
      "Entrance exam alignment",
    ],
  },
  {
    icon: UserCheck,
    title: "Higher Education Guidance",
    subtitle: "Ages 18-25 years",
    description: "Support for college students and fresh graduates in choosing specializations, internships, and entry-level career paths aligned with their innate strengths.",
    features: [
      "Specialization clarity",
      "Industry alignment",
      "Skill development plan",
      "Career entry strategy",
    ],
  },
  {
    icon: RefreshCw,
    title: "Career Transition Support",
    subtitle: "Working Professionals",
    description: "For professionals seeking career change or growth. Assessment helps identify transferable strengths and suitable alternative career paths.",
    features: [
      "Skill gap analysis",
      "Alternative career paths",
      "Upskilling recommendations",
      "Transition roadmap",
    ],
  },
  {
    icon: Building2,
    title: "Institutional Programs",
    subtitle: "Schools & Colleges",
    description: "Partner with educational institutions to provide DMIT assessments and career guidance workshops for students. Customized programs for different grade levels.",
    features: [
      "Batch assessments",
      "Teacher orientation",
      "Parent awareness sessions",
      "Career guidance workshops",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Comprehensive Services</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Career Counseling Services
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              Tailored guidance programs for every stage of life – from early childhood 
              development to professional career transitions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-professional-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-accent font-medium">{service.subtitle}</span>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mt-1 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why BrainDevelop</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2021", label: "Established Since" },
              { value: "1000+", label: "Students Guided" },
              { value: "50+", label: "School Workshops" },
              { value: "100%", label: "Confidential" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-card rounded-xl border border-border p-8">
                <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Explore Our Services?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss which program best suits your needs. We're here to help you find clarity.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <Calendar className="h-5 w-5" />
              Book Counseling Session
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
