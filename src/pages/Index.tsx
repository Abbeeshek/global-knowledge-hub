import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OfferingsSection from "@/components/OfferingsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import InnovationSection from "@/components/InnovationSection";
import IntegrationSection from "@/components/IntegrationSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Network Global — Digital E-Books & Knowledge Ecosystem</title>
        <meta name="description" content="A global platform offering e-books, research materials, educational content, and digital learning resources. Empowering minds through digital knowledge." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <OfferingsSection />
          <WhyChooseSection />
          <InnovationSection />
          <IntegrationSection />
          <VisionSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;