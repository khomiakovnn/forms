import puppeteer from 'puppeteer';

describe('Inn Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  }, 10000);

  test('Popover should render on page start', async () => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.popover');
  });  

  afterEach(async () => {
    await browser.close();
  });
});