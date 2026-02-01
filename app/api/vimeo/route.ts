import { exec } from "child_process";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { videoUrl } = await req.json();

    // Validate URL
    if (!videoUrl || !videoUrl.includes("vimeo.com")) {
      return NextResponse.json(
        { error: "Valid Vimeo URL required" },
        { status: 400 }
      );
    }

    // Ensure public/downloads directory
    const downloadDir = path.join(process.cwd(), "public", "downloads");
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir, { recursive: true });
    }

    const timestamp = Date.now();
    const fileName = `vimeo_${timestamp}.mp4`;
    const outputPath = path.join(downloadDir, fileName);

    const command = `
      yt-dlp "${videoUrl}" \
      -f "bv*+ba/b" \
      --merge-output-format mp4 \
      --no-playlist \
      --no-warnings \
      -o "${outputPath}"
    `;

    return new Promise((resolve) => {
      exec(command, (error) => {
        if (error) {
          console.error("yt-dlp error:", error);
          return resolve(
            NextResponse.json(
              { error: "Failed to download Vimeo video" },
              { status: 500 }
            )
          );
        }

        if (!fs.existsSync(outputPath)) {
          return resolve(
            NextResponse.json(
              { error: "MP4 file not generated" },
              { status: 500 }
            )
          );
        }

        resolve(
          NextResponse.json({
            downloadLink: `/downloads/${fileName}`,
            format: "MP4",
          })
        );
      });
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
