import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LOCKUP = path.join(ROOT, "public/media/clivitare/logo-lockup.png");
const APP = path.join(ROOT, "src/app");
const OUT = process.env.ICON_OUT || APP;

const GOLD = { r: 0xad, g: 0x89, b: 0x5e, alpha: 1 };
const BONE = { r: 0xf7, g: 0xf5, b: 0xf1, alpha: 1 };
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };

// ── 1. símbolo (monograma) recortado do lockup, apagando "Centro Clínico" ──
const eraser = await sharp({
  create: { width: 620, height: 120, channels: 4, background: "#ffffff" },
}).png().toBuffer();

const erased = await sharp(LOCKUP)
  .composite([{ input: eraser, left: 800, top: 296, blend: "dest-out" }])
  .png()
  .toBuffer();

const markBox = await sharp(erased)
  .extract({ left: 0, top: 0, width: 1400, height: 360 })
  .png()
  .toBuffer();

const markTight = await sharp(markBox).trim({ threshold: 8 }).png().toBuffer();

await fs.writeFile(path.join(ROOT, "public/media/clivitare/logo-mark.png"), markTight);
const markMeta = await sharp(markTight).metadata();
console.log("mark:", markMeta.width + "x" + markMeta.height);

// ── helpers ──
async function fitSquare(buf, size, padRatio, bg) {
  const inner = Math.round(size * (1 - padRatio * 2));
  const scaled = await sharp(buf)
    .resize(inner, inner, { fit: "inside", background: CLEAR })
    .png()
    .toBuffer();
  const m = await sharp(scaled).metadata();
  return sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{
      input: scaled,
      left: Math.round((size - m.width) / 2),
      top: Math.round((size - m.height) / 2),
    }])
    .png()
    .toBuffer();
}

// símbolo em bone sobre disco dourado (alto contraste em tamanho pequeno)
async function goldDisc(size, padRatio = 0.2) {
  const inner = Math.round(size * (1 - padRatio * 2));
  const scaled = await sharp(markTight)
    .resize(inner, inner, { fit: "inside", background: CLEAR })
    .png()
    .toBuffer();
  const m = await sharp(scaled).metadata();
  const alpha = await sharp(scaled).extractChannel("alpha").raw().toBuffer();
  const boneMark = await sharp({
    create: { width: m.width, height: m.height, channels: 3, background: BONE },
  })
    .joinChannel(alpha, { raw: { width: m.width, height: m.height, channels: 1 } })
    .png()
    .toBuffer();
  const disc = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#ad895e"/></svg>`
  );
  return sharp({ create: { width: size, height: size, channels: 4, background: CLEAR } })
    .composite([
      { input: disc },
      { input: boneMark, left: Math.round((size - m.width) / 2), top: Math.round((size - m.height) / 2) },
    ])
    .png()
    .toBuffer();
}

// ── 2. ICO (PNG embutido, suportado por todos os navegadores modernos) ──
function buildIco(items) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(items.length, 4);
  const dir = Buffer.alloc(16 * items.length);
  let offset = 6 + 16 * items.length;
  items.forEach((it, i) => {
    const o = 16 * i;
    dir.writeUInt8(it.size >= 256 ? 0 : it.size, o);
    dir.writeUInt8(it.size >= 256 ? 0 : it.size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(it.buf.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += it.buf.length;
  });
  return Buffer.concat([header, dir, ...items.map((it) => it.buf)]);
}

const VARIANT = process.env.ICON_VARIANT || "disc"; // "disc" | "flat"
const makeIcon = (size, pad) =>
  VARIANT === "disc" ? goldDisc(size, pad) : fitSquare(markTight, size, pad, CLEAR);

const ico = buildIco(
  await Promise.all(
    [16, 32, 48, 64].map(async (size) => ({ size, buf: await makeIcon(size, size <= 32 ? 0.12 : 0.16) }))
  )
);
await fs.writeFile(path.join(OUT, "favicon.ico"), ico);

// ── 3. icon.png (Google/PWA) e apple-icon.png ──
const icon512 = await makeIcon(512, 0.18);
await fs.writeFile(path.join(OUT, "icon.png"), icon512);
// cópia estável em /public para uso em JSON-LD e materiais externos
await fs.writeFile(path.join(ROOT, "public/media/clivitare/logo-icon.png"), icon512);
await fs.writeFile(path.join(OUT, "apple-icon.png"), await goldDisc(180, 0.2));

// ── 4. open graph (WhatsApp, Google, redes) ──
const lockup = await sharp(LOCKUP).trim({ threshold: 8 }).resize({ width: 760 }).png().toBuffer();
const lm = await sharp(lockup).metadata();
const og = await sharp({
  create: { width: 1200, height: 630, channels: 4, background: BONE },
})
  .composite([
    {
      input: Buffer.from(
        `<svg width="1200" height="630">
           <defs><radialGradient id="g" cx="78%" cy="14%" r="70%">
             <stop offset="0%" stop-color="#ad895e" stop-opacity="0.20"/>
             <stop offset="100%" stop-color="#ad895e" stop-opacity="0"/>
           </radialGradient></defs>
           <rect width="1200" height="630" fill="url(#g)"/>
           <rect x="0" y="614" width="1200" height="16" fill="#ad895e"/>
         </svg>`
      ),
    },
    { input: lockup, left: Math.round((1200 - lm.width) / 2), top: Math.round((630 - lm.height) / 2) - 14 },
  ])
  .png()
  .toBuffer();
await fs.writeFile(path.join(OUT, "opengraph-image.png"), og);
await fs.writeFile(path.join(OUT, "twitter-image.png"), og);

console.log("✓ ícones gerados em", OUT, "(variante:", VARIANT + ")");
