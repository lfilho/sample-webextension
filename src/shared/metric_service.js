import Metric from './model/metric.js';
import fetch from './util/fake_fetch.js';
import Logger from './util/logger.js';

export default class MetricService {
  static async emit(metric) {
    if (!(metric instanceof Metric)) {
      throw new Error('Invalid metric.');
    }

    const metricPayload = getMetricPayload(metric);
    const metricJson = getMetricJson(metricPayload);
    const metricString = `${metric.dimension}=${metric.value}`;

    // Here we would make a `fetch` request to our metric service
    // For now, let's just log mimic an async request
    return fetch(metricJson)
      .then((response) => {
        Logger.debug(`Metric sent! Server returned status: ${response.status}`);
        Logger.info(metricString);
      })
      .catch((error) => {
        Logger.error(
          `Error while sending metric. Did you pay your internet bill? ${error}`
        );
      });
  }
}

// when are private fields and methods coming? :-(
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

function getMetricPayload(metric) {
  const timestamp = new Date().toISOString();

  const payload = {
    timestamp,
    dimension: metric.dimension,
    value: metric.value,
  };

  return payload;
}

function getMetricJson(payload) {
  return JSON.stringify(payload);
}
