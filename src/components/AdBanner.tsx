import { motion } from "framer-motion";

interface AdBannerProps {
  size: "leaderboard" | "rectangle" | "skyscraper" | "mobile" | "native";
  className?: string;
}

const adSizes = {
  leaderboard: { width: "728px", height: "90px", label: "728x90" },
  rectangle: { width: "300px", height: "250px", label: "300x250" },
  skyscraper: { width: "160px", height: "600px", label: "160x600" },
  mobile: { width: "320px", height: "100px", label: "320x100" },
  native: { width: "100%", height: "auto", label: "Native" },
};

const AdBanner = ({ size, className = "" }: AdBannerProps) => {
  const dimensions = adSizes[size];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`flex items-center justify-center ${className}`}
    >
      <div
        className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-dashed border-border/50 rounded-lg flex flex-col items-center justify-center text-muted-foreground hover:border-primary/30 transition-colors"
        style={{ 
          width: "100%",
          maxWidth: dimensions.width, 
          height: size === "native" ? "120px" : dimensions.height,
          minHeight: size === "native" ? "80px" : undefined,
        }}
      >
        {/* 
          Replace this div with actual Google AdSense code:
          
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>
          
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        */}
        <div className="flex flex-col items-center gap-1 opacity-60">
          <span className="text-xs font-medium">Ad Space</span>
          <span className="text-[10px]">{dimensions.label}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AdBanner;
