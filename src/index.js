#! /usr/bin/env node
const cli = require('./cli');
const readme = require('./readme');

// main function
const run = async () => {
    cli.start(' mkreadme ');
    readme.generate('md');
}
run();
