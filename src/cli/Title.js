const chalk = require('chalk');
const figlet = require('figlet');

class Title {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(`${chalk.white(
            figlet.textSync(this.text, {
                horizontalLayout: 'full',
            })
        )}\n`)
    }
}

module.exports = Title;
