/*
 * TODO work in this file is paused/block.
 * More details and follow up on:
 *   - https://github.com/lfilho/sample-webextension/issues/38
 *   - https://github.com/mozilla/web-ext/issues/1927
 */

/*
import browserWrapper from 'playwright-firefox';

import child_process from 'child_process';
import webExt from 'web-ext';
import pptr from 'puppeteer-core';

import { LOCAL_TEST_PAGE_URL } from '../shared/__url_fixtures.js';

let page, browser;

beforeAll(async () => {
  webExt.default.util.logger.consoleStream.makeVerbose();
  const runningInfo = await webExt.default.cmd
    .run(
      {
        sourceDir: `${process.cwd()}/src`,
        firefox: 'nightly'
      },
      { shouldExitProgram: false }
    )
    .then((runner) => runner.extensionRunners[0].runningInfo);

  // Needed because `webExt.cmd.run` returns before the DevTools agent starts running.
  // Alternative would be to wrap the call to pptr.connect() with some custom retry logic
  child_process.execSync('sleep 5');

  const browserURL = `ws://127.0.0.1:${runningInfo.debuggerPort}`;

  browser = await browserWrapper.firefox.connect({
    wsEndpoint: browserURL,
    logger: {
      isEnabled: () => true,
      log: (name, severity, message, args) => {
        console.log(`[${severity}] ${name} ${message}. Args: ${args}`);
      },
    },
  });
  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto(LOCAL_TEST_PAGE_URL);
});

afterAll(async () => {
  await browser.close();
});
*/

describe.skip('request to known tracker urls should be blocked', () => {
  it.skip();
});
