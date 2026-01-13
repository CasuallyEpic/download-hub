import { Instagram } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";
import SEOHead from "@/components/SEOHead";

const InstagramPage = () => {
  return (
    <>
      <SEOHead
        title="Instagram Downloader - Download Reels, Stories & IGTV"
        description="Download Instagram Reels, Stories, IGTV videos and photos without watermarks. Save Instagram content in original quality. Free and easy to use."
        keywords="instagram downloader, download instagram reels, instagram story download, igtv download, instagram video saver, download instagram photos"
        canonicalUrl="https://saveall.com/instagram"
      />
      <PlatformPage
        name="Instagram"
        icon={Instagram}
        color="hsl(340, 75%, 54%)"
        description="Download Instagram Reels, Stories, IGTV videos, and photos without watermarks."
        features={[
          "Download Reels in original quality",
          "Save Stories before they disappear",
          "Download IGTV videos and posts",
          "Batch download from carousel posts",
          "Download profile pictures in full size",
        ]}
      />
    </>
  );
};

export default InstagramPage;
