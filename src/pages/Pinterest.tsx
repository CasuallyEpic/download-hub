import { Image } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const PinterestPage = () => {
  return (
    <>
      <SEOHead
        title="Pinterest Downloader - Download Pinterest Videos & Images"
        description="Download Pinterest videos, GIFs, and images in original quality. Save Pinterest pins and boards. Free Pinterest video and image downloader."
        keywords="pinterest downloader, download pinterest video, pinterest image download, save pinterest pins, pinterest gif download"
        canonicalUrl="https://saveall.com/pinterest"
      />
      <PlatformPage
        name="Pinterest"
        icon={Image}
        color="hsl(0, 78%, 45%)"
        description="Download Pinterest videos, GIFs, and images in original quality."
        features={[
          "Download videos and images",
          "Save GIFs in original format",
          "High-resolution image downloads",
          "Support for Pinterest boards",
          "Download Story Pins",
        ]}
      />
    </>
  );
};

export default PinterestPage;
