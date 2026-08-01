import { chromium } from "playwright-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "media-kit.html");
const outDir = path.join(__dirname, "public", "pdf");
const outPath = path.join(outDir, "yury-media-kit.pdf");

fs.mkdirSync(outDir, { recursive: true });

const executablePath =
  process.env.CHROME_PATH ||
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ].find((p) => fs.existsSync(p));

if (!executablePath) {
  console.error("No se encontró Chrome/Chromium. Define CHROME_PATH.");
  process.exit(1);
}

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({
  viewport: { width: 1440, height: 810 },
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outPath,
  width: "1440px",
  height: "810px",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();
console.log(`PDF written to ${outPath}`);
