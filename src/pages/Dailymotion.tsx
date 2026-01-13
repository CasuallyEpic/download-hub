import { Play } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const DailymotionPage = () => {
  return (
    <>
      <SEOHead
        title="Dailymotion Downloader - Download Dailymotion Videos Free"
        description="Download Dailymotion videos in HD quality. Save Dailymotion content for offline viewing. Free and fast Dailymotion video downloader tool."
        keywords="dailymotion downloader, download dailymotion video, dailymotion video saver, dailymotion hd download"
        canonicalUrl="https://saveall.com/dailymotion"
      />
      <PlatformPage
        name="Dailymotion"
        icon={Play}
        color="hsl(210, 100%, 50%)"
        description="Download Dailymotion videos in high quality for offline viewing."
        features={[
          "Download in 1080p, 720p, and 480p",
          "Support for all Dailymotion videos",
          "Extract audio from videos",
          "Fast download speeds",
          "No registration required",
        ]}
      />
    </>
  );
};

export default DailymotionPage;
