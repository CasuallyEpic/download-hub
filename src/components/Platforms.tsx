import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Youtube, 
  Facebook, 
  Instagram, 
  Twitter, 
  Music2,
  Video,
  Play,
  Film,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import AdBanner from "./AdBanner";

const platforms = [
  { name: "YouTube", icon: Youtube, color: "hsl(0, 100%, 50%)", path: "/youtube", downloads: "25M+", popular: true },
  { name: "TikTok", icon: Music2, color: "hsl(349, 100%, 60%)", path: "/tiktok", downloads: "20M+", popular: true },
  { name: "Instagram", icon: Instagram, color: "hsl(340, 75%, 54%)", path: "/instagram", downloads: "18M+", popular: true },
  { name: "Facebook", icon: Facebook, color: "hsl(221, 44%, 41%)", path: "/facebook", downloads: "12M+" },
  { name: "Twitter", icon: Twitter, color: "hsl(203, 89%, 53%)", path: "/twitter", downloads: "8M+" },
  { name: "Vimeo", icon: Video, color: "hsl(195, 100%, 45%)", path: "/", downloads: "3M+" },
  { name: "Dailymotion", icon: Play, color: "hsl(210, 100%, 50%)", path: "/", downloads: "2M+" },
  { name: "Pinterest", icon: Film, color: "hsl(0, 78%, 45%)", path: "/", downloads: "5M+" },
];

const Platforms = () => {
  return (
    <section id="platforms" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Ad Banner - Top */}
        <div className="flex justify-center mb-12">
          <AdBanner size="leaderboard" className="hidden md:flex" />
          <AdBanner size="mobile" className="md:hidden" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Choose Your Platform
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Download from <span className="gradient-text">Any Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select a platform below to start downloading videos
          </p>
        </motion.div>

        {/* Popular Platforms - Featured */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {platforms.filter(p => p.popular).map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={platform.path} className="block group">
                <div className="glass-card p-8 h-full relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_50px_hsl(175,80%,50%,0.2)]">
                  {/* Popular badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, ${platform.color}20 0%, transparent 70%)`
                    }}
                  />
                  
                  <div
                    className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: platform.color }}
                  >
                    <platform.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {platform.downloads} downloads
                  </p>
                  
                  <Button variant="glass" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Download Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Other Platforms */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.filter(p => !p.popular).map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={platform.path} className="block group">
                <div className="glass-card p-5 flex flex-col items-center gap-3 hover:border-primary/40 transition-all duration-300">
                  <div
                    className="platform-icon group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: platform.color }}
                  >
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                    {platform.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground inline-flex items-center gap-2">
            <span className="w-12 h-px bg-border" />
            + 1000 more platforms supported
            <span className="w-12 h-px bg-border" />
          </p>
        </motion.div>

        {/* Ad Banner - Bottom */}
        <div className="flex justify-center mt-12">
          <AdBanner size="leaderboard" className="hidden md:flex" />
          <AdBanner size="mobile" className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Platforms;
