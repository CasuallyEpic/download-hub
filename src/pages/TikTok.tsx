import { Music2 } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";

const TikTokPage = () => {
  return (
    <PlatformPage
      name="TikTok"
      icon={Music2}
      color="hsl(349, 100%, 60%)"
      description="Download TikTok videos without watermarks in HD quality. Save sounds and music too."
      features={[
        "Remove TikTok watermark automatically",
        "Download in HD quality (1080p)",
        "Extract audio/music from videos",
        "Support for TikTok slideshows",
        "Download from private accounts (with link)",
      ]}
    />
  );
};

export default TikTokPage;
