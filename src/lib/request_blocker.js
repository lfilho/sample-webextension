import requestListener from './request_listener.js';

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
 */
export default class RequestBlocker {
  static startMonitoring() {
    const BLOCKING_FLAG = 'blocking';

    browser.webRequest.onBeforeRequest.addListener(
      requestListener,
      { urls: ['<all_urls>'] },
      [BLOCKING_FLAG]
    );
  }
}
