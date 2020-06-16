// @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse

const BLOCKING_RESPONSE = Object.freeze({
  CANCELLED: { cancel: true },
  NOT_CANCELLED: { cancel: false },
});

export default BLOCKING_RESPONSE;
