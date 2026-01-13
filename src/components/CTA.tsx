import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
          
          <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(175,80%,50%,0.03)_25%,hsl(175,80%,50%,0.03)_50%,transparent_50%,transparent_75%,hsl(175,80%,50%,0.03)_75%)] bg-[size:60px_60px]" />
            
            {/* Floating sparkles */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 left-8"
            >
              <Sparkles className="w-6 h-6 text-primary/40" />
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 right-8"
            >
              <Sparkles className="w-8 h-8 text-accent/40" />
            </motion.div>

            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Start <span className="gradient-text">Downloading</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join millions of users who trust SaveAll for their video downloading needs.
                It's free, fast, and works everywhere.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gradient" size="xl" className="group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Start Downloading Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/youtube">
                  <Button variant="glass" size="xl">
                    Browse Platforms
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
