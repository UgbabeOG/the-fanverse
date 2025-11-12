// scripts/generate-images.js
// Generates resized image variants for any local images referenced in src/lib/placeholder-images.json

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const IMAGES_JSON = path.join(ROOT, "src", "lib", "placeholder-images.json");

// sizes to generate (widths)
const SIZES = [480, 768, 1200];

async function ensureFileExists(p) {
  try {
    await fs.promises.access(p, fs.constants.R_OK);
    return true;
  } catch (err) {
    return false;
  }
}

async function generate() {
  const data = JSON.parse(await fs.promises.readFile(IMAGES_JSON, "utf8"));
  const images = data.placeholderImages || [];

  for (const img of images) {
    if (!img.imageUrl) continue;
    // only handle local public files starting with '/'
    if (!img.imageUrl.startsWith("/")) continue;

    const srcPath = path.join(PUBLIC_DIR, img.imageUrl.replace(/^\//, ""));
    const ext = path.extname(srcPath);
    const base = path.basename(srcPath, ext);

    const exists = await ensureFileExists(srcPath);
    if (!exists) {
      console.warn(`Skipping ${img.id}: source file not found at ${srcPath}`);
      continue;
    }

    for (const width of SIZES) {
      const outName = `${base}-${width}${ext}`;
      const outPath = path.join(PUBLIC_DIR, outName);
      // skip if exists
      if (await ensureFileExists(outPath)) {
        console.log(`Exists: ${outName}`);
        continue;
      }

      try {
        await sharp(srcPath).resize({ width }).toFile(outPath);
        console.log(`Generated: ${outName}`);
      } catch (err) {
        console.error(`Failed to generate ${outName}:`, err);
      }
    }
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
