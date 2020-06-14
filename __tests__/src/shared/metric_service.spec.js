import MetricService from '../../../src/shared/metric_service.js';

describe('Metric Service', () => {
  it('should throw if trying to emit an non-Metric', async () => {
    await expect(async () => {
      await MetricService.emit('my-made-up-metric');
    }).rejects.toThrow(/Invalid metric/);
    //TODO https://github.com/lfilho/ddg-test-project/issues/46
  });
});
