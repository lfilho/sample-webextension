import { jest } from '@jest/globals';

import requestListener from '../../../src/lib/request_listener.js';
import RequestMatcher from '../../../src/lib/request_matcher.js';

import {
  RANDOM_REQUEST_DETAILS,
  BLOCKING_RESPONSE,
} from './__request_fixtures.js';

jest.mock('../../../src/lib/request_matcher.js');

describe('Request Listener', () => {
  it('should return a BlockingResponse with cancel: true for a tracker url', () => {
    RequestMatcher.isDenied = jest.fn().mockReturnValue(true);
    const result = requestListener(RANDOM_REQUEST_DETAILS);
    expect(result).toEqual(BLOCKING_RESPONSE.CANCELLED);
  });

  it('should return a BlockingResponse with cancel: false for a non-tracker url', () => {
    RequestMatcher.isDenied = jest.fn().mockReturnValue(false);
    const result = requestListener(RANDOM_REQUEST_DETAILS);
    expect(result).toEqual(BLOCKING_RESPONSE.NOT_CANCELLED);
  });
});
