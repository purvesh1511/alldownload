export function FeaturesSection() {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {[
          "Fast Downloads",
          "No Registration Required",
          "Unlimited Downloads",
          "HD & 4K Support",
          "Mobile Friendly",
          "100% Free"
        ].map(feature => (
          <div key={feature} className="rounded-lg bg-background p-6">
            <h3 className="font-semibold">{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
