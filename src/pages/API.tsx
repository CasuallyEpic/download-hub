import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Code2, Zap, Shield, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const API = () => {
  return (
    <>
      <SEOHead
        title="API Documentation - SaveAll Video Downloader API"
        description="Integrate SaveAll's powerful video downloading capabilities into your application with our simple REST API. Download from YouTube, TikTok, Instagram and more."
        keywords="video downloader api, youtube api, download api, rest api, video download integration"
        canonicalUrl="https://saveall.com/api"
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">API</h1>
            </div>
            <p className="text-muted-foreground mb-12 text-lg">
              Integrate powerful video downloading into your applications
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground text-sm">
                  Process requests in milliseconds with our optimized infrastructure
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Secure</h3>
                <p className="text-muted-foreground text-sm">
                  API key authentication and rate limiting for safety
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <Server className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">99.9% Uptime</h3>
                <p className="text-muted-foreground text-sm">
                  Reliable infrastructure with global CDN distribution
                </p>
              </motion.div>
            </div>

            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center mb-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">API Coming Soon</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                We're working hard to bring you a powerful API for integrating video downloading 
                capabilities into your applications. Join the waitlist to be notified when it launches.
              </p>
              <Button variant="gradient" size="lg">
                Join Waitlist
              </Button>
            </motion.div>

            {/* Preview of API Structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
            >
              <h2 className="text-2xl font-semibold mb-6">API Preview</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">ENDPOINT</h3>
                  <code className="block bg-background/50 rounded-lg p-4 text-sm font-mono">
                    POST /api/v1/download
                  </code>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">REQUEST BODY</h3>
                  <pre className="bg-background/50 rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`{
  "url": "https://youtube.com/watch?v=...",
  "quality": "1080p",
  "format": "mp4"
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">RESPONSE</h3>
                  <pre className="bg-background/50 rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`{
  "success": true,
  "data": {
    "title": "Video Title",
    "duration": 180,
    "thumbnail": "https://...",
    "download_url": "https://...",
    "expires_at": "2025-01-14T00:00:00Z"
  }
}`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default API;
