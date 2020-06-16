/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
 */

import requestListener from './request_listener.js';
import Logger from '../shared/util/logger.js';

const BLOCKING_FLAG = 'blocking';
const ALL_URLS_FILTER = { urls: ['<all_urls>'] };

export default class RequestBlocker {
  static startMonitoring() {
    browser.webRequest.onErrorOccurred.addListener(
      Logger.error,
      ALL_URLS_FILTER
    );

    browser.webRequest.onBeforeRequest.addListener(
      requestListener,
      ALL_URLS_FILTER,
      [BLOCKING_FLAG]
    );
  }
}
