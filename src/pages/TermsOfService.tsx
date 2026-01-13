import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - SaveAll Video Downloader"
        description="Read the Terms of Service for SaveAll video downloader. Understand your rights and responsibilities when using our free video downloading service."
        keywords="terms of service, terms and conditions, user agreement, saveall terms"
        canonicalUrl="https://saveall.com/terms"
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 13, 2025</p>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using SaveAll, you accept and agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll provides a free online tool that allows users to download videos from various 
                  social media platforms for personal, non-commercial use only.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Only download content you have the right to access</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>Use downloaded content for personal, non-commercial purposes</li>
                  <li>Not use our service for any illegal activities</li>
                  <li>Not attempt to reverse engineer or exploit our service</li>
                </ul>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll does not claim ownership of any content downloaded through our service. 
                  All downloaded content remains the property of its original creators and rights holders.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll is provided "as is" without any warranties of any kind. We do not guarantee 
                  uninterrupted service or that the service will be error-free.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising out of or in connection with the use of our service.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of the service 
                  after changes constitutes acceptance of the new terms.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
