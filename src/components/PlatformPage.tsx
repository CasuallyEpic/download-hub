import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Link as LinkIcon, Loader2, CheckCircle, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import AdBanner from "./AdBanner";

interface PlatformPageProps {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
  features: string[];
}

const PlatformPage = ({ name, icon: Icon, color, description, features }: PlatformPageProps) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: color }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Ad Banner - Top */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" className="hidden md:flex" />
          <AdBanner size="mobile" className="md:hidden" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div
            className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            {name} <span className="gradient-text">Downloader</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div>
            {/* URL Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="gradient-border p-[1px] rounded-2xl glow-effect">
                <div className="bg-card rounded-2xl p-2 flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="url"
                      placeholder={`Paste ${name} video link here...`}
                      value={url}
                      onChange={(e) => {
                        setUrl(e.target.value);
                        setShowResult(false);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleDownload()}
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
            </motion.div>

            {/* Result */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-6 mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-display text-lg font-semibold">Video Found!</h3>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Video Title</p>
                  <p className="font-medium">Sample Video Title - {name} Content</p>
                </div>

                {/* Ad Banner - Above download buttons */}
                <div className="flex justify-center mb-4">
                  <AdBanner size="mobile" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {["1080p", "720p", "480p", "MP3"].map((quality) => (
                    <Button key={quality} variant="glass" className="w-full">
                      <Download className="w-4 h-4" />
                      {quality}
                    </Button>
                  ))}
                </div>

                {/* Ad Banner - Below download buttons */}
                <div className="flex justify-center mt-4">
                  <AdBanner size="mobile" />
                </div>
              </motion.div>
            )}

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ad Banner - After content */}
            <div className="flex justify-center mt-8">
              <AdBanner size="leaderboard" className="hidden md:flex" />
              <AdBanner size="mobile" className="md:hidden" />
            </div>
          </div>

          {/* Sidebar Ads */}
          <div className="hidden lg:flex flex-col gap-6">
            <AdBanner size="rectangle" />
            <AdBanner size="rectangle" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlatformPage;
