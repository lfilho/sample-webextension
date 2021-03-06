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

    // The argument passed will instead be used as an extra info message
    this.extraInfo = message;
  }
}

export class InvalidMetricTypeError extends MyProjectError {
  message = t('Invalid metric. Metric must be an instance of Metric');
}

export class RequestSendingError extends MyProjectError {
  message = t('Error sending your message. Did you pay your internet bill?');
}

export class MetricInitializationError extends MyProjectError {
  message = t('Metric constructor needs both a dimension and value for it');
}

export class InvalidMetricDimensionError extends MyProjectError {
  message = t('Invalid metric dimension. See `Metric.dimensions` for values.');
}

export class InputTooShortError extends MyProjectError {
  message = t('The value entered is too short.');
}
