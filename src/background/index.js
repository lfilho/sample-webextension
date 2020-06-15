import RequestBlocker from './background/request_blocker.js';

console.log('Extension is ready to start blocking!');
RequestBlocker.startMonitoring();
