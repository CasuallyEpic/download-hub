import { motion } from "framer-motion";
import { Zap, Shield, Infinity, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos in seconds with our optimized servers",
  },
  {
    icon: Shield,
    title: "100% Safe",
    description: "No malware, no registration, just pure downloading",
  },
  {
    icon: Infinity,
    title: "Unlimited Downloads",
    description: "No daily limits or restrictions on downloads",
  },
  {
    icon: Smartphone,
    title: "All Devices",
    description: "Works perfectly on desktop, tablet, and mobile",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">SaveAll</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The most reliable video downloader on the internet
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
