// Generates the static Open Graph / Twitter card image at build time.
// Runs automatically via the "prebuild" npm hook, so app/opengraph-image.png
// exists before `next build` collects the route metadata. Keeps binaries out of git.
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
    <path d="M60 0H0V60" fill="none" stroke="#15130d" stroke-opacity="0.05" stroke-width="1"/></pattern></defs>
  <rect width="${W}" height="${H}" fill="#f3eee2"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect x="72" y="64" width="40" height="40" rx="8" fill="#15130d"/>
  <circle cx="92" cy="84" r="7" fill="#d2f24a"/>
  <text x="128" y="93" font-family="Georgia, serif" font-size="30" fill="#15130d" letter-spacing="-1">GrowStackUp</text>
  <rect x="350" y="68" width="312" height="32" rx="16" fill="none" stroke="#d8d0bd"/>
  <text x="370" y="89" font-family="monospace" font-size="16" fill="#6c6553" letter-spacing="2">B2B SIGNAL INTELLIGENCE</text>
  <g font-family="Georgia, serif" fill="#15130d" letter-spacing="-3">
    <text x="70" y="285" font-size="92">Know who&#8217;s</text>
    <rect x="66" y="318" width="566" height="90" rx="6" fill="#d2f24a"/>
    <text x="86" y="385" font-size="92">ready to buy</text>
    <text x="70" y="475" font-size="58" letter-spacing="-1.5">&#8212; before your competitors do.</text>
  </g>
  <text x="72" y="566" font-family="monospace" font-size="24" fill="#6c6553">Ready-to-act pipeline &#183; Recruiters &amp; MSPs</text>
  <circle cx="955" cy="558" r="6" fill="#e2502a"/>
  <text x="971" y="566" font-family="monospace" font-size="22" fill="#15130d">growstackup.com</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();

for (const out of ["app/opengraph-image.png", "app/twitter-image.png"]) {
  const p = resolve(process.cwd(), out);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, png);
  console.log("generated", out, png.length, "bytes");
}
