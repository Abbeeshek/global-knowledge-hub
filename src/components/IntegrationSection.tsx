import { Shield, Gift, Coins, Cloud } from "lucide-react";

const integrations = [
  {
    icon: Shield,
    title: "Blockchain-Secured Author Rights",
    description: "Protect your intellectual property with cutting-edge blockchain technology."
  },
  {
    icon: Gift,
    title: "Subscription & Member Benefits",
    description: "Exclusive perks and premium access for our valued community members."
  },
  {
    icon: Coins,
    title: "Digital Asset Learning Points",
    description: "Earn rewards as you learn and engage with educational content."
  },
  {
    icon: Cloud,
    title: "Secure Cloud Storage",
    description: "Access your library anywhere with enterprise-grade cloud infrastructure."
  }
];

const IntegrationSection = () => {
  return (
    <section className="section-padding relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Integration</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6">
            Network Global <span className="gold-text">Integration</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seamlessly connected ecosystem for the ultimate digital learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((item, index) => (
            <div 
              key={item.title}
              className="glass-card p-8 flex gap-6 items-start hover-gold group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;