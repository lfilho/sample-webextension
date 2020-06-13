import browserWrapper from 'playwright-firefox';

import { LOCAL_TEST_PAGE_URL } from '../src/lib/__list_fixtures.js';

let page;
let browser;

beforeAll(async () => {
  browser = await browserWrapper.firefox.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(LOCAL_TEST_PAGE_URL);
});

describe('request to known tracker urls should be blocked', () => {
  it('loads the test page', async () => {
    const text = await page.evaluate(() => {
      return document.querySelector('[data-testid="test-page-header"]');
    });
    expect(text).toBeTruthy();
  });

  xit('blocks a known bad url by not loading its iframe', async () => {
    //TODO
  });
});

afterAll(async () => {
  await browser.close();
});
