import RequestMatcher from './request_matcher.js';
import MetricService from '../shared/metric_service.js';
import Metric from '../shared/model/metric.js';
import Logger from '../shared/util/logger.js';
import BlockingResponse from './model/blocking_response.js';

export default async function requestListener(requestDetails) {
  const url = requestDetails.url;
  const isUrlDenied = RequestMatcher.isDenied(url);
  const blockingReponse = isUrlDenied
    ? BlockingResponse.CANCELLED
    : BlockingResponse.NOT_CANCELLED;

  if (isUrlDenied) {
    const metric = new Metric(Metric.dimensions.REQUEST_BLOCKED, url);
    try {
      await MetricService.emit(metric);
    } catch (error) {
      Logger.error(error);
    }
  }

  return blockingReponse;
}
