#!/usr/bin/env node

import { Command } from 'commander';
import { createRequire } from 'module';
import { parseFile } from '../src/index.js';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const program = new Command();

const command = () => {
    const [filepath1, filepath2] = program.args;

    const file1Data = parseFile(filepath1);
    const file2Data = parseFile(filepath2);

    console.log('Comparing files:');
    console.log(`File 1: ${filepath1}`);
    console.log(`File 2: ${filepath2}`);
    console.log('File 1 content:', file1Data);
    console.log('File 2 content:', file2Data);
};

// Настройка программы
program
  .version(version, '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action(command)  
  .parse(process.argv);
