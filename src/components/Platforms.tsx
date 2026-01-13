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
  Film
} from "lucide-react";

const platforms = [
  { name: "YouTube", icon: Youtube, color: "hsl(0, 100%, 50%)", path: "/youtube" },
  { name: "Facebook", icon: Facebook, color: "hsl(221, 44%, 41%)", path: "/facebook" },
  { name: "Instagram", icon: Instagram, color: "hsl(340, 75%, 54%)", path: "/instagram" },
  { name: "Twitter", icon: Twitter, color: "hsl(203, 89%, 53%)", path: "/twitter" },
  { name: "TikTok", icon: Music2, color: "hsl(349, 100%, 60%)", path: "/tiktok" },
  { name: "Vimeo", icon: Video, color: "hsl(195, 100%, 45%)", path: "/" },
  { name: "Dailymotion", icon: Play, color: "hsl(210, 100%, 50%)", path: "/" },
  { name: "Pinterest", icon: Film, color: "hsl(0, 78%, 45%)", path: "/" },
];

const Platforms = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Supported <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Download videos from all your favorite social media and streaming platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <Link key={platform.name} to={platform.path}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 flex flex-col items-center gap-4 cursor-pointer group"
              >
                <div
                  className="platform-icon"
                  style={{ backgroundColor: platform.color }}
                >
                  <platform.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {platform.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-10"
        >
          + 1000 more platforms supported
        </motion.p>
      </div>
    </section>
  );
};

export default Platforms;
