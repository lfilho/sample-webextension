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
    this.log(message, this.severities.INFO);
  }

  static warn(message) {
    this.log(message, this.severities.WARN);
  }

  static error(message) {
    this.log(message, this.severities.ERROR);
  }

  static debug(message) {
    this.log(message, this.severities.DEBUG);
  }

  static log(message, severity = this.severities.INFO) {
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
  const env = process && process.env && process.env.NODE_ENV;
  const isTestEnv = env === 'test';
  const isDebugEnv = env === 'debug';

  const shouldDebug = isDebugEnv && severity === Logger.severities.DEBUG;

  if (isTestEnv || !shouldDebug) {
    return () => {};
  }

  return console[severity].bind(console);
}
