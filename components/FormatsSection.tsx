export function FormatsSection() {
  return (
    <section className="bg-muted py-16">
      <h2 className="text-center text-2xl font-semibold">
        Supported Formats
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-4 max-w-5xl mx-auto">
        {["MP4 HD", "MP4 4K", "MP3 Audio", "WEBM"].map(format => (
          <div
            key={format}
            className="rounded-lg border bg-background p-6 text-center"
          >
            <h3 className="font-medium">{format}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
