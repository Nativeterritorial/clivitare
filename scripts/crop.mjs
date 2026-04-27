import sharp from "sharp";
import { mkdirSync } from "fs";
import { join } from "path";

const SRC = "C:/Users/User/Desktop/clivitare site/media/instagram-refs";
const OUT = "C:/Users/User/Desktop/clivitare site/web/public/media";
mkdirSync(join(OUT, "clivitare"), { recursive: true });
mkdirSync(join(OUT, "dg"), { recursive: true });

async function run(file, opts) {
  const meta = await sharp(join(SRC, file)).metadata();
  const W = meta.width, H = meta.height;
  const left = Math.round(opts.left * W);
  const top = Math.round(opts.top * H);
  const width = Math.round(opts.width * W);
  const height = Math.round(opts.height * H);
  console.log(`${file} ${W}x${H} -> ${width}x${height} @ ${left},${top} -> ${opts.out}`);
  await sharp(join(SRC, file))
    .extract({ left, top, width, height })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(join(OUT, opts.out));
}

// 3.jpeg — Daiany + Gabriela navy (trim gold name caption at bottom)
await run("3.jpeg", {
  left: 0.10, top: 0.205, width: 0.80, height: 0.37,
  out: "clivitare/doctors-navy.jpg",
});

// 13.jpeg — both doctors in pink at the desk (trim Clivitare caption at bottom)
await run("13.jpeg", {
  left: 0.10, top: 0.195, width: 0.80, height: 0.37,
  out: "clivitare/doctors-pink.jpg",
});

// 12.jpeg — Gabriela with aligners (pink)
await run("12.jpeg", {
  left: 0.0, top: 0.19, width: 1.0, height: 0.50,
  out: "clivitare/gabriela-aligners.jpg",
});

// DG reference cards
await run("1.jpeg", {
  left: 0.0, top: 0.17, width: 1.0, height: 0.54,
  out: "dg/exames-card.jpg",
});

await run("2.jpeg", {
  left: 0.0, top: 0.17, width: 1.0, height: 0.54,
  out: "dg/servicos-card.jpg",
});

console.log("done");
