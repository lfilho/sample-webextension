export default class Logger {
  static get severities() {
    return Object.freeze({
      INFO: 'info',
      WARN: 'warn',
      ERROR: 'error',
      DEBUG: 'debug',
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

    const regularInfo = getFormattedLogLine(severity, timestamp, message);
    const extraInfo = getAugumentedErrorMessage(message);
    const logLine = [regularInfo, extraInfo].filter(Boolean).join('\n');

    const logFunction = getLogFunction(severity);
    logFunction(logLine);
  }
}

function getLogFunction(severity) {
  // If running node tests, don't log anything to avoid polluting the tests output:
  // Optional chaining is not supported by eslint yet (would break our tests). Hence using good old && checks
  // @see https://github.com/eslint/eslint/pull/13416
  let shouldLog = true;

  if (typeof process !== 'undefined') {
    const env = process && process.env && process.env.NODE_ENV;
    const isTestEnv = env === 'test';
    const isDebugEnv = env === 'debug';

    const shouldDebug = isDebugEnv && severity === Logger.severities.DEBUG;
    shouldLog = !isTestEnv || shouldDebug;
  }

  if (!shouldLog) {
    const noop = () => {};
    return noop;
  }

  return console[severity].bind(console);
}

const TOKEN_SEPARATOR = '  ';
function getFormattedLogLine(severity, timestamp, message) {
  const prefix = `[${severity.toUpperCase()}]`;
  return [prefix, timestamp, message].join(TOKEN_SEPARATOR);
}

function getAugumentedErrorMessage(message) {
  let augumentWith = null;

  // If an Error, augment it with extra info message, if available.
  if (message instanceof Error) {
    const extraInfo = message.extraInfo;
    if (extraInfo) {
      augumentWith = `[EXTRA INFO]: ${extraInfo}`;
    }
  }

  return augumentWith;
}
