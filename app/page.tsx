import { HeroSection } from "@/components/HeroSection"
import { FormatsSection } from "@/components/FormatsSection"
import { HowItWorks } from "@/components/HowItWorks"
import { FeaturesSection } from "@/components/FeaturesSection"
import { VideoPreview } from "@/components/VideoPreview"
import { FAQSection } from "@/components/FAQSection"
import { DisclaimerSection } from "@/components/DisclaimerSection"

export default function Home() {
  return (
      <>
        <HeroSection />
        <FormatsSection />
        <HowItWorks />
        <FeaturesSection />
        <VideoPreview />
        <FAQSection />
        <DisclaimerSection />
      </>
  );
}
