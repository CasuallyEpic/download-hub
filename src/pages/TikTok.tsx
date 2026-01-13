import { Music2 } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const TikTokPage = () => {
  return (
    <>
      <SEOHead
        title="TikTok Downloader - Download TikTok Videos Without Watermark"
        description="Download TikTok videos without watermark in HD quality. Save TikTok sounds and music. Remove watermarks automatically. Free TikTok video saver."
        keywords="tiktok downloader, download tiktok video, tiktok without watermark, tiktok video saver, remove tiktok watermark, tiktok mp3 download"
        canonicalUrl="https://saveall.com/tiktok"
      />
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
    </>
  );
};

export default TikTokPage;
