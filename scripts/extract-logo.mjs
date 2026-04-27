import sharp from "sharp";

const SRC = "C:/Users/User/Desktop/clivitare site/Clínica CLIVITARE.png";
const OUT = "C:/Users/User/Desktop/clivitare site/web/public/media/clivitare";

const meta = await sharp(SRC).metadata();
const W = meta.width, H = meta.height;

// Convert near-white pixels to transparent
async function makeTransparent(buf) {
  const img = sharp(buf).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i], g = out[i + 1], b = out[i + 2];
    // Brightness-based alpha: white -> transparent, gold stays opaque
    const minC = Math.min(r, g, b);
    if (minC > 230) {
      out[i + 3] = 0;
    } else if (minC > 180) {
      // soft edge
      out[i + 3] = Math.round((230 - minC) / 50 * 255);
    }
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).png();
}

// Full lockup: monogram + "Centro Clínico CLIVITARE"
// In the source PNG it occupies roughly top-center, ~30%–72% horizontally, 2%–46% vertically.
const lockupBuf = await sharp(SRC)
  .extract({
    left: Math.round(W * 0.18),
    top: 0,
    width: Math.round(W * 0.66),
    height: Math.round(H * 0.50),
  })
  .resize({ width: 1400 })
  .png()
  .toBuffer();
await (await makeTransparent(lockupBuf)).toFile(`${OUT}/logo-lockup.png`);

// Just the monogram (circle with G+L)
const markBuf = await sharp(SRC)
  .extract({
    left: Math.round(W * 0.42),
    top: Math.round(H * 0.02),
    width: Math.round(W * 0.18),
    height: Math.round(H * 0.24),
  })
  .resize({ width: 600 })
  .png()
  .toBuffer();
await (await makeTransparent(markBuf)).toFile(`${OUT}/logo-mark.png`);

console.log("✓ logo extracted");
