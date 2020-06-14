import requestListener from './request_listener.js';

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
 */
export default class RequestBlocker {
  static startMonitoring() {
    const BLOCKING_FLAG = 'blocking';
    const URL_FILTER = { urls: ['<all_urls>'] };

    browser.webRequest.onErrorOccurred.addListener(console.error, URL_FILTER);

    browser.webRequest.onBeforeRequest.addListener(
      requestListener,
      URL_FILTER,
      [BLOCKING_FLAG]
    );
  }
}
