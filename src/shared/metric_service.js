import Metric from './model/metric.js';
import fetch from './util/fake_fetch.js';

export default class MetricService {
  static async emit(metric) {
    if (!(metric instanceof Metric)) {
      throw new Error('Invalid metric.');
    }

    const metricPayload = getMetricPayload(metric);
    const metricJson = getMetricJson(metricPayload);
    const metricString = getMetricString(metricPayload);

    // Here we would make a `fetch` request to our metric service
    // For now, let's just log mimic an async request
    return fetch(metricJson)
      .then((response) => {
        console.log(`Metric sent! Server returned status: ${response.status}`);
        console.info(metricString);
      })
      .catch((error) => {
        console.error(
          'Error while sending metric. Did you pay your internet bill?',
          error
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

function getMetricString(payload) {
  return `INFO  ${payload.timestamp}  ${payload.dimension}=${payload.value}`;
}
