import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AdBanner from "./AdBanner";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Content Creator",
    avatar: "AC",
    content: "This is hands down the best video downloader I've ever used. Lightning fast and no annoying ads!",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Digital Marketer",
    avatar: "SM",
    content: "I use this daily for my work. The quality options are fantastic and it works with every platform I need.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Educator",
    avatar: "JW",
    content: "Simple, fast, and reliable. I download educational videos for offline viewing. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(280,80%,60%,0.05),transparent_70%)]" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Loved by <span className="gradient-text">Millions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See what our users have to say about SaveAll
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full relative hover:border-primary/30 transition-colors">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
