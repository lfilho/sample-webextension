import RequestMatcher from './request_matcher.js';

export default function requestListener(requestDetails) {
  const url = requestDetails.url;
  const isUrlDenied = RequestMatcher.isDenied(url);
  const shouldBlock = { cancel: isUrlDenied };

  if (isUrlDenied) {
    console.log(`Blocking request for: ${url}. Nice try!`);
  } else {
    console.log(`URL is good to go: ${url}.`);
  }
  return shouldBlock;
}
