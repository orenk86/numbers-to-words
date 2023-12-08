import { HUNDRED, TENS, THOUSAND, UP_TO_NINETEEN } from './consts.js';

export function parseNumber(number) {
  if (number < 20) {
    return UP_TO_NINETEEN[number];
  }

  if (number < 100) {
    const remainder = number % 10;
    const conjunction = getConjunction(remainder, number);
    const suffix = remainder === 0 ? '' : `${conjunction}${parseNumber(remainder)}`;

    return `${TENS[Math.floor(number / 10)]}${suffix}`;
  }

  if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    const conjunction = getConjunction(remainder, number);

    return `${parseNumber(hundreds)} ${HUNDRED}${remainder === 0 ? '' : `${conjunction}${parseNumber(remainder)}`}`;
  }

  const thousands = Math.floor(number / 1000);
  const remainder = number % 1000;
  const conjunction = getConjunction(remainder, number);

  return `${parseNumber(thousands)} ${THOUSAND}${remainder === 0 ? '' : `${conjunction}${parseNumber(remainder)}`}`;
}

export function getConjunction(remainder, number = 0) {
  if (remainder === 0) {
    return '';
  }

  if (remainder < 10 && number > 20 && number < 100) {
    return '-';
  }

  if (remainder < 100) {
    return ' and ';
  }

  if (remainder < 1000) {
    return ', ';
  }
}
