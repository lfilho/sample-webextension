const DIMENSIONS = Object.freeze({
  REQUEST_BLOCKED: 'REQUEST_BLOCKED',
});

export default class Metric {
  /**
   * A simple dimension-value tuple
   */
  constructor(dimension, value) {
    if (!dimension || !value) {
      //TODO https://github.com/lfilho/ddg-test-project/issues/46
      throw new Error(
        'Metric constructor needs both a dimension and value for it'
      );
    }
    const possibleDimensions = Object.keys(DIMENSIONS);
    if (!possibleDimensions.includes(dimension)) {
      //TODO https://github.com/lfilho/ddg-test-project/issues/46
      throw new Error(`Invalid dimension. Valid ones: ${possibleDimensions}`);
    }

    this.dimension = dimension;
    this.value = value;
  }

  static get dimensions() {
    return DIMENSIONS;
  }
}
