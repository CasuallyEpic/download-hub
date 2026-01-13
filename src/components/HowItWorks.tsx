import { motion } from "framer-motion";
import { Link, Search, Download } from "lucide-react";
import StepCard from "./StepCard";

const steps = [
  {
    step: 1,
    title: "Paste the Link",
    description: "Copy the video URL from any supported platform and paste it into the input field above.",
    icon: Link,
  },
  {
    step: 2,
    title: "Analyze & Process",
    description: "Our system will automatically detect the platform and fetch all available quality options.",
    icon: Search,
  },
  {
    step: 3,
    title: "Download & Enjoy",
    description: "Choose your preferred quality and format, then download the video directly to your device.",
    icon: Download,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175,80%,50%,0.05),transparent_70%)]" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Download any video in just 3 simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.step} {...step} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
