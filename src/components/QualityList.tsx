import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import DownloadButton from "./DownloadButton";

interface VideoQuality {
  quality: string;
  label: string;
  size: string;
  hasAudio: boolean;
  premium?: boolean;
}

interface QualityListProps {
  qualities: VideoQuality[];
  type: "video" | "audio";
}

const QualityList = ({ qualities, type }: QualityListProps) => {
  return (
    <div className="space-y-2">
      {qualities.map((item, index) => (
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
            <div
              className={`px-3 py-1 rounded-lg font-bold text-sm ${
                item.quality === "2160p" || item.quality === "320kbps"
                  ? "bg-yellow-500/20 text-yellow-500"
                  : item.quality === "1080p" || item.quality === "256kbps"
                  ? "bg-primary/20 text-primary"
                  : item.quality === "720p" || item.quality === "128kbps"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {item.quality}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.label}</span>
                {type === "video" && (
                  item.hasAudio ? (
                    <span className="flex items-center gap-1 text-xs text-green-500">
                      <Volume2 className="w-3 h-3" />
                      with audio
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <VolumeX className="w-3 h-3" />
                      no audio
                    </span>
                  )
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
          <DownloadButton
            quality={item.quality}
            label={item.label}
            size={item.size}
            hasAudio={item.hasAudio}
            format={type}
            variant={item.premium ? "premium" : "default"}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default QualityList;
