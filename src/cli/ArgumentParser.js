const yargs = require('yargs');

class ArgumentParser {
    constructor() {
        const options = yargs
            .usage("Usage:\n\t$0\n\t$0 -t <title> -d <description>")
            .option("t", { alias: "title", describe: "Title of your project.", type: "string" })
            .option("d", { alias: "description", description: "Description of your project.", type: "string" })
            .option("b", { alias: "badge", description: "Badge you want to have in your readme.", type: "string" })
            .option("v", { alias: "visual", description: "Visual that visualizes your project.", type: "string" })
            .option("i", { alias: "installation", description: "Installation instructions to be able to use your software.", type: "string" })
            .option("u", { alias: "usage", description: "Usage instructions to be able to use your software.", type: "string" })
            .option("s", { alias: "support", description: "Describe how your users can get support for the software.", type: "string" })
            .option("r", { alias: "roadmap", description: "Add information about the roadmap of your project.", type: "string" })
            .option("c", { alias: "contributing", description: "Explain how others can contribute to your project.", type: "string" })
            .option("a", { alias: "acknowledgment", description: "Add acknowledgments and information about the contributors.", type: "string" })
            .option("l", { alias: "license", description: "Add license information to your project.", type: "string" })
            .help(true)
            .argv;

        yargs.showHelp();
    }
}

module.exports = ArgumentParser;
