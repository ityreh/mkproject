const yargs = require('yargs');

class ArgumentParser {
    constructor() {
        const options = yargs
            .usage("Usage:\n\t$0\n\t$0 -t <title> -d <description>")
            .option("t", { alias: "title", describe: "Title of your project.", type: "string" })
            .option("d", { alias: "description", description: "Description of your project.", type: "string" })
            .help(true)
            .argv;

        yargs.showHelp();
    }
}

module.exports = ArgumentParser;
