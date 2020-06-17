/*
 * TODO work in this file is paused/block.
 * More details and follow up on:
 *   - https://github.com/lfilho/sample-webextension/issues/38
 *   - https://github.com/mozilla/web-ext/issues/1927
 *   - https://github.com/jsdom/jsdom/issues/2475
 */

/**
 * @jest-environment jsdom
 */

/*
import fs from 'fs/promises';
import { jest } from '@jest/globals';
import { submitFeedbackListener } from '../../../src/browser_action/feedback_sender.js';

jest.mock('../../../src/browser_action/feedback_sender.js');

const browserActionPath = `${process.cwd()}/src/browser_action/index.html`;
const browserActionHtml = await fs.readFile(browserActionPath, 'utf8').toString();

describe.skip('Browser Action', () => {
  let $, submitButton, messagesContainer;
  beforeEach(() => {
    // document.documentElement.innerHTML = browserActionHtml;
    $ = document.querySelector.bind(document);
    submitButton = $('#submit');
    messagesContainer = $('#messages');
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it('button exists', (done) => {
    expect(submitButton).toBeTruthy();
    submitButton.click();
    setTimeout(() => {
      expect(messagesContainer.textContent).toMatch(/Thank you!/);
      done();
    }, 5000);
  });
});
*/

describe.skip('Browser Action', () => {
  it.skip();
});
