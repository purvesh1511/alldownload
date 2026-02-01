import { exec } from "child_process";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { videoUrl } = await req.json();
  if (!videoUrl)
    return NextResponse.json({ error: "videoUrl required" }, { status: 400 });

  const timestamp = Date.now();
  const fileName = `video_${timestamp}.mp4`;       // file name
  const outputFile = path.join(process.cwd(), "public", fileName); // full path

  // Ensure public folder exists
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

  return new Promise((resolve) => {
    const command = `
      yt-dlp "${videoUrl}" \
      -f bestvideo+bestaudio \
      --merge-output-format mp4 \
      --no-warnings \
      --quiet \
      -o "${outputFile}"
    `;

    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err, stderr);
        return resolve(
          NextResponse.json({ error: "Failed to download video" }, { status: 500 })
        );
      }

      if (!fs.existsSync(outputFile)) {
        return resolve(
          NextResponse.json({ error: "MP4 file not found" }, { status: 500 })
        );
      }

      // Return public URL dynamically
      const downloadLink = `/${fileName}`;
      resolve(
        NextResponse.json({ downloadLink, format: "MP4" }, { status: 200 })
      );
    });
  });
}
