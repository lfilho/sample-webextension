import RequestMatcher from './request_matcher.js';

function requestBlockerListener(requestDetails) {
  const url = requestDetails.url;
  const isUrlDenied = RequestMatcher.isDenied(url);
  const shouldBlock = { cancel: isUrlDenied };

  if (isUrlDenied) {
    console.log(`Blocking request for: ${url}. Nice try!`);
  } else {
    console.log(`URL is good to go: ${url}.`);
  }
  return shouldBlock;
}

export default class RequestBlocker {
  static startMonitoring() {
    const BLOCKING_FLAG = 'blocking';

    browser.webRequest.onBeforeRequest.addListener(
      requestBlockerListener,
      { urls: ['<all_urls>'] },
      [BLOCKING_FLAG]
    );
  }
}
