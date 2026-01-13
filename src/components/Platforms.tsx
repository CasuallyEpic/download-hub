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
  ArrowRight
} from "lucide-react";

const platforms = [
  { name: "YouTube", icon: Youtube, color: "hsl(0, 100%, 50%)", path: "/youtube", downloads: "25M+" },
  { name: "Facebook", icon: Facebook, color: "hsl(221, 44%, 41%)", path: "/facebook", downloads: "12M+" },
  { name: "Instagram", icon: Instagram, color: "hsl(340, 75%, 54%)", path: "/instagram", downloads: "18M+" },
  { name: "Twitter", icon: Twitter, color: "hsl(203, 89%, 53%)", path: "/twitter", downloads: "8M+" },
  { name: "TikTok", icon: Music2, color: "hsl(349, 100%, 60%)", path: "/tiktok", downloads: "20M+" },
  { name: "Vimeo", icon: Video, color: "hsl(195, 100%, 45%)", path: "/", downloads: "3M+" },
  { name: "Dailymotion", icon: Play, color: "hsl(210, 100%, 50%)", path: "/", downloads: "2M+" },
  { name: "Pinterest", icon: Film, color: "hsl(0, 78%, 45%)", path: "/", downloads: "5M+" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
  }
};

const Platforms = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Supported Platforms
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Download from <span className="gradient-text">Any Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            One tool for all your video downloading needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {platforms.map((platform) => (
            <motion.div key={platform.name} variants={itemVariants}>
              <Link to={platform.path} className="block group">
                <div className="glass-card p-6 h-full flex flex-col items-center gap-4 relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(175,80%,50%,0.15)]">
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, ${platform.color}15 0%, transparent 70%)`
                    }}
                  />
                  
                  <div
                    className="platform-icon relative z-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: platform.color }}
                  >
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <span className="text-foreground font-semibold block mb-1 group-hover:text-primary transition-colors">
                      {platform.name}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {platform.downloads} downloads
                    </span>
                  </div>

                  {/* Arrow indicator */}
                  <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground inline-flex items-center gap-2">
            <span className="w-12 h-px bg-border" />
            + 1000 more platforms supported
            <span className="w-12 h-px bg-border" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Platforms;
