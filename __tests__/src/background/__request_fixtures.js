import {
  A_URL,
  GOOD_URL,
  BAD_URL,
} from '../../../src/shared/__url_fixtures.js';

const RANDOM_REQUEST_DETAILS = { url: A_URL };
const ALLOWED_REQUEST_DETAILS = { url: GOOD_URL };
const DENIED_REQUEST_DETAILS = { url: BAD_URL };

export {
  RANDOM_REQUEST_DETAILS,
  ALLOWED_REQUEST_DETAILS,
  DENIED_REQUEST_DETAILS,
};
