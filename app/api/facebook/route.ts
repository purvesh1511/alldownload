import { exec } from "child_process";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { videoUrl } = await req.json();
    if (!videoUrl) {
      return NextResponse.json({ error: "videoUrl required" }, { status: 400 });
    }

    // Ensure public folder exists
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

    // Unique file name
    const timestamp = Date.now();
    const fileName = `facebook_${timestamp}.mp4`;
    const outputFile = path.join(publicDir, fileName);

    // Build yt-dlp command for Facebook
    const command = `
      yt-dlp "${videoUrl}" \
      -f bestvideo+bestaudio \
      --merge-output-format mp4 \
      --no-warnings \
      --quiet \
      -o "${outputFile}"
    `;

    // Run command
    await new Promise<void>((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          console.error(err, stderr);
          return reject(new Error("Failed to download video"));
        }
        resolve();
      });
    });

    // Check if file exists
    if (!fs.existsSync(outputFile)) {
      return NextResponse.json({ error: "MP4 file not found" }, { status: 500 });
    }

    // Return public download link
    const downloadLink = `/${fileName}`;
    return NextResponse.json({ downloadLink, format: "MP4" }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
