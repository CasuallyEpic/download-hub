import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - SaveAll Video Downloader"
        description="Read SaveAll's Privacy Policy to understand how we collect, use, and protect your personal information when using our video downloading service."
        keywords="privacy policy, data protection, personal information, saveall privacy"
        canonicalUrl="https://saveall.com/privacy"
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 13, 2025</p>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll is designed with your privacy in mind. We collect minimal information necessary to provide our service:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>URLs you submit for downloading (not stored after processing)</li>
                  <li>Anonymous usage statistics to improve our service</li>
                  <li>Technical information such as browser type and device type</li>
                </ul>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the collected information solely to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Process your video download requests</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Prevent abuse and maintain service integrity</li>
                </ul>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience and for analytics purposes. 
                  You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for analytics and advertising. These services 
                  have their own privacy policies governing the use of your information.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your information. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@saveall.com
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

export default PrivacyPolicy;
