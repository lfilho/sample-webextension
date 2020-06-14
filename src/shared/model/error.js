/*
 * @see
 * /docs/development/ARCHITECTURE.md#error-handling
 */

// Fake translation function, here as an example only
const t = (string) => string;

// Not supposed to be used directly, hence why not exporting it
class MyProjectError extends Error {
  constructor(message) {
    /*
     * By calling `super` without args here,
     * we force ourselves to create a unique message in each error subclass instead
     */
    super();

    this.name = this.constructor.name; // subclass' name

    // The argument passed will instead be used as additional debugging message
    this.debugMessage = message;
  }
}

export class InvalidMetricTypeError extends MyProjectError {
  message = t('Invalid metric. Metric must be an instance of Metric');
}

export class ErrorSendingMetric extends MyProjectError {
  message = t('Error while sending metric. Did you pay your internet bill?');
}

export class MetricInitializationError extends MyProjectError {
  message = t('Metric constructor needs both a dimension and value for it');
}

export class InvalidMetricDimensionError extends MyProjectError {
  message = t('Invalid metric dimension. See `Metric.dimensions` for values.');
}

export class ListTypeError extends MyProjectError {
  message = t('List constructor needs a type. See `List.types` for values.');
}
