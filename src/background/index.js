import Logger from '../shared/util/logger.js';
import RequestBlocker from './request_blocker.js';

Logger.info('Extension is ready to start blocking!');
RequestBlocker.startMonitoring();
