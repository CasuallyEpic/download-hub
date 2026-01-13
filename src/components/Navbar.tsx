import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#features");
      setTimeout(() => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
              <Download className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">SaveAll</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isHome ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/youtube"
              className={`text-sm font-medium transition-colors ${
                location.pathname !== "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Downloader
            </Link>
            <a
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleFeaturesClick}
            >
              Features
            </a>
            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/faq" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/youtube">
              <Button variant="gradient" size="sm" className="group">
                Start Download
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isHome ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/youtube"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname !== "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                Downloader
              </Link>
              <a
                href="/#features"
                onClick={(e) => {
                  handleFeaturesClick(e);
                  setIsOpen(false);
                }}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-all"
              >
                Features
              </a>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === "/faq" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                FAQ
              </Link>
              <div className="px-4 pt-2">
                <Link to="/youtube" onClick={() => setIsOpen(false)}>
                  <Button variant="gradient" className="w-full">
                    Start Download
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
