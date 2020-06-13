const A_URL = 'https://example.com';
const GOOD_URL = 'https://duckduckgo.com';
const BAD_URL = 'https://evil-tracker.com';
const ANOTHER_URL = GOOD_URL;
const SOME_URLS = [A_URL, ANOTHER_URL, BAD_URL];
const TEST_PAGE_GOOD_URL =
  'https://itty.bitty.site/#good_page/data:text/html;charset=utf-8;bxze64,XQAAAAJUAgAAAAAAAAAeGInmWR9D54w8viFUpLODPMFrCX5AaNWJLUctE6eqw4tsng+BAo0Hn261+WkdeO1z2ajmUiSFDB8tmuwmCVWgtkWyx0vuHLxiwKocu3EKHm6sHPbJKIoYV9IXCO2KE5wuBjjqioKcvRlC/Tq1L2PtqBn4DpoDyZ53PV2lmQYNZ2EpnRi9NIUUAJGduhSivCHlPIQzE7rddd3XGADqavZ6LRPlI1mBsedNgyHMivlYC0Mkp0Dc4jLt/zXRRkfxmSr4TNiMqBUxWvVPllR5rCycLlWDJ3goy9hKKHUTQrpyiRmKIvy7Nxne5dpo2lJtIPC8XBMWNeJPpzUwqRM4yAO0/8O32Eq8MPBZJG19X41CEuLVxAsU8cSyhNf21IRKvixCYtJDAIBX20HuafJxFf9xrzE3eYPPWG7lbPbKwz7/tDabwA==';
const TEST_PAGE_BAD_URL =
  'https://itty.bitty.site/#bad_page/data:text/html;charset=utf-8;bxze64,XQAAAAKsAgAAAAAAAAB3rtPzhDwxG8xMrKozitOfRcxNzyhSYVvxeY0p4OZAxaiEsK5aMdDUdv7TP00fQSIY6Am7PpUOol3VuC16NL3V/tO5S+K8oMyvDLXSaboYD4Etbh9jyIZmnCruWiq57s4Wxrr3g6BPkZDki8tHbH2FReuV5mttXFAylkBMbQLL3hwWtTqXxHIHzJAFL3ho2AjihBup+v8+KXUatOtf2s1ndFb6SmWH50gejvhB+Rv1KN0+xsH073qK5Z7O0GxUWyJY4OLTPTQabbXancnDcNteAYBhG6hSu5aKuxMJ+eLbC15jGC5gq8Fxa1etA0EeAdpNP0SiQb+oNSWyrqCfdg+Aqt56+QP11R4diLCOMauNVO21mjU8F0l1cSctFDzi3MClo2gH8hsFLBStop9HKSQJJ/ygoNsC53E7Q15Kv9EkOic4hz3jlHWsKRwzOkNXzhh9tgZEED/K7hdIDg0c92QB0QK8nxKCsCgbIv6Ti8Y=';
const BAD_URLS = [BAD_URL, TEST_PAGE_BAD_URL, 'https://facebook.com'];
const GOOD_URLS = [GOOD_URL, TEST_PAGE_GOOD_URL, 'https://eff.org'];

export {
  A_URL,
  GOOD_URL,
  BAD_URL,
  ANOTHER_URL,
  SOME_URLS,
  TEST_PAGE_BAD_URL,
  TEST_PAGE_GOOD_URL,
  BAD_URLS,
  GOOD_URLS,
};
