#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

const command = () => {
  console.log('Hello, World!');
};

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .action(command)
  .parse(process.argv);
