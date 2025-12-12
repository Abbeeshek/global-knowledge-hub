import { BookOpen, GraduationCap, FileText, Users } from "lucide-react";

const offerings = [
  {
    icon: BookOpen,
    title: "E-Books Library",
    features: [
      "Multi-category e-books",
      "Professional, academic & skill-based",
      "Easy access on all devices"
    ]
  },
  {
    icon: GraduationCap,
    title: "Digital Educational Products",
    features: [
      "Study materials",
      "Competitive exam guides",
      "Interactive learning modules"
    ]
  },
  {
    icon: FileText,
    title: "Research Publications & Journals",
    features: [
      "Verified academic papers",
      "Research tools",
      "Knowledge support for students & professionals"
    ]
  },
  {
    icon: Users,
    title: "Author & Creator Platform",
    features: [
      "Publish your own e-books",
      "Earn from downloads",
      "Global reader reach"
    ]
  }
];

const OfferingsSection = () => {
  return (
    <section className="section-padding bg-background relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6">
            What We <span className="gold-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions for modern learners, researchers, and creators.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => (
            <div 
              key={offering.title}
              className="group glass-card p-8 hover-gold cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <offering.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {offering.title}
              </h3>

              {/* Features */}
              <ul className="space-y-3">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;