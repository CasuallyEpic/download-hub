import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Free Video Downloader - YouTube, TikTok, Instagram & More"
        description="Download videos from YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. Free, fast, and no registration required. HD quality downloads."
        keywords="video downloader, youtube downloader, tiktok downloader, instagram downloader, facebook video download, free video download, hd video downloader"
        canonicalUrl="https://saveall.com"
      />
      <main className="min-h-screen bg-background">
        <Hero />
        <Platforms />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
