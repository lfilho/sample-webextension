import RequestMatcher from '../../../src/lib/request_matcher.js';

describe('Request Matcher', () => {
  const BAD_URL = 'https://evil-tracker.com/tracker.js';
  const GOOD_URL = 'https://duckduckgo.com/interview-url-showing-i-passed.js';

  it('should deny urls in the deny list', () => {
    const result = RequestMatcher.isDenied(BAD_URL);
    expect(result).toBe(true);
  });

  it('should not deny urls if they are not in the deny list', () => {
    const result = RequestMatcher.isDenied(GOOD_URL);
    expect(result).toBe(false);
  });
});
