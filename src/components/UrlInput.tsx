import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Link, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const UrlInput = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="gradient-border p-[1px] rounded-2xl glow-effect">
        <div className="bg-card rounded-2xl p-2 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Link className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="url"
              placeholder="Paste your video link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-secondary/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <Button
            variant="gradient"
            size="xl"
            onClick={handleDownload}
            disabled={isLoading || !url}
            className="min-w-[160px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download
              </>
            )}
          </Button>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm mt-4">
        Supports YouTube, Facebook, Instagram, TikTok, Twitter & more
      </p>
    </motion.div>
  );
};

export default UrlInput;
