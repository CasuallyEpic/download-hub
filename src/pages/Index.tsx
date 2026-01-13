import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Platforms />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
