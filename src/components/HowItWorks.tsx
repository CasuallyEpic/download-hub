import { motion } from "framer-motion";
import { Link, Search, Download, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link as RouterLink } from "react-router-dom";
import AdBanner from "./AdBanner";

const steps = [
  {
    step: 1,
    title: "Choose Platform",
    description: "Select your platform from YouTube, TikTok, Instagram, and more.",
    icon: Search,
  },
  {
    step: 2,
    title: "Paste the Link",
    description: "Copy the video URL and paste it into our downloader.",
    icon: Link,
  },
  {
    step: 3,
    title: "Download & Enjoy",
    description: "Choose quality and download directly to your device.",
    icon: Download,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175,80%,50%,0.03),transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Simple Process
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Download any video in just 3 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10"
                >
                  {step.step}
                </motion.div>

                <div className="glass-card p-8 pt-10 h-full text-center md:text-left hover:border-primary/30 transition-colors group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {["No Registration", "No Limits", "100% Free", "All Devices"].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-5 h-5 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <RouterLink to="/youtube">
            <Button variant="gradient" size="xl" className="group">
              Try It Now — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </RouterLink>
        </motion.div>

        {/* Ad Banner */}
        <div className="flex justify-center mt-16">
          <AdBanner size="rectangle" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
