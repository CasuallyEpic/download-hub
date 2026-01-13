import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

const DMCA = () => {
  return (
    <>
      <SEOHead
        title="DMCA Policy - SaveAll Video Downloader"
        description="Learn about SaveAll's DMCA compliance policy. We respect intellectual property rights and respond promptly to valid takedown requests."
        keywords="dmca policy, copyright infringement, takedown request, dmca notice, saveall dmca"
        canonicalUrl="https://saveall.com/dmca"
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">DMCA Policy</h1>
            </div>
            <p className="text-muted-foreground mb-8">Last updated: January 13, 2025</p>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll respects the intellectual property rights of others and expects our users to do the same. 
                  We comply with the Digital Millennium Copyright Act (DMCA) and will respond promptly to valid 
                  takedown notices.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">How SaveAll Works</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SaveAll acts as a tool that processes publicly available content. We do not host, store, 
                  or distribute any copyrighted material. The service merely facilitates the download of 
                  content that is already publicly accessible on third-party platforms.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Filing a DMCA Notice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you believe that your copyrighted work has been copied in a way that constitutes 
                  copyright infringement, please provide our DMCA Agent with the following information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>A physical or electronic signature of the copyright owner</li>
                  <li>Identification of the copyrighted work claimed to have been infringed</li>
                  <li>Identification of the material that is claimed to be infringing</li>
                  <li>Your contact information (address, phone number, email)</li>
                  <li>A statement that you have a good faith belief that the use is not authorized</li>
                  <li>A statement that the information is accurate under penalty of perjury</li>
                </ul>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Send DMCA notices to:<br />
                  <span className="text-foreground font-medium">dmca@saveall.com</span>
                </p>
                <p className="text-muted-foreground mt-4">
                  Please note that under Section 512(f) of the DMCA, any person who knowingly materially 
                  misrepresents that material is infringing may be subject to liability.
                </p>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Counter-Notification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you believe your content was wrongly removed, you may submit a counter-notification 
                  with the required information as specified in the DMCA.
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

export default DMCA;
