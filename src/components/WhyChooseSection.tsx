import { Check, Smartphone, DollarSign, RefreshCw, Sparkles } from "lucide-react";

const benefits = [
  { icon: Check, text: "High-quality curated content" },
  { icon: Smartphone, text: "Cross-platform access (mobile, web, tablet)" },
  { icon: DollarSign, text: "Affordable & community supported" },
  { icon: RefreshCw, text: "Regular updates & new releases" },
  { icon: Sparkles, text: "Seamless reading experience" }
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6">
              Why Choose <span className="gold-text">Network Global</span> Digital Library?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Experience the future of digital learning with our comprehensive platform 
              designed for accessibility, quality, and innovation.
            </p>

            {/* Benefits List */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.text}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="glass-card p-10 lg:p-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Start Your Journey
              </h3>
              <p className="text-muted-foreground mb-8">
                Join thousands of learners who trust Network Global for their educational needs.
              </p>
              <div className="flex flex-col gap-4">
                <button className="w-full px-6 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.3)]">
                  Get Started Free
                </button>
                <button className="w-full px-6 py-4 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 transition-all duration-300">
                  View Pricing
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;