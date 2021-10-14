const yargs = require("yargs");

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

        // print usage if no arguments are given
        if (yargs.argv._[0] == null) {
            yargs.showHelp();
            return;
        }
    }
}

module.exports = ArgumentParser;
