#! /usr/bin/env node

console.log(process.argv);
process.stdout.write(require('./')(process.argv[2]));
