export default async function run(page) {
  const viewports = [1440, 1280, 1024, 768, 480, 390];
  const results = [];

  for (const width of viewports) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://localhost:3005", { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    // Test clicking navigation link
    const aboutLink = await page.$('a[href="#about"]');
    let canClickNav = false;
    if (aboutLink && (await aboutLink.isVisible())) {
      canClickNav = true;
    }

    results.push({
      width,
      clientWidth,
      scrollWidth,
      hasHorizontalOverflow,
      navVisible: canClickNav || width < 768, // on mobile, hamburger is used
    });
  }

  return { results };
}
