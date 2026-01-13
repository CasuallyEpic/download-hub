import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is SaveAll free to use?",
    answer: "Yes, SaveAll is completely free to use. We support ourselves through non-intrusive advertising. You can download unlimited videos from supported platforms without any cost.",
  },
  {
    question: "Which platforms does SaveAll support?",
    answer: "SaveAll supports downloading from YouTube, TikTok, Instagram, Facebook, Twitter/X, Vimeo, Dailymotion, Pinterest, and many more platforms. We're constantly adding support for new platforms.",
  },
  {
    question: "Is it legal to download videos?",
    answer: "Downloading videos for personal use is generally acceptable in most jurisdictions. However, you should only download content you have the right to access, and you should not redistribute copyrighted content without permission.",
  },
  {
    question: "What video quality options are available?",
    answer: "We offer various quality options including 4K (2160p), Full HD (1080p), HD (720p), and lower resolutions. Audio-only downloads are also available in MP3 and M4A formats with different bitrates.",
  },
  {
    question: "Do I need to install any software?",
    answer: "No, SaveAll works entirely in your web browser. There's no need to install any software, extensions, or apps. Just paste the URL and download.",
  },
  {
    question: "Why is my download not working?",
    answer: "Some reasons downloads may fail include: private or age-restricted content, geo-blocked videos, or temporary platform changes. Try refreshing the page or using a different browser if issues persist.",
  },
  {
    question: "Can I download private videos?",
    answer: "You can only download content that you have legitimate access to. For private videos, you typically need to be logged into the platform and have the direct link to the content.",
  },
  {
    question: "How do I download TikTok videos without watermark?",
    answer: "Simply paste the TikTok video URL into SaveAll, and we'll automatically provide a watermark-free version when available. This feature works for most TikTok videos.",
  },
  {
    question: "Is there a limit to how many videos I can download?",
    answer: "There are no strict limits on downloads. However, to ensure fair usage for all users, there may be rate limiting during peak times.",
  },
  {
    question: "Do you store the videos I download?",
    answer: "No, we don't store any videos or personal data. URLs are processed in real-time and are not saved after your download is complete. Your privacy is important to us.",
  },
  {
    question: "Can I download entire playlists?",
    answer: "Currently, SaveAll supports single video downloads. Playlist download functionality may be added in future updates.",
  },
  {
    question: "Why do I see ads on the site?",
    answer: "Ads help us keep SaveAll free for everyone. We carefully select non-intrusive ads that don't interfere with your downloading experience.",
  },
];

const FAQ = () => {
  return (
    <>
      <SEOHead
        title="FAQ - Frequently Asked Questions | SaveAll Video Downloader"
        description="Find answers to common questions about SaveAll video downloader. Learn how to download videos, supported platforms, quality options, and troubleshooting tips."
        keywords="faq, frequently asked questions, video downloader help, how to download videos, saveall help"
        canonicalUrl="https://saveall.com/faq"
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">FAQ</h1>
            </div>
            <p className="text-muted-foreground mb-12 text-lg">
              Find answers to frequently asked questions about SaveAll
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 px-6 data-[state=open]:bg-card/80"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
            >
              <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? We're here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
