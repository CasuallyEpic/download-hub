import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

const StepCard = ({ step, title, description, icon: Icon, delay }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="glass-card p-8 h-full">
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-lg">
          {step}
        </div>
        <div className="pt-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;
