import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, Loader2, CheckCircle, Youtube, Play, Film, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/AdBanner";
import SEOHead from "@/components/SEOHead";
import QualityList from "@/components/QualityList";

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
  { quality: "320kbps", label: "High Quality MP3", size: "~8 MB", hasAudio: true, premium: true },
  { quality: "256kbps", label: "Standard MP3", size: "~6 MB", hasAudio: true, premium: false },
  { quality: "128kbps", label: "Low Quality MP3", size: "~3 MB", hasAudio: true, premium: false },
  { quality: "M4A", label: "AAC Audio", size: "~5 MB", hasAudio: true, premium: false },
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
    <>
      <SEOHead
        title="YouTube Video Downloader - Download HD Videos Free"
        description="Download YouTube videos in 4K, 1080p, 720p quality. Extract MP3 audio from YouTube videos instantly. Free, fast, and no registration required."
        keywords="youtube downloader, youtube video download, youtube to mp3, download youtube hd, youtube 4k download, free youtube downloader"
        canonicalUrl="https://saveall.com/youtube"
      />

      <main className="min-h-screen bg-background pt-24 pb-16 px-4">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20 bg-youtube" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <motion.header
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
          </motion.header>

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
                <label htmlFor="youtube-url" className="sr-only">YouTube Video URL</label>
                <div className="gradient-border p-[1px] rounded-2xl glow-effect">
                  <div className="bg-card rounded-2xl p-2 flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="youtube-url"
                        type="url"
                        placeholder="Paste YouTube video link here..."
                        value={url}
                        onChange={(e) => {
                          setUrl(e.target.value);
                          setShowResult(false);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleDownload()}
                        className="w-full h-14 pl-12 pr-4 bg-secondary/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        aria-label="YouTube video URL"
                      />
                    </div>
                    <Button
                      variant="gradient"
                      size="xl"
                      onClick={handleDownload}
                      disabled={isLoading || !url}
                      className="min-w-[160px]"
                      aria-label="Analyze video"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Analyzing
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          Get Video
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
                    <article className="glass-card p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-40 h-24 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 overflow-hidden">
                          <Play className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                            <span className="text-green-500 text-sm font-medium">Video Found!</span>
                          </div>
                          <h2 className="font-display text-lg font-semibold mb-1 truncate">
                            Amazing Tutorial Video - How to Create Stunning Content
                          </h2>
                          <p className="text-muted-foreground text-sm">Duration: 12:34 • Views: 1.2M</p>
                        </div>
                      </div>

                      {/* Tabs */}
                      <div className="flex gap-2 mb-6" role="tablist">
                        <button
                          role="tab"
                          aria-selected={activeTab === "video"}
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
                          role="tab"
                          aria-selected={activeTab === "audio"}
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
                      <QualityList
                        qualities={activeTab === "video" ? videoQualities : audioQualities}
                        type={activeTab}
                      />
                    </article>

                    {/* Native Ad - After results */}
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
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6"
                  aria-labelledby="features-heading"
                >
                  <h2 id="features-heading" className="font-display text-lg font-semibold mb-4">Features</h2>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6" aria-label="Advertisements">
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
            </aside>
          </div>

          {/* Bottom Ad */}
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
    </>
  );
};

export default YouTubePage;
