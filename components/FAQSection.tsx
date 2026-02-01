export function FAQSection() {
  return (
    <section className="bg-muted py-16">
      <h2 className="text-center text-2xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        <div>
          <h3 className="font-medium">
            Is this YouTube downloader free?
          </h3>
          <p className="text-sm text-muted-foreground">
            Yes, our tool is completely free with no limits.
          </p>
        </div>

        <div>
          <h3 className="font-medium">
            Can I download YouTube Shorts?
          </h3>
          <p className="text-sm text-muted-foreground">
            Yes, Shorts and long videos are supported.
          </p>
        </div>
      </div>
    </section>
  )
}
