import { Instagram } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";

const InstagramPage = () => {
  return (
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
  );
};

export default InstagramPage;
