import { Video } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const VimeoPage = () => {
  return (
    <>
      <SEOHead
        title="Vimeo Downloader - Download Vimeo Videos in HD Quality"
        description="Download Vimeo videos in HD and 4K quality. Save Vimeo content for offline viewing. Fast, free, and easy to use Vimeo video downloader."
        keywords="vimeo downloader, download vimeo video, vimeo video saver, vimeo hd download, save vimeo videos"
        canonicalUrl="https://saveall.com/vimeo"
      />
      <PlatformPage
        name="Vimeo"
        icon={Video}
        color="hsl(195, 100%, 45%)"
        description="Download Vimeo videos in stunning HD and 4K quality for offline viewing."
        features={[
          "Download in 4K, 1080p, and 720p quality",
          "Support for private videos (with link)",
          "Fast processing for long videos",
          "Preserve original video quality",
          "Download password-protected videos",
        ]}
      />
    </>
  );
};

export default VimeoPage;
