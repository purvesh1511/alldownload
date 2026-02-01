"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function  VimeoDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) return setError("Please enter a Vimeo video URL");

    setLoading(true);
    setError("");
    setVideo(null);

    try {
      const res = await fetch("/api/vimeo", {
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
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 text-center bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        Vimeo Video Downloader
      </h1>

      <p className="text-gray-600 mb-8">
        Paste your Vimeo video URL below to get the download link.
      </p>

      <div className="mx-auto flex max-w-xl gap-2">
        <Input
          placeholder="Paste Vimeo video link"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleDownload} disabled={loading}>
          {loading ? "Fetching..." : "Download"}
        </Button>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {video && (
        <div className="mx-auto mt-10 max-w-md bg-white p-6 rounded-lg shadow-md text-left">
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
            className="block w-full rounded bg-purple-600 text-white p-3 text-center hover:bg-purple-700"
          >
            Download Video
          </a>
        </div>
      )}
    </section>
  );
}
