import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Link as LinkIcon, Loader2, CheckCircle, Youtube, Play, Volume2, VolumeX, Music, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/AdBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videoQualities = [
  { quality: "2160p", label: "4K Ultra HD", size: "~850 MB", hasAudio: true, premium: true },
  { quality: "1080p", label: "Full HD", size: "~350 MB", hasAudio: true, premium: false },
  { quality: "1080p", label: "Full HD", size: "~280 MB", hasAudio: false, premium: false },
  { quality: "720p", label: "HD", size: "~150 MB", hasAudio: true, premium: false },
  { quality: "720p", label: "HD", size: "~120 MB", hasAudio: false, premium: false },
  { quality: "480p", label: "SD", size: "~80 MB", hasAudio: true, premium: false },
  { quality: "360p", label: "Low", size: "~45 MB", hasAudio: true, premium: false },
  { quality: "240p", label: "Very Low", size: "~25 MB", hasAudio: true, premium: false },
  { quality: "144p", label: "Lowest", size: "~12 MB", hasAudio: true, premium: false },
];

const audioQualities = [
  { quality: "320kbps", label: "High Quality MP3", size: "~8 MB" },
  { quality: "256kbps", label: "Standard MP3", size: "~6 MB" },
  { quality: "128kbps", label: "Low Quality MP3", size: "~3 MB" },
  { quality: "M4A", label: "AAC Audio", size: "~5 MB" },
];

const features = [
  "Download videos in 4K, 1080p, 720p, 480p quality",
  "Extract audio as high-quality MP3 files",
  "Download entire playlists and channels",
  "Support for YouTube Shorts",
  "No watermarks on downloaded content",
];

const YouTubePage = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [activeTab, setActiveTab] = useState<"video" | "audio">("video");

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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20 bg-youtube" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-youtube">
            <Youtube className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            YouTube <span className="gradient-text">Downloader</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Download YouTube videos in HD, Full HD, or 4K quality. Extract audio as MP3 files instantly.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div>
            {/* URL Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="gradient-border p-[1px] rounded-2xl glow-effect">
                <div className="bg-card rounded-2xl p-2 flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="url"
                      placeholder="Paste YouTube video link here..."
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
                        Analyzing
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
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Video Preview */}
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-40 h-24 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 overflow-hidden">
                        <Play className="w-10 h-10 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                          <span className="text-green-500 text-sm font-medium">Video Found!</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-1 truncate">
                          Amazing Tutorial Video - How to Create Stunning Content
                        </h3>
                        <p className="text-muted-foreground text-sm">Duration: 12:34 • Views: 1.2M</p>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                      <button
                        onClick={() => setActiveTab("video")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                          activeTab === "video"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Film className="w-4 h-4" />
                        Video
                      </button>
                      <button
                        onClick={() => setActiveTab("audio")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                          activeTab === "audio"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Music className="w-4 h-4" />
                        Audio Only
                      </button>
                    </div>

                    {/* Quality Options */}
                    {activeTab === "video" ? (
                      <div className="space-y-2">
                        {videoQualities.map((item, index) => (
                          <motion.div
                            key={`${item.quality}-${item.hasAudio}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all hover:border-primary/50 ${
                              item.premium 
                                ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30" 
                                : "bg-secondary/30 border-border"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`px-3 py-1 rounded-lg font-bold text-sm ${
                                item.quality === "2160p" ? "bg-yellow-500/20 text-yellow-500" :
                                item.quality === "1080p" ? "bg-primary/20 text-primary" :
                                item.quality === "720p" ? "bg-blue-500/20 text-blue-400" :
                                "bg-secondary text-muted-foreground"
                              }`}>
                                {item.quality}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{item.label}</span>
                                  {item.hasAudio ? (
                                    <span className="flex items-center gap-1 text-xs text-green-500">
                                      <Volume2 className="w-3 h-3" />
                                      with audio
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <VolumeX className="w-3 h-3" />
                                      no audio
                                    </span>
                                  )}
                                  {item.premium && (
                                    <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-medium">
                                      Best
                                    </span>
                                  )}
                                </div>
                                <span className="text-muted-foreground text-sm">{item.size}</span>
                              </div>
                            </div>
                            <Button variant="glass" size="sm">
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {audioQualities.map((item, index) => (
                          <motion.div
                            key={item.quality}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all"
                          >
                            <div className="flex items-center gap-4">
                              <div className="px-3 py-1 rounded-lg bg-accent/20 text-accent font-bold text-sm">
                                {item.quality}
                              </div>
                              <div>
                                <span className="font-medium">{item.label}</span>
                                <p className="text-muted-foreground text-sm">{item.size}</p>
                              </div>
                            </div>
                            <Button variant="glass" size="sm">
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Native Ad - After results (high engagement) */}
                  <div className="glass-card p-6 border-primary/20">
                    <p className="text-xs text-muted-foreground mb-3">Sponsored</p>
                    <AdBanner size="leaderboard" className="hidden md:flex" />
                    <AdBanner size="mobile" className="md:hidden" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Features - Show when no result */}
            {!showResult && (
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
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:flex flex-col gap-6">
            {/* Sticky Sidebar Ad */}
            <div className="sticky top-24 space-y-6">
              <div className="glass-card p-4">
                <p className="text-xs text-muted-foreground mb-3 text-center">Advertisement</p>
                <AdBanner size="rectangle" />
              </div>
              
              {showResult && (
                <div className="glass-card p-4">
                  <p className="text-xs text-muted-foreground mb-3 text-center">Advertisement</p>
                  <AdBanner size="rectangle" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Ad - Always visible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-card p-6 text-center"
        >
          <p className="text-xs text-muted-foreground mb-4">Advertisement</p>
          <div className="flex justify-center">
            <AdBanner size="leaderboard" className="hidden md:flex" />
            <AdBanner size="mobile" className="md:hidden" />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default YouTubePage;
