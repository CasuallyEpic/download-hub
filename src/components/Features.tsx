import { motion } from "framer-motion";
import { Zap, Shield, Infinity, Smartphone, CloudOff, Settings2 } from "lucide-react";
import AdBanner from "./AdBanner";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos in seconds with our globally distributed servers",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "No malware, no ads, no tracking. Your privacy is our priority",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Infinity,
    title: "Unlimited Downloads",
    description: "No daily limits, no restrictions. Download as much as you want",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Desktop, tablet, or mobile - works perfectly on all devices",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: CloudOff,
    title: "No Sign Up Required",
    description: "Start downloading immediately. No registration or login needed",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Settings2,
    title: "Multiple Formats",
    description: "Choose from various quality options: 4K, 1080p, 720p, or MP3",
    gradient: "from-rose-500 to-red-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The most reliable video downloader trusted by millions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full relative overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
