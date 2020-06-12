//TODO on future iteration (soon), externalize the list. Make it easy to mock / test
// https://github.com/lfilho/ddg-test-project/issues/40
const DENY_LIST = new Set([
  'https://evil-tracker.com/tracker.js',
  'http://sneaky-sneaky.com/spy-pixel.gif',
]);

export default class RequestMatcher {
  static isDenied(url) {
    // Look kid, one day there will be a complex algorithm here.
    // For now, full matches only. In future iterations,
    // we should support some sort of pattern instead: *evil-tracker.com/*
    return DENY_LIST.has(url);
  }
}
