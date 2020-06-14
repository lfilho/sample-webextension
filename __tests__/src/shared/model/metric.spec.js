import Metric from '../../../../src/shared/model/metric.js';

describe('Metric', () => {
  it('should throw with an inexisting dimension', () => {
    expect(() => {
      new Metric('my-made-up-dimension', 1);
    }).toThrow(/Invalid dimension/);
    //TODO https://github.com/lfilho/sample-webextension/issues/46
  });

  it('accepts a known dimension', () => {
    expect(() => {
      new Metric(Metric.dimensions.REQUEST_BLOCKED, 1);
    }).not.toThrow();
  });

  it('requires both dimension and value args', () => {
    expect(() => {
      new Metric('one-arg');
    }).toThrow(/Metric constructor needs both a dimension and value for it/);
    //TODO https://github.com/lfilho/sample-webextension/issues/46
  });
});
