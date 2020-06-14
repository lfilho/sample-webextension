import RequestMatcher from './request_matcher.js';
import MetricService from '../shared/metric_service.js';
import Metric from '../shared/model/metric.js';

export default async function requestListener(requestDetails) {
  const url = requestDetails.url;
  const isUrlDenied = RequestMatcher.isDenied(url);
  const blockingReponse = { cancel: isUrlDenied };

  if (isUrlDenied) {
    const metric = new Metric(Metric.dimensions.REQUEST_BLOCKED, url);
    await MetricService.emit(metric);
  }

  return blockingReponse;
}
