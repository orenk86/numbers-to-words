import { MIN_NUMBER, MAX_NUMBER } from './consts.js';

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
    return { isValid: false, error: 'Please enter a number between 0 and 100,000.' };
  }

  return { isValid: true };
}
