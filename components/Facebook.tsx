"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Facebook() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) return setError("Please enter a Facebook video URL");

    setLoading(true);
    setError("");
    setVideo(null);

    try {
      const res = await fetch("/api/facebook", {
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
    <section className="py-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Facebook Video Downloader</h1>
      <p className="text-gray-600 mb-8">
        Paste your Facebook video URL below to get the download link.
      </p>

      <div className="mx-auto flex max-w-xl gap-2">
        <Input
          placeholder="Enter Facebook video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleDownload} disabled={loading}>
          {loading ? "Fetching..." : "Download Video"}
        </Button>
      </div>

      {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}

      {video && (
        <div className="mx-auto mt-10 max-w-md text-left bg-white p-6 rounded-lg shadow-md">
          {video.thumbnail && (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="mb-4 w-full rounded"
            />
          )}
          <h2 className="font-semibold mb-4 text-lg">{video.title}</h2>

          <a
            href={video.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded bg-blue-600 text-white p-3 text-center hover:bg-blue-700 transition-colors"
          >
            Download Video
          </a>
        </div>
      )}
    </section>
  );
}
