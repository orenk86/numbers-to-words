# Numbers To Words
This is a simple program that converts numbers to grammatically correct English words.

### Author
Oren Kosto: [orenkosto86@gmail.com](mailto:orenkosto86@gmail.com)

## Features and Limitations

* The output of the program will be in English. No other languages are supported.
* The program can convert positive numbers between 0 and 100,000.
* The program can only convert integer values (no floating points).
* The program can receive only a single argument as input.
* Only numeric inputs are supported.

#### Any input that does not meet the above criteria will result in an error message.

## Installation

This program requires Node.js to run. If you do not have Node.js installed, you can download it [here](https://nodejs.org/en/download/).

The program does not require any dependencies to run, but uses Jest for testing. If you would like to run the tests, you will need to install Jest. You can do this by running the following command from the root directory of the project:

```bash
npm i
```

## Usage

The program can be run from the command line with the following command from the root directory of the project:

```bash
./bin/numbers_to_words 123
```

Or with NPM:

```bash
npm start 123
```

## Tests

To run the tests, run the following command from the root directory of the project:

```bash
npm test
```
