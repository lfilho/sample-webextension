import { post } from '../shared/util/fake_fetch.js';
import { hasMinimalLength } from '../shared/util/validation.js';
import Logger from '../shared/util/logger.js';
import { InputTooShortError } from '../shared/model/error.js';
import {
  FEEDBACK_COMMENT_FIELD_SELECTOR,
  FEEDBACK_MESSAGES_CONTAINER_SELECTOR,
  FEEDBACK_ENDPOINT,
} from '../shared/config.js';

const $ = document.querySelector.bind(document);

export async function submitFeedbackListener(event) {
  event.preventDefault();

  try {
    const feedback = $(FEEDBACK_COMMENT_FIELD_SELECTOR).value;

    validate(feedback);

    showWaitingMessage();

    const payload = { feedback };
    const response = await post(FEEDBACK_ENDPOINT, payload);

    showSuccessMessage();
    Logger.debug(`Feedback sent! Server returned status: ${response.status}`);
  } catch (error) {
    showErrorMessage(error.message);
    Logger.error(error);
  }
}

function showMessage(text, className = '') {
  const messagesContainer = $(FEEDBACK_MESSAGES_CONTAINER_SELECTOR);
  messagesContainer.className = className;
  messagesContainer.innerText = text;
}

function showSuccessMessage() {
  showMessage('✅ Feedback sent! Thank you!', 'success');
}

function showErrorMessage(message) {
  showMessage(`❌ ${message}`, 'error');
}

function showWaitingMessage() {
  showMessage('⏳ Sending...');
}

function validate(feedback) {
  const MIN_FEEDBACK_LENGTH = 3;
  if (!hasMinimalLength(feedback, MIN_FEEDBACK_LENGTH)) {
    throw new InputTooShortError(
      `Feedback must have more than ${MIN_FEEDBACK_LENGTH} letters.`
    );
  }
}
