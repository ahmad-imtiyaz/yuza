// Generate optimized WebP thumbnails for the gallery grid.
//
// Why: the originals in public/assets/{garden,gate} are full-resolution phone
// photos (3048x4064, 4160x3120, ...), up to 5 MB each -> 224 MB total. The grid
// only shows them at ~175-220px, so we serve tiny WebP copies instead and keep
// the full-res originals for the preview modal.
//
// Output: public/assets/thumbs/<sub>/<name>.webp  (literal name, same as source)
// The encoded URL used in <img src> is derived in src/photos.js from the original
// `src` (which is already percent-encoded), so the browser decodes it back to the
// literal file name on the static server.
//
// Run: `bun run thumbs`  (also wired as prebuild / dev so deploy & local stay fresh)
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'public', 'assets');
const outDir = path.join(assetsDir, 'thumbs');

const SRC_DIRS = ['garden', 'gate'];
const EXT = new Set(['.jpg', '.jpeg', '.png']);
const WIDTH = Number(process.env.THUMB_W || 800); // display width (covers ~2x retina)
const QUALITY = Number(process.env.THUMB_Q || 78);

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listImages(full));
    else if (EXT.has(path.extname(e.name).toLowerCase())) out.push(full);
  }
  return out;
}

const files = SRC_DIRS.flatMap((d) => listImages(path.join(assetsDir, d)));
let made = 0;
let skipped = 0;

for (const f of files) {
  const rel = path.relative(assetsDir, f); // literal, e.g. garden/IMG(1).jpg
  const thumbRel = rel.replace(/\.(jpe?g|png)$/i, '.webp');
  const dest = path.join(outDir, thumbRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest)) {
    skipped++;
    continue;
  }
  await sharp(f)
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);
  made++;
}

console.log(
  `[gen-thumbs] made ${made} new, skipped ${skipped} existing, sources ${files.length} (${WIDTH}px / q${QUALITY})`
);
