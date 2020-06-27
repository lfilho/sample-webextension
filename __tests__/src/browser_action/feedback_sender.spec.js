/*
 * TODO work in this file is paused/block.
 * More details and follow up on:
 *   - https://github.com/lfilho/sample-webextension/issues/38
 *   - https://github.com/mozilla/web-ext/issues/1927
 *   - https://github.com/jsdom/jsdom/issues/2475
 */

import {
  jest,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from '@jest/globals';
// import { submitFeedbackListener } from '../../../src/browser_action/feedback_sender.js';
import path from 'path';
import playwrightWrapper from 'playwright-firefox';
import webExtWrapper from 'web-ext';
import getPort from 'get-port';

const { firefox } = playwrightWrapper;
const webExt = webExtWrapper.default;

jest.mock('../../../src/browser_action/feedback_sender.js');

webExt.util.logger.consoleStream.makeVerbose();
webExt.util.logger.consoleStream.startCapturing();

// const browserActionPath = `${process.cwd()}/src/browser_action/index.html`;
const browserActionPath = `https://mozilla.org`;
let browser, page, webExtRunner;

beforeAll(async () => {
  // Launch firefox
  webExtRunner = await webExt.cmd.run(
    {
      sourceDir: path.join(process.cwd(), 'src'),
      firefox: firefox.executablePath(),
      args: [`-juggler=${getPort()}`],
    },
    {
      shouldExitProgram: false,
    }
  );

  // Parse firefox logs and extract juggler endpoint.
  const JUGGLER_MESSAGE = `Juggler listening on`;
  const message = webExt.util.logger.consoleStream.capturedMessages.find(
    (msg) => msg.includes(JUGGLER_MESSAGE)
  );
  const wsEndpoint = message.split(JUGGLER_MESSAGE).pop();

  // Connect playwright and start driving browser.
  browser = await firefox.connect({ wsEndpoint });
});

afterAll(async () => {
  await browser.close();
  await webExtRunner.exit();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  jest.resetModules();
  await page.close();
});

describe('Browser Action', () => {
  it('button exists', async () => {
    await page.goto(browserActionPath);
    const submitButton = await page.$('#fxa-learn-primary');
    await expect(submitButton).toBeTruthy();
  });
});
