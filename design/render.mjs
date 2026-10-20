import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = process.argv[2] || 'http://127.0.0.1:8767';
const names = ['product', 'product-mobile', 'evidence', 'evidence-mobile', 'workspace', 'reading', 'reading-mobile', 'verification', 'verification-mobile'];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1500, height: 1300 }, deviceScaleFactor: 1.5 });
  await page.goto(new URL('/design/scenes.html', origin).href);
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
  });
  for (const name of names) {
    await page.locator(`#${name}`).screenshot({ path: path.join(root, 'assets', `${name}.png`), omitBackground: true });
    console.log(`Rendered ${name}`);
  }
  const social = await browser.newPage({ viewport: { width: 1280, height: 640 }, deviceScaleFactor: 1 });
  await social.goto(new URL('/design/scenes.html', origin).href);
  await social.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
  });
  await social.locator('#social').screenshot({ path: path.join(root, 'assets', 'social.png'), omitBackground: true });
} finally {
  await browser.close();
}
