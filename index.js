import { validateInput } from './src/input.js';
import { parseNumber } from './src/numberParser.js';

const args = process.argv.slice(2);
const { isValid, error } = validateInput(args);

if (!isValid) {
  console.log(error);
  process.exit(1);
}

const number = Number(args[0]);

console.log(parseNumber(number));
process.exit();
