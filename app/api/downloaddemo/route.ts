import { spawn } from "child_process";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Detect platform (optional)
 */
function detectPlatform(url: string) {
  if (/youtube\.com|youtu\.be/i.test(url)) return "youtube";
  if (/facebook\.com|fb\.watch/i.test(url)) return "facebook";
  if (/instagram\.com/i.test(url)) return "instagram";
  if (/vimeo\.com/i.test(url)) return "vimeo";
  if (/tiktok\.com/i.test(url)) return "tiktok";
  if (/twitter\.com|x\.com/i.test(url)) return "twitter";
  if (/linkedin\.com/i.test(url)) return "linkedin";
  if (/dailymotion\.com|dai\.ly/i.test(url)) return "dailymotion";
  return "unknown";
}

export async function POST(req: Request) {
  try {
    const { videoUrl } = await req.json();

    if (!videoUrl) {
      return NextResponse.json(
        { error: "videoUrl required" },
        { status: 400 }
      );
    }

    const platform = detectPlatform(videoUrl);
    const fileName = `video_${Date.now()}.mp4`;
    
    // Spawn yt-dlp and STREAM output
    const ytProcess = spawn("yt-dlp", [
      videoUrl,
      "-f", "bv*+ba/b",
      "--merge-output-format", "mp4",
      "--no-playlist",
      "-o", "-" // stream to stdout
    ]);
    
    const stream = new ReadableStream({
      start(controller) {
        ytProcess.stdout.on("data", (chunk) => {
          controller.enqueue(chunk);
        });

        ytProcess.stdout.on("end", () => {
          controller.close();
        });

        ytProcess.on("error", (err) => {
          controller.error(err);
        });
      }
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
