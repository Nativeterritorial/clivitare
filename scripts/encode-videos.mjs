import { execFileSync } from "child_process";
import ffmpegPath from "ffmpeg-static";
import { mkdirSync } from "fs";

const SRC1 = "C:/Users/User/Desktop/clivitare site/video1.mp4";
const OUT = "C:/Users/User/Desktop/clivitare site/web/public/media/clivitare";
mkdirSync(OUT, { recursive: true });

// Clean clips: no captions, no crop needed
const cleanClips = [];

// Captioned clips: crop out bottom where subtitles sit
const croppedClips = [
  { name: "clinic-xray",       src: SRC1, ss: 2.5,  t: 6.5, crop: "720:900:0:0" },
  { name: "clinic-photoshoot", src: SRC1, ss: 12.5, t: 5.5 },
  { name: "clinic-doctor",     src: SRC1, ss: 19.5, t: 5.0 },
  { name: "clinic-logo",       src: SRC1, ss: 25.0, t: 1.9, slow: 3.0 },
];

function ff(args) {
  console.log("ffmpeg", args.slice(-1)[0]);
  execFileSync(ffmpegPath, args, { stdio: ["ignore", "ignore", "inherit"] });
}

for (const c of cleanClips) {
  ff([
    "-y", "-ss", String(c.ss), "-i", c.src, "-t", String(c.t),
    "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "22",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    `${OUT}/${c.name}.mp4`,
  ]);
}

for (const c of croppedClips) {
  const cropF = c.crop ?? "720:920:0:0";
  const vf = c.slow
    ? `crop=${cropF},setpts=${c.slow.toFixed(1)}*PTS`
    : `crop=${cropF}`;
  ff([
    "-y", "-ss", String(c.ss), "-i", c.src, "-t", String(c.t),
    "-vf", vf,
    "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "22",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    `${OUT}/${c.name}.mp4`,
  ]);
}

// Poster frames (for <video poster="...">)
const posters = [
  { name: "clinic-xray", src: SRC1, ss: 5 },
  { name: "clinic-photoshoot", src: SRC1, ss: 14 },
  { name: "clinic-doctor", src: SRC1, ss: 22 },
  { name: "clinic-logo", src: SRC1, ss: 26 },
];
for (const p of posters) {
  ff([
    "-y", "-ss", String(p.ss), "-i", p.src, "-frames:v", "1",
    "-vf", p.name === "clinic-xray" ? "crop=720:900:0:0,scale=720:-1" : "crop=720:920:0:0,scale=720:-1",
    "-q:v", "3",
    `${OUT}/${p.name}-poster.jpg`,
  ]);
}

console.log("✓ encoded");
