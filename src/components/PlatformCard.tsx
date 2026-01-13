import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PlatformCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  delay: number;
}

const PlatformCard = ({ name, icon: Icon, color, delay }: PlatformCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card p-6 flex flex-col items-center gap-4 cursor-pointer group"
    >
      <div
        className="platform-icon"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default PlatformCard;
