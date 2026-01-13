import { Facebook } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";

const FacebookPage = () => {
  return (
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
  );
};

export default FacebookPage;
