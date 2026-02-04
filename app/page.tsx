import { HeroSection } from "@/components/HeroSection"
import { FormatsSection } from "@/components/FormatsSection"
import { HowItWorks } from "@/components/HowItWorks"
import { FAQSection } from "@/components/FAQSection"
import { DisclaimerSection } from "@/components/DisclaimerSection"

export default function Home() {
  return (
      <>
        <HeroSection />
        <FormatsSection />
        <HowItWorks />
      </>
  );
}
