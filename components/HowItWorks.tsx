export function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="text-center text-2xl font-semibold">
        How It Works
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {[
          "Paste YouTube URL",
          "Choose Format",
          "Download Video"
        ].map((step, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {i + 1}
            </div>
            <p className="font-medium">{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
