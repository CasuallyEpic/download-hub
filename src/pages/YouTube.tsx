import { Youtube } from "lucide-react";
import PlatformPage from "@/components/PlatformPage";

const YouTubePage = () => {
  return (
    <PlatformPage
      name="YouTube"
      icon={Youtube}
      color="hsl(0, 100%, 50%)"
      description="Download YouTube videos in HD, Full HD, or 4K quality. Extract audio as MP3 files instantly."
      features={[
        "Download videos in 4K, 1080p, 720p, 480p quality",
        "Extract audio as high-quality MP3 files",
        "Download entire playlists and channels",
        "Support for YouTube Shorts",
        "No watermarks on downloaded content",
      ]}
    />
  );
};

export default YouTubePage;
