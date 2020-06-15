import { submitFeedbackListener } from './feedback_sender.js';

const SUBMIT_BUTTON_SELECTOR = '#submit';
const $ = document.querySelector.bind(document);
$(SUBMIT_BUTTON_SELECTOR).addEventListener('click', submitFeedbackListener);
