import RequestMatcher from '../../../src/lib/request_matcher.js';
import { BAD_URL, GOOD_URL } from '../../../src/shared/__url_fixtures.js';

beforeAll(() => RequestMatcher.denyList.add(BAD_URL));
afterAll(() => RequestMatcher.denyList.clear());

describe('Request Matcher', () => {
  it('should deny urls in the deny list', () => {
    const result = RequestMatcher.isDenied(BAD_URL);
    expect(result).toBe(true);
  });

  it('should not deny urls if they are not in the deny list', () => {
    const result = RequestMatcher.isDenied(GOOD_URL);
    expect(result).toBe(false);
  });
});
