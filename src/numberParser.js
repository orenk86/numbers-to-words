import { FACTORS, TENS, UP_TO_NINETEEN } from './consts.js';

export function parseNumber(number) {
  if (number < 20) {
    return UP_TO_NINETEEN[number];
  }

  const { factor, factorString, factoredAmount } = getFactorValues(number);

  const remainder = number % factor;
  const conjunction = getConjunction(remainder, number);

  const prefix = number < 100 ? TENS[factoredAmount] : parseNumber(factoredAmount);
  const suffix = remainder === 0 ? '' : `${conjunction}${parseNumber(remainder)}`;

  return `${prefix}${factorString}${suffix}`;
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

export function getFactorValues(number) {
  const factorLength = Math.floor(Math.log10(number));
  const factorIndex = Math.min(factorLength, Object.keys(FACTORS).length - 1);

  const factor = Math.pow(10, factorIndex);
  const factorString = FACTORS[factor];
  const factoredAmount = Math.floor(number / factor);

  return { factor, factorString, factoredAmount };
}
