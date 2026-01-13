import { motion } from "framer-motion";
import { Download, Heart, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  platforms: [
    { name: "YouTube", path: "/youtube" },
    { name: "Facebook", path: "/facebook" },
    { name: "Instagram", path: "/instagram" },
    { name: "TikTok", path: "/tiktok" },
    { name: "Twitter", path: "/twitter" },
  ],
  legal: [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "DMCA", path: "#" },
  ],
  support: [
    { name: "FAQ", path: "#" },
    { name: "Contact", path: "#" },
    { name: "API", path: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 px-4 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Download className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">SaveAll</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              The fastest and most reliable video downloader for all platforms.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 SaveAll. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for the internet
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
