//
// WIP
// Will return to this file after https://github.com/lfilho/sample-webextension/issues/38
//
/**
 * @jest-environment jsdom
 */

/*
import fs from 'fs';
import { jest } from '@jest/globals';
import { submitFeedbackListener } from '../../../src/browser_action/feedback_sender.js';

jest.mock('../../../src/browser_action/feedback_sender.js');

const browserActionPath = `${process.cwd()}/src/browser_action/index.html`;
const browserActionHtml = fs.readFileSync(browserActionPath).toString();

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
