import { jest } from '@jest/globals';

import requestListener from '../../../src/background/request_listener.js';
import RequestMatcher from '../../../src/background/request_matcher.js';
import MetricService from '../../../src/shared/metric_service.js';

import {
  RANDOM_REQUEST_DETAILS,
  ALLOWED_REQUEST_DETAILS,
  DENIED_REQUEST_DETAILS,
  BLOCKING_RESPONSE,
} from './__request_fixtures.js';

jest.mock('../../../src/background/request_matcher.js');
jest.mock('../../../src/shared/metric_service.js');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Request Listener', () => {
  it('should return a BlockingResponse with cancel: true for a tracker url', async () => {
    RequestMatcher.isDenied = jest.fn().mockReturnValue(true);
    const result = await requestListener(RANDOM_REQUEST_DETAILS);
    expect(result).toEqual(BLOCKING_RESPONSE.CANCELLED);
  });

  it('should return a BlockingResponse with cancel: false for a non-tracker url', async () => {
    RequestMatcher.isDenied = jest.fn().mockReturnValue(false);
    const result = await requestListener(RANDOM_REQUEST_DETAILS);
    expect(result).toEqual(BLOCKING_RESPONSE.NOT_CANCELLED);
  });

  it('should emit a metric when a request is blocked', async () => {
    RequestMatcher.isDenied = jest.fn().mockReturnValue(true);
    MetricService.emit = jest.fn();
    await requestListener(DENIED_REQUEST_DETAILS);
    expect(MetricService.emit).toBeCalledTimes(1);
  });

  it('should NOT emit a metric when a request is allowed', async () => {
    RequestMatcher.isDenied = jest.fn().mockReturnValue(false);
    MetricService.emit = jest.fn();
    await requestListener(ALLOWED_REQUEST_DETAILS);
    expect(MetricService.emit).not.toBeCalled();
  });
});
