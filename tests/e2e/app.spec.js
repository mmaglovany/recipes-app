const puppeteer = require('puppeteer');

it('should an element with the class\'.recipes-list\' appear', async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  await page.click('button#show-recipes-btn');
  const el = await page.$eval('.recipes-list', el => el);
  expect(el).not.toBe(null);
});