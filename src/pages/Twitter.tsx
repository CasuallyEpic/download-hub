import { Twitter } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const TwitterPage = () => {
  return (
    <>
      <SEOHead
        title="Twitter/X Video Downloader - Download Twitter Videos & GIFs"
        description="Download Twitter/X videos and GIFs in the highest quality. Save Twitter Spaces recordings. Fast and free Twitter video downloader."
        keywords="twitter video downloader, download twitter video, twitter gif download, x video downloader, twitter spaces download, save twitter video"
        canonicalUrl="https://saveall.com/twitter"
      />
      <PlatformPage
        name="Twitter"
        icon={Twitter}
        color="hsl(203, 89%, 53%)"
        description="Download Twitter/X videos and GIFs in the highest available quality."
        features={[
          "Download videos in multiple quality options",
          "Save animated GIFs as video or GIF format",
          "Support for Twitter Spaces recordings",
          "Download from tweets and DMs",
          "Fast processing for viral content",
        ]}
      />
    </>
  );
};

export default TwitterPage;
