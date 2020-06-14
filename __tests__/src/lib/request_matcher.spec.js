import RequestMatcher from '../../../src/lib/request_matcher.js';
import {
  A_URL,
  BAD_URL,
  GOOD_URL,
  URL_IN_NO_LISTS,
} from '../../../src/shared/__url_fixtures.js';

beforeEach(() => {
  RequestMatcher.allowList.clear();
  RequestMatcher.denyList.clear();
});

describe('Request Matcher', () => {
  it('should deny urls in the deny list', () => {
    RequestMatcher.denyList.add(BAD_URL);
    const result = RequestMatcher.isDenied(BAD_URL);
    expect(result).toBe(true);
  });

  it('should not deny urls if they are not in the deny list', () => {
    const result = RequestMatcher.isDenied(URL_IN_NO_LISTS);
    expect(result).toBe(false);
  });

  it('should allow urls if they are in the allow list', () => {
    RequestMatcher.allowList.add(GOOD_URL);
    const result = RequestMatcher.isDenied(GOOD_URL);
    expect(result).toBe(false);
  });

  it('should allow urls in both lists', () => {
    RequestMatcher.allowList.add(A_URL);
    RequestMatcher.denyList.add(A_URL);
    const result = RequestMatcher.isDenied(A_URL);
    expect(result).toBe(false);
  });
});
