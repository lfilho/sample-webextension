import { submitFeedbackListener } from './feedback_sender.js';
import { FEEDBACK_SUBMIT_BUTTON_SELECTOR } from '../shared/config.js';

const $ = document.querySelector.bind(document);
$(FEEDBACK_SUBMIT_BUTTON_SELECTOR).addEventListener(
  'click',
  submitFeedbackListener
);
