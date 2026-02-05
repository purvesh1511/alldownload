import { exec } from "child_process";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

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

export async function POST(req: Request): Promise<Response> {
  try {
    const { videoUrl } = await req.json();

    if (!videoUrl) {
      return NextResponse.json(
        { error: "videoUrl required" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const fileName = `video_${timestamp}.mp4`;

    const publicDir = path.join(process.cwd(), "public", "downloads");
    const outputFile = path.join(publicDir, fileName);

    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    return new Promise<Response>((resolve) => {
      const command = `
        yt-dlp "${videoUrl}" \
        -f "bv*+ba/b" \
        --merge-output-format mp4 \
        --no-warnings \
        --quiet \
        -o "${outputFile}"
      `;

      exec(command, (err) => {
        if (err) {
          console.error(err);
          return resolve(
            NextResponse.json(
              { error: "Failed to download video" },
              { status: 500 }
            )
          );
        }

        if (!fs.existsSync(outputFile)) {
          return resolve(
            NextResponse.json(
              { error: "MP4 file not found" },
              { status: 500 }
            )
          );
        }

        const downloadLink = `/downloads/${fileName}`;
        resolve(
          NextResponse.json(
            { downloadLink, format: "MP4" },
            { status: 200 }
          )
        );
      });
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
