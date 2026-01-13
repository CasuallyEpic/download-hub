import { motion } from "framer-motion";

interface AdBannerProps {
  size: "leaderboard" | "rectangle" | "skyscraper" | "mobile";
  className?: string;
}

const adSizes = {
  leaderboard: { width: "728px", height: "90px", label: "728x90" },
  rectangle: { width: "300px", height: "250px", label: "300x250" },
  skyscraper: { width: "160px", height: "600px", label: "160x600" },
  mobile: { width: "320px", height: "100px", label: "320x100" },
};

const AdBanner = ({ size, className = "" }: AdBannerProps) => {
  const dimensions = adSizes[size];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center justify-center ${className}`}
    >
      <div
        className="bg-secondary/30 border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-muted-foreground"
        style={{ 
          width: "100%",
          maxWidth: dimensions.width, 
          height: dimensions.height 
        }}
      >
        {/* Replace this div with actual Google AdSense code */}
        {/* 
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
        */}
        <span className="text-xs font-medium">Advertisement</span>
        <span className="text-xs opacity-50">{dimensions.label}</span>
      </div>
    </motion.div>
  );
};

export default AdBanner;
