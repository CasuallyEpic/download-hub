import { Facebook } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const FacebookPage = () => {
  return (
    <>
      <SEOHead
        title="Facebook Video Downloader - Download FB Videos Free"
        description="Download Facebook videos, Reels, and Stories in HD quality. Save Facebook Live recordings. Free, fast, and works on all devices."
        keywords="facebook video downloader, fb video download, facebook reels download, download facebook stories, facebook live download"
        canonicalUrl="https://saveall.com/facebook"
      />
      <PlatformPage
        name="Facebook"
        icon={Facebook}
        color="hsl(221, 44%, 41%)"
        description="Save Facebook videos, Reels, and Stories directly to your device in high quality."
        features={[
          "Download public and private videos",
          "Support for Facebook Reels and Stories",
          "HD and SD quality options available",
          "Download Facebook Live recordings",
          "Fast processing with no quality loss",
        ]}
      />
    </>
  );
};

export default FacebookPage;
