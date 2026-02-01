"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) return setError("Please enter a YouTube link");

    setLoading(true);
    setError("");
    setVideo(null);

    try {
      const res = await fetch("/api/youtube", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl: url }),
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.error || "Server error");
      }

      setVideo(data);
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">YouTube Video Downloader</h1>

      <div className="mx-auto mt-8 flex max-w-xl gap-2">
        <Input
          placeholder="Paste YouTube link"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleDownload} disabled={loading}>
          {loading ? "Fetching..." : "Download MP4"}
        </Button>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {video && (
        <div className="mx-auto mt-10 max-w-md text-left">
          {video.thumbnail && (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="mb-4 rounded w-full"
            />
          )}
          <h2 className="font-semibold mb-4">{video.title}</h2>

          <a
          href={video.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded bg-blue-500 text-white p-3 text-center"
        >
          Download MP4
        </a>
        </div>
      )}
    </section>
  );
}
