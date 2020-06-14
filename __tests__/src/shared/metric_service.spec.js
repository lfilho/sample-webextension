import MetricService from '../../../src/shared/metric_service.js';
import { InvalidMetricTypeError } from '../../../src/shared/model/error.js';

describe('Metric Service', () => {
  it('should throw if trying to emit an non-Metric', async () => {
    await expect(async () => {
      await MetricService.emit('my-made-up-metric');
    }).rejects.toThrow(InvalidMetricTypeError);
  });
});
