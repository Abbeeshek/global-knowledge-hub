import { Quote } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-6 block">Our Vision</span>
          
          <div className="relative">
            {/* Quote marks */}
            <Quote className="w-12 h-12 text-primary/20 absolute -top-2 left-0 md:-left-16" />
            <Quote className="w-12 h-12 text-primary/20 absolute -bottom-2 right-0 md:-right-16 rotate-180" />
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold leading-relaxed text-foreground">
              To build a global knowledge hub where learning becomes 
              <span className="gold-text"> accessible</span>, 
              <span className="gold-text"> affordable</span>, and 
              <span className="gold-text"> available to all</span>.
            </h2>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <span className="text-primary font-display text-lg">Network Global</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;