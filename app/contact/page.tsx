import { FAQSection } from "@/components/FAQSection"
import { DisclaimerSection } from "@/components/DisclaimerSection"
import { HowItWorks } from "@/components/HowItWorks"
import { FormatsSection } from "@/components/FormatsSection"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
      <>
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Have a question, suggestion, or issue?  
            We’re here to help — reach out to us anytime.
          </p>
        </section>
        <section className="py-16">
      <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            If you’re facing issues with downloads, have feature requests,
            or want to report a problem, feel free to contact us.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>📧 Email: support@yourwebsite.com</li>
            <li>🌐 Website: yourwebsite.com</li>
            <li>⏱ Response Time: 24–48 hours</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 rounded-lg border p-6">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Your Message" rows={4} />
          <Button className="w-full">Send Message</Button>
        </form>

      </div>
    </section>
      </>
  );
}
