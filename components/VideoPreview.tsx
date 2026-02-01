export function VideoPreview() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-semibold">
        Video Preview
      </h2>

      <div className="mt-6 mx-auto max-w-md rounded-lg border p-4">
        <div className="h-48 bg-muted rounded-md mb-4" />
        <p className="font-medium">Video Title Here</p>
        <p className="text-sm text-muted-foreground">
          Duration • Views • Channel
        </p>
      </div>
    </section>
  )
}
