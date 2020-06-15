import Metric from './model/metric.js';
import { post } from './util/fake_fetch.js';
import { METRIC_ENDPOINT } from './config.js';
import Logger from './util/logger.js';
import { InvalidMetricTypeError } from '../shared/model/error.js';

export default class MetricService {
  static emit(metric) {
    if (!(metric instanceof Metric)) {
      throw new InvalidMetricTypeError();
    }

    const metricPayload = getMetricPayload(metric);
    const metricString = `${metric.dimension}=${metric.value}`;

    // Here we would make a `fetch` request to our metric service
    // For now, let's just log mimic an async request
    Logger.debug(`Sending metric: ${metricString}`);
    return post(METRIC_ENDPOINT, metricPayload);
  }
}

// when are private fields and methods coming? :-(
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

function getMetricPayload(metric) {
  const payload = {
    dimension: metric.dimension,
    value: metric.value,
  };

  return payload;
}
