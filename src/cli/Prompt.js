const inquirer = require('inquirer');

class Prompt {
    question(pMessage) {
        inquirer
            .prompt([
                {
                    name: 'response',
                    message: pMessage
                },
            ])
            .then(answers => {
                return answers.response;
            });
    }

    questionWithDefault(pMessage, pDefault) {
        inquirer
            .prompt([
                {
                    name: 'response',
                    message: pMessage,
                    default: pDefault
                },
            ])
            .then(answers => {
                return answers.response;
            });
    }

    choice(pMessage, pChoices) {
        inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'response',
                    message: pMessage,
                    choices: pChoices,
                },
            ])
            .then(answers => {
                return answers.response;
            });
    }

    checkbox(pMessage, pChoices) {
        inquirer
            .prompt([
                {
                    type: 'checkbox',
                    name: 'response',
                    message: pMessage,
                    choices: pChoices,
                },
            ])
            .then(answers => {
                return answers.response;
            });
    }
}

module.exports = Prompt;
