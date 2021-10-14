const Markup = require('./Markup');
const FileWriter = require('./FileWriter');
const Title = require('./Title');
const Description = require('./Description');

function generate(markupLanguage) {
    this.markup = new Markup(markupLanguage);
    let title = new Title('mkreadme', this.markup);
    let description = new Description('This is the description of my program and it will be written to the reamde file.', this.markup);
    write(title, description);
}

function write(title, description) {
    console.log(this.markup);
    let fileWriter = new FileWriter('md');
    fileWriter.open();
    fileWriter.append(title.get());
}

module.exports = {
    generate
}
