const LOG_TOKEN_SEPARATOR = '  ';

export default class Logger {
  static get severities() {
    return Object.freeze({
      INFO: 'info',
      WARN: 'warn',
      ERROR: 'error',
      DEBUG: 'log',
    });
  }

  static info(message) {
    Logger.log(message, Logger.severities.INFO);
  }

  static warn(message) {
    Logger.log(message, Logger.severities.WARN);
  }

  static error(message) {
    Logger.log(message, Logger.severities.ERROR);
  }

  static debug(message) {
    Logger.log(message, Logger.severities.DEBUG);
  }

  static log(message, severity = Logger.severities.INFO) {
    const timestamp = new Date().toISOString();

    const logFunction = getLogFunction(severity);

    const logPrefix = `[${severity}]${LOG_TOKEN_SEPARATOR}${timestamp}${LOG_TOKEN_SEPARATOR}`;

    let logMessage = `${logPrefix}${message}`;

    logFunction(logMessage);
  }
}

function getLogFunction(severity) {
  // If running node tests, don't log anything to avoid polluting the tests output:
  // Optional chainig is not supported by eslint yet (would break our tests). Hence using good old && checks
  // @see https://github.com/eslint/eslint/pull/13416
  let shouldLog = true;

  if (typeof process !== 'undefined') {
    const env = process && process.env && process.env.NODE_ENV;
    const isTestEnv = env === 'test';
    const isDebugEnv = env === 'debug';

    const shouldDebug = isDebugEnv && severity === Logger.severities.DEBUG;
    shouldLog = isTestEnv || !shouldDebug;
  }

  if (shouldLog) {
    return () => {};
  }

  return console[severity].bind(console);
}
