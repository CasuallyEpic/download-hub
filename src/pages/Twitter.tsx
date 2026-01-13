import { Twitter } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";

const TwitterPage = () => {
  return (
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
  );
};

export default TwitterPage;
