import { Lightbulb, Brain, Zap, Target } from "lucide-react";

const InnovationSection = () => {
  return (
    <section className="section-padding bg-card/30 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>

          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Innovation</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-8">
            Innovation in <span className="gold-text">Learning</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            "We integrate technology with education — from smart reading modes to 
            personalized suggestions, enabling faster and deeper learning experiences."
          </p>

          {/* Features row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Brain, title: "Smart Learning", desc: "AI-powered recommendations" },
              { icon: Zap, title: "Fast Access", desc: "Instant content delivery" },
              { icon: Target, title: "Personalized", desc: "Tailored learning paths" }
            ].map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;