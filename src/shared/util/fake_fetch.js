import { FEEDBACK_ENDPOINT } from '../config.js';
import { RequestSendingError } from '../model/error.js';

export function post(url, payload) {
  const timestamp = new Date().toISOString();
  const timestampedPayload = { ...payload, timestamp };

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(timestampedPayload),
  });
}

// A simple `fetch` mock so we can unit test via node without extra dependencies
// With some hardcoded logic just to help with local manual testing ;-)
// After using a isomorphic fetch library + snowpack/webpack we can unmock this function
function fetch(url, payload) {
  const success = Promise.resolve({ status: 200 });
  const fail = Promise.reject(new RequestSendingError({ status: 400 }));

  if (url === FEEDBACK_ENDPOINT) {
    const feedback = JSON.parse(payload.body).feedback;
    return feedback === 'fail' ? fail : success;
  }
  return success;
}
