#!/usr/bin/env node

import { Command } from 'commander';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { version } = require('../package.json'); // Импорт версии из package.json

const program = new Command();

program
  .version(version, '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);

const options = program.opts();
const [filepath1, filepath2] = program.args;

console.log('Comparing files:');
console.log(`File 1: ${filepath1}`);
console.log(`File 2: ${filepath2}`);
console.log(`Format: ${options.format || 'default'}`);
