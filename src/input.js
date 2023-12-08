import { MIN_NUMBER, MAX_NUMBER, LOCALE } from './consts.js';

export function validateInput(args) {
  if (args.length === 0) {
    return { isValid: false, error: 'Please enter a number.' };
  }

  if (args.length > 1) {
    return { isValid: false, error: 'Please enter only one number.' };
  }

  if (isNaN(args[0])) {
    return { isValid: false, error: 'Please enter a valid number.' };
  }

  if (args[0] < MIN_NUMBER || args[0] > MAX_NUMBER) {
    return { isValid: false, error: `Please enter a number between ${MIN_NUMBER.toLocaleString(LOCALE)} and ${MAX_NUMBER.toLocaleString(LOCALE)}.` };
  }

  if ((typeof args[0] === 'string' && args[0].includes('.')) || (typeof args[0] === 'number' && args[0] % 1 !== 0)) {
    return { isValid: false, error: 'Please enter an integer value.' };
  }

  return { isValid: true };
}
