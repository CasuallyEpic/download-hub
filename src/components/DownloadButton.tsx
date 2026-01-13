import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, Check } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface DownloadButtonProps {
  quality: string;
  label: string;
  size: string;
  hasAudio?: boolean;
  format?: "video" | "audio";
  variant?: "default" | "premium";
}

const DownloadButton = ({
  quality,
  label,
  size,
  hasAudio = true,
  format = "video",
  variant = "default",
}: DownloadButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    setIsComplete(false);

    // Simulate download preparation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsComplete(true);

    toast.success(`Download Started!`, {
      description: `${quality} ${format === "audio" ? "audio" : "video"} (${size}) is being prepared...`,
      duration: 4000,
    });

    // Reset button after 3 seconds
    setTimeout(() => {
      setIsComplete(false);
    }, 3000);
  };

  return (
    <Button
      variant="glass"
      size="sm"
      onClick={handleDownload}
      disabled={isLoading}
      className={`min-w-[100px] transition-all ${
        isComplete ? "bg-green-500/20 border-green-500/50 text-green-500" : ""
      } ${variant === "premium" ? "border-yellow-500/50 hover:border-yellow-500" : ""}`}
    >
      {isLoading ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Loader2 className="w-4 h-4 animate-spin" />
          Wait...
        </motion.span>
      ) : isComplete ? (
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-2"
        >
          <Check className="w-4 h-4" />
          Started
        </motion.span>
      ) : (
        <span className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download
        </span>
      )}
    </Button>
  );
};

export default DownloadButton;
