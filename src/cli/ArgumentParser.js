const yargs = require('yargs');

class ArgumentParser {
    constructor() {
        const options = yargs
            .usage("\nUsage: mkreadme")
            .option("i", {
                alias: "info", describe: "Gives you an overview about the information that will be included in the readme.", type: "boolean", demandOption
                    : false
            })
            .help(true)
            .argv;

        yargs.showHelp();
    }
}

module.exports = ArgumentParser;
