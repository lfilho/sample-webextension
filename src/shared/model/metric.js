import {
  MetricInitializationError,
  InvalidMetricDimensionError,
} from '../../shared/model/error.js';

const DIMENSIONS = Object.freeze({
  REQUEST_BLOCKED: 'REQUEST_BLOCKED',
});

export default class Metric {
  /**
   * A simple dimension-value tuple
   */
  constructor(dimension, value) {
    if (!dimension || !value) {
      throw new MetricInitializationError();
    }

    const possibleDimensions = Object.keys(DIMENSIONS);
    if (!possibleDimensions.includes(dimension)) {
      throw new InvalidMetricDimensionError();
    }

    this.dimension = dimension;
    this.value = value;
  }

  static get dimensions() {
    return DIMENSIONS;
  }
}
