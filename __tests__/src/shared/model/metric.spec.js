import Metric from '../../../../src/shared/model/metric.js';
import {
  InvalidMetricDimensionError,
  MetricInitializationError,
} from '../../../../src/shared/model/error.js';

describe('Metric', () => {
  it('should throw with an inexisting dimension', () => {
    expect(() => {
      new Metric('my-made-up-dimension', 1);
    }).toThrow(InvalidMetricDimensionError);
  });

  it('accepts a known dimension', () => {
    expect(() => {
      new Metric(Metric.dimensions.REQUEST_BLOCKED, 1);
    }).not.toThrow();
  });

  it('requires both dimension and value args', () => {
    expect(() => {
      new Metric('one-arg');
    }).toThrow(MetricInitializationError);
  });
});
