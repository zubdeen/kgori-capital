/**
 * Generates the social share card and the 512px app icon from the brand SVGs.
 * Run with `npm run assets` after changing the logo or the card copy.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const brand = path.join(root, "public", "brand");

const card = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0b0c"/>
  <rect width="1200" height="10" fill="#6e1a26"/>
  <rect x="1056" width="144" height="630" fill="#6e1a26"/>
  <g stroke="#1e1e21" stroke-width="1">
    <line x1="96" y1="196" x2="1008" y2="196"/>
    <line x1="96" y1="430" x2="1008" y2="430"/>
  </g>
  <text x="96" y="330" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="98" font-weight="700" letter-spacing="-4" fill="#ffffff">Invest with pride.</text>
  <text x="96" y="382" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="27" fill="#a5a5a9">Independent, Botswana-owned investment management since 2012.</text>
  <text x="96" y="530" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="20" font-weight="600" letter-spacing="4" fill="#8c8c91">KGORICAPITAL.COM</text>
  <text x="1128" y="500" transform="rotate(-90 1128 500)" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="18" font-weight="600" letter-spacing="6" fill="#ffffff" opacity="0.85">GABORONE</text>
</svg>`;

const logo = await sharp(path.join(brand, "kgori-logo-white.svg"))
  .resize({ width: 300 })
  .png()
  .toBuffer();

await sharp(Buffer.from(card))
  .composite([{ input: logo, left: 96, top: 92 }])
  .png({ quality: 92 })
  .toFile(path.join(root, "public", "brand", "og-card.png"));

await sharp(path.join(brand, "kgori-mark.svg"))
  .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(path.join(brand, "favicon-512.png"));

const check = await readFile(path.join(root, "public", "brand", "og-card.png"));
console.log(`og-card.png: ${Math.round(check.length / 1024)} KB`);
