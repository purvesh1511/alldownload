import { FAQSection } from "@/components/FAQSection"
import { DisclaimerSection } from "@/components/DisclaimerSection"
import { HowItWorks } from "@/components/HowItWorks"
import { FormatsSection } from "@/components/FormatsSection"

export default function AboutPage() {
  return (
      <>
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold">
            About Our YouTube Downloader
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            We provide a fast, simple, and free way to download YouTube videos
            in high quality without installing any software.
          </p>
        </section>
        <FormatsSection />
        <HowItWorks />
        <FAQSection />
        <DisclaimerSection />
      </>
  );
}
